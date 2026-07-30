alter table public.completion_events
  alter column user_id drop not null;

create or replace function public.delete_my_account()
returns jsonb
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $function$
declare
  target_user_id uuid := (select auth.uid());
  affected_circle_ids uuid[] := array[]::uuid[];
  soft_deleted_memberships integer := 0;
  deleted_personal_tasks integer := 0;
  deleted_circles integer := 0;
  preserved_group_tasks integer := 0;
  unassigned_group_tasks integer := 0;
  deleted_personal_completion_events integer := 0;
  anonymized_group_completion_events integer := 0;
  anonymized_activity_logs integer := 0;
  deleted_push_devices integer := 0;
  deleted_notification_rows integer := 0;
begin
  if target_user_id is null then
    raise exception using
      errcode = '42501',
      message = 'AUTHENTICATION_REQUIRED';
  end if;

  perform 1
  from auth.users
  where id = target_user_id
  for update;

  if not found then
    raise exception using
      errcode = 'P0002',
      message = 'USER_NOT_FOUND';
  end if;

  select coalesce(array_agg(cm.circle_id), array[]::uuid[])
    into affected_circle_ids
  from public.circle_members cm
  where cm.user_id = target_user_id
    and cm.left_at is null;

  select count(*)
    into preserved_group_tasks
  from public.tasks
  where circle_id is not null
    and (owner_id = target_user_id or assignee_id = target_user_id);

  update public.tasks
  set assignee_id = null
  where circle_id is not null
    and assignee_id = target_user_id;

  get diagnostics unassigned_group_tasks = row_count;

  update public.circle_members
  set
    left_at = coalesce(left_at, now()),
    nickname = null,
    emoji = null
  where user_id = target_user_id;

  get diagnostics soft_deleted_memberships = row_count;

  if cardinality(affected_circle_ids) > 0 then
    select count(*)
      into deleted_circles
    from unnest(affected_circle_ids) as affected_circle(circle_id)
    where not exists (
      select 1
      from public.circles c
      where c.id = affected_circle.circle_id
    );
  end if;

  delete from public.completion_events
  where user_id = target_user_id
    and circle_id is null;

  get diagnostics deleted_personal_completion_events = row_count;

  update public.completion_events
  set user_id = null
  where user_id = target_user_id
    and circle_id is not null;

  get diagnostics anonymized_group_completion_events = row_count;

  update public.circle_activity_logs
  set actor_id = null
  where actor_id = target_user_id;

  get diagnostics anonymized_activity_logs = row_count;

  update public.circle_activity_logs
  set payload = (payload - array[
    'member_id', 'nickname', 'emoji',
    'old_nickname', 'new_nickname', 'old_emoji', 'new_emoji'
  ]) || jsonb_build_object('member_deleted', true)
  where payload ->> 'member_id' = target_user_id::text;

  update public.circle_activity_logs
  set payload = payload - 'owner_id'
  where payload ->> 'owner_id' = target_user_id::text;

  update public.circle_activity_logs
  set payload = payload - 'assignee_id'
  where payload ->> 'assignee_id' = target_user_id::text;

  update public.circle_activity_logs
  set payload = payload - 'old_assignee_id'
  where payload ->> 'old_assignee_id' = target_user_id::text;

  update public.circle_activity_logs
  set payload = payload - 'new_assignee_id'
  where payload ->> 'new_assignee_id' = target_user_id::text;

  delete from public.tasks
  where owner_id = target_user_id
    and circle_id is null;

  get diagnostics deleted_personal_tasks = row_count;

  delete from public.task_read_receipts
  where user_id = target_user_id;

  delete from public.terms_acceptances
  where user_id = target_user_id;

  if to_regclass('public.notification_outbox') is not null then
    execute $sql$
      delete from public.notification_outbox
      where recipient_id = $1
         or actor_id = $1
         or payload::text like '%' || $1::text || '%'
    $sql$ using target_user_id;
    get diagnostics deleted_notification_rows = row_count;
  end if;

  if to_regclass('public.push_devices') is not null then
    execute 'delete from public.push_devices where user_id = $1'
      using target_user_id;
    get diagnostics deleted_push_devices = row_count;
  end if;

  delete from public.profiles
  where user_id = target_user_id;

  update public.app_users
  set deleted_at = coalesce(deleted_at, now())
  where id = target_user_id;

  delete from auth.users
  where id = target_user_id;

  if not found then
    raise exception using
      errcode = 'P0002',
      message = 'USER_NOT_FOUND';
  end if;

  return jsonb_build_object(
    'deleted_user_id', target_user_id,
    'soft_deleted_memberships', soft_deleted_memberships,
    'deleted_circles', deleted_circles,
    'deleted_personal_tasks', deleted_personal_tasks,
    'preserved_group_tasks', preserved_group_tasks,
    'unassigned_group_tasks', unassigned_group_tasks,
    'deleted_personal_completion_events', deleted_personal_completion_events,
    'anonymized_group_completion_events', anonymized_group_completion_events,
    'anonymized_activity_logs', anonymized_activity_logs,
    'deleted_push_devices', deleted_push_devices,
    'deleted_notification_rows', deleted_notification_rows
  );
end;
$function$;

revoke all on function public.delete_my_account() from public;
revoke all on function public.delete_my_account() from anon;
grant execute on function public.delete_my_account() to authenticated;

comment on function public.delete_my_account() is
  'Deletes an authenticated user account and personal data, while anonymizing retained shared Kkiri history.';
