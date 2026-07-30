import type { Metadata } from "next";
import { LegalPage } from "../../ui";

export const metadata: Metadata = {
  title: "Kkiu Privacy Policy",
  description: "The personal information and user data Kkiu actually stores and processes.",
};

export default function Page() {
  return (
    <LegalPage
      locale="en"
      active="privacy"
      title="Privacy Policy"
      lead="3 Day Weekend Lab processes the information below to provide Kkiu. This policy reflects the fields actually stored by the authentication system and database."
      sections={[
        {
          title: "1. Scope",
          paragraphs: [
            "This policy applies to Kkiu, a to-do application provided by 3 Day Weekend Lab, and Kkiu’s web-based account deletion service.",
          ],
        },
        {
          title: "2. Google OAuth account information",
          paragraphs: [
            "Kkiu uses Google OAuth through Supabase Auth for registration, sign-in, and account ownership verification during deletion. Google account email, public profile information provided by Google (such as name and profile image), OAuth provider information, and the Kkiu account UUID may be processed.",
            "Kkiu requests only the openid, email, and profile scopes required for basic sign-in. It does not request additional scopes to access data from other Google services.",
          ],
        },
        {
          title: "3. Information stored by Kkiu",
          bullets: [
            "Profile: display name, emoji, notification preferences, and creation/update timestamps",
            "Personal and shared tasks: title, owner and assignee UUIDs, Kkiri UUID, ordering, completion time, scheduled notification time, and creation/update timestamps",
            "Kkiri: name, emoji, invite code, join lock, creator UUID, and creation/update timestamps",
            "Memberships: user UUID, role, nickname, emoji, join/leave time, and display order",
            "Read and completion records: task UUID, user UUID, seen time, completed task title, completion time, and elapsed time",
            "Activity records: membership, profile, and task changes within a Kkiri, actor UUID, related task/assignee/title data, and event time",
            "Terms acceptance: document type and version, acceptance time, source screen, locale, and context such as app version",
            "Notifications: device platform, push token, enabled state, recipient/actor/Kkiri/task UUIDs, notification kind, title, deep link, processing status, attempts, errors, and processing timestamps",
          ],
        },
        {
          title: "4. Purposes of use",
          bullets: [
            "Account creation, sign-in, and ownership verification",
            "Providing and synchronizing personal and shared tasks",
            "Showing Kkiri activity, completion history, and read state",
            "Sending service notifications to devices selected by the user",
            "Maintaining consent records for terms and privacy policies",
            "Processing account deletion requests and maintaining service integrity",
          ],
        },
        {
          title: "5. Service providers and international processing",
          paragraphs: [
            "Kkiu uses Supabase for authentication and database operations, with the database project configured in the Japan region. Google processes OAuth sign-in and provides account information. Each provider processes information as necessary to deliver its service under its own privacy and security terms.",
          ],
        },
        {
          title: "6. Retention and deletion",
          paragraphs: [
            "Information for an active account is retained while the service is provided. Kkiri activity logs are generally retained for 90 days after creation. Queued notification records are retained as needed for delivery and error processing.",
            "When an account is deleted, the Google OAuth authentication account, email, Kkiu profile, personal tasks, personal completion history, read records, terms acceptance records, device push tokens, and queued notification records linked to the account are deleted.",
            "Kkiri, shared tasks, and shared activity history may be retained for continuity for other members. In that case, the departing user’s profile and actor information are removed or anonymized. A tombstoned account UUID and deletion time may remain solely to preserve internal relationships without directly identifying the user.",
          ],
        },
        {
          title: "7. User choices and rights",
          paragraphs: [
            "Users can request deletion of their account and personal data on Kkiu’s account deletion page after verifying ownership with the Google account used to sign up. Notification delivery can be changed in Kkiu or in device settings.",
          ],
        },
        {
          title: "8. Security measures",
          paragraphs: [
            "Kkiu uses encryption in transit, Supabase Row Level Security, per-user access controls, and permission-limited database functions. Kkiu never collects a Google password or one-time authentication code.",
          ],
        },
        {
          title: "9. Changes to this policy",
          paragraphs: [
            "This policy will be updated when service functionality or data handling changes. Effective date: July 30, 2026.",
          ],
        },
      ]}
    />
  );
}
