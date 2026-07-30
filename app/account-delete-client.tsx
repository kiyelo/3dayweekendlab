"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "./supabase-client";

type Stage = "checking" | "signed-out" | "ready" | "deleting" | "deleted" | "error";

function getErrorMessage(error: unknown, locale: "ko" | "en") {
  const fallback = locale === "ko"
    ? "요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요."
    : "We could not process the request. Please try again.";

  if (!(error instanceof Error)) return fallback;
  if (error.message.includes("AUTHENTICATION_REQUIRED")) {
    return locale === "ko" ? "로그인 세션이 만료되었습니다. 다시 로그인해 주세요." : "Your session expired. Please sign in again.";
  }
  return fallback;
}

export function AccountDeleteClient({ locale }: { locale: "ko" | "en" }) {
  const ko = locale === "ko";
  const [stage, setStage] = useState<Stage>("checking");
  const [user, setUser] = useState<User | null>(null);
  const [confirmation, setConfirmation] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    supabase.auth.getUser().then(({ data, error }) => {
      if (!active) return;
      if (error || !data.user) {
        setUser(null);
        setStage("signed-out");
        return;
      }
      setUser(data.user);
      setStage("ready");
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      setUser(session?.user ?? null);
      setStage(session?.user ? "ready" : "signed-out");
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function signIn() {
    setMessage("");
    setStage("checking");
    await supabase.auth.signOut({ scope: "local" });

    const redirectTo = `${window.location.origin}${ko ? "/delete-account/" : "/en/delete-account/"}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        queryParams: {
          prompt: "select_account",
        },
      },
    });

    if (error) {
      setMessage(getErrorMessage(error, locale));
      setStage("error");
    }
  }

  async function deleteAccount() {
    if (!user || !acknowledged || confirmation.trim() !== (ko ? "계정 삭제" : "DELETE")) return;

    setStage("deleting");
    setMessage("");

    const { error } = await supabase.rpc("delete_my_account");
    if (error) {
      setMessage(getErrorMessage(error, locale));
      setStage("error");
      return;
    }

    await supabase.auth.signOut({ scope: "local" }).catch(() => undefined);
    setUser(null);
    setStage("deleted");
  }

  if (stage === "checking") {
    return (
      <div className="account-action" aria-live="polite">
        <p className="action-status">{ko ? "로그인 상태를 확인하고 있습니다." : "Checking your sign-in status."}</p>
      </div>
    );
  }

  if (stage === "deleted") {
    return (
      <div className="account-action account-success" role="status">
        <span>✓</span>
        <div>
          <h2>{ko ? "계정 삭제가 완료되었습니다." : "Your account has been deleted."}</h2>
          <p>{ko ? "끼우에서 로그아웃되었으며 삭제된 계정으로 다시 로그인할 수 없습니다." : "You have been signed out of Kkiu and can no longer access the deleted account."}</p>
        </div>
      </div>
    );
  }

  if (!user || stage === "signed-out") {
    return (
      <div className="account-action">
        <div>
          <span className="action-index">STEP 01</span>
          <h2>{ko ? "Google 계정으로 본인 확인" : "Verify with your Google account"}</h2>
          <p>
            {ko
              ? "끼우 가입에 사용한 Google 계정을 선택하세요. 로그인은 본인 확인 목적으로만 사용됩니다."
              : "Choose the Google account used for Kkiu. Sign-in is used only to verify account ownership."}
          </p>
        </div>
        <button className="oauth-button" type="button" onClick={signIn}>
          <span className="google-g" aria-hidden="true">G</span>
          {ko ? "Google로 계속" : "Continue with Google"}
        </button>
        {message ? <p className="form-error" role="alert">{message}</p> : null}
      </div>
    );
  }

  const requiredText = ko ? "계정 삭제" : "DELETE";
  const enabled = acknowledged && confirmation.trim() === requiredText && stage !== "deleting";

  return (
    <div className="account-action">
      <div className="verified-user">
        <span className="verified-mark">✓</span>
        <div>
          <small>{ko ? "확인된 끼우 계정" : "Verified Kkiu account"}</small>
          <strong>{user.email ?? user.id}</strong>
        </div>
        <button type="button" className="change-account" onClick={signIn}>
          {ko ? "계정 변경" : "Change"}
        </button>
      </div>

      <div className="delete-confirmation">
        <span className="action-index">STEP 02</span>
        <h2>{ko ? "삭제 내용을 확인하세요" : "Confirm what will be deleted"}</h2>
        <ul>
          <li>{ko ? "Google OAuth 계정 및 끼우 프로필" : "Google OAuth account and Kkiu profile"}</li>
          <li>{ko ? "개인 할 일, 약관 동의 기록, 기기 푸시 토큰" : "Personal tasks, terms acceptance records, and device push tokens"}</li>
          <li>{ko ? "개인 완료 기록 및 계정과 연결된 알림 대기 데이터" : "Personal completion history and queued notification data linked to the account"}</li>
        </ul>
        <p className="retention-note">
          {ko
            ? "공유 끼리의 할 일과 활동 이력은 다른 구성원의 이용을 위해 유지될 수 있으며, 탈퇴 계정의 프로필과 행위자 정보는 제거하거나 익명화합니다."
            : "Tasks and activity history shared in a Kkiri may be retained for other members, while the deleted account’s profile and actor information are removed or anonymized."}
        </p>

        <label className="acknowledge">
          <input type="checkbox" checked={acknowledged} onChange={(event) => setAcknowledged(event.target.checked)} />
          <span>{ko ? "삭제 후 계정과 개인 데이터를 복구할 수 없음을 이해했습니다." : "I understand that the account and personal data cannot be recovered."}</span>
        </label>

        <label className="confirmation-field">
          <span>
            {ko ? "확인을 위해 " : "Type "}
            <strong>{requiredText}</strong>
            {ko ? "를 입력하세요." : " to confirm."}
          </span>
          <input
            type="text"
            value={confirmation}
            onChange={(event) => setConfirmation(event.target.value)}
            autoComplete="off"
          />
        </label>

        <button className="delete-button" type="button" disabled={!enabled} onClick={deleteAccount}>
          {stage === "deleting" ? (ko ? "삭제하는 중…" : "Deleting…") : (ko ? "끼우 계정 영구 삭제" : "Permanently delete Kkiu account")}
        </button>
        {message ? <p className="form-error" role="alert">{message}</p> : null}
      </div>
    </div>
  );
}
