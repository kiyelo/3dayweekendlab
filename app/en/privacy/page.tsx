import type { Metadata } from "next";
import { LegalPage } from "../../ui";

export const metadata: Metadata = {
  title: "Kkiu Privacy Policy",
  description: "How Kkiu handles personal information and user rights.",
};

export default function Page() {
  return (
    <LegalPage
      locale="en"
      active="privacy"
      title="Privacy Policy"
      lead="3 DAY WEEKEND LAB. processes only the personal information needed to provide Kkiu."
      sections={[
        {
          title: "1. Scope",
          paragraphs: [
            "This policy applies to Kkiu, a to-do application provided by 3 DAY WEEKEND LAB., and the account deletion feature on the Kkiu website.",
          ],
        },
        {
          title: "2. Information we process",
          bullets: [
            "Account and authentication: Google account email, name and profile image provided by Google, OAuth provider information, and Kkiu account UUID",
            "Profile: display name, emoji, notification preferences, and creation/update timestamps",
            "Tasks and Kkiri: task title, order, completion and notification details; Kkiri name, emoji and invite code; member UUID, role, nickname, emoji, and join/leave timestamps",
            "Usage records: read and completion records, changes to memberships, profiles and tasks within a Kkiri, and event timestamps",
            "Consent records: document type and version, consent time, locale, app version, and related context",
            "Notifications: device platform, push token, notification status, and delivery processing records",
          ],
          paragraphs: [
            "We collect this information from Google sign-in, information users enter, and records created while the service is used. Kkiu requests only the openid, email, and profile scopes and never collects a Google password or one-time authentication code.",
          ],
        },
        {
          title: "3. Why we use it",
          bullets: [
            "Creating accounts, signing users in, and verifying account ownership",
            "Storing and synchronizing personal and shared tasks and providing Kkiri features",
            "Showing activity, completion and read status, and sending service notifications",
            "Maintaining consent records, processing account deletion, and protecting the service",
          ],
        },
        {
          title: "4. Retention",
          paragraphs: [
            "Account and service data is generally kept until the account is deleted. Kkiri activity records are retained for 90 days after creation. Queued notification information is kept only as long as needed for delivery and error handling.",
            "If applicable law requires retention, only the required information will be kept for the legally required period.",
          ],
        },
        {
          title: "5. Sharing with third parties",
          paragraphs: [
            "3 DAY WEEKEND LAB. does not sell or provide personal information to third parties, except with the user’s separate consent or where applicable law specifically permits or requires it.",
          ],
        },
        {
          title: "6. Service providers and international processing",
          paragraphs: [
            "We use Supabase, Inc. for authentication and database operations. Account and service data is transferred over encrypted networks and processed and stored in a Japan region for the duration of use or until the service-provider agreement ends.",
            "Google LLC processes Google OAuth sign-in and provides account information. During sign-in, email and public profile information may be processed over encrypted networks in the United States and other countries where Google operates, subject to Google’s retention policies.",
            "This processing is necessary to perform the service agreement with the user. A user may refuse the transfer by not proceeding with Google sign-in, but account-based features will then be unavailable.",
          ],
        },
        {
          title: "7. Deletion",
          paragraphs: [
            "We delete personal information without undue delay when its purpose is fulfilled or its retention period ends. Electronic files are deleted using methods designed to prevent recovery.",
            "Deleting an account removes the authentication account, email, profile, personal tasks, personal completion and read records, consent records, push tokens, and queued notifications linked to that account. Shared Kkiri, task and activity records may remain for other members, but the departing user’s profile and actor information is deleted or anonymized.",
          ],
        },
        {
          title: "8. User rights",
          paragraphs: [
            "Users can view or update profile information in the app and can request deletion after verifying ownership with the Google account used to sign up. Requests to access, correct, delete, or restrict processing may also be sent to the email below and will be handled after identity verification as required by applicable law.",
          ],
        },
        {
          title: "9. Automatically stored information",
          paragraphs: [
            "Kkiu does not use cookies for advertising or user tracking. Authentication information needed to keep a user signed in and service access records may be stored on the device or in a service provider’s systems.",
          ],
        },
        {
          title: "10. Security",
          paragraphs: [
            "3 DAY WEEKEND LAB. uses safeguards including encryption in transit, Supabase Row Level Security, per-user access controls, and permission-limited database functions.",
          ],
        },
        {
          title: "11. Privacy contact",
          paragraphs: [
            "Privacy contact: 3 DAY WEEKEND LAB. Operations",
            "Email: 3dayweekendlab@gmail.com",
          ],
        },
        {
          title: "12. Changes",
          paragraphs: [
            "We will give notice through the service or website before this policy changes. Published and effective: August 5, 2026.",
          ],
        },
      ]}
    />
  );
}
