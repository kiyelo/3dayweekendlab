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
          title: "1. Information we process and why",
          bullets: [
            "Registration and sign-in: email, account identifier, name, and profile image received from the sign-in provider selected by the user",
            "Profile and settings: nickname, emoji, language, and notification preferences",
            "Service use: personal and shared tasks, Kkiri names, invite codes and membership information, completion, read, and activity records",
            "Service operation: terms acceptance records, device push tokens, and notification processing records",
          ],
          paragraphs: [
            "We use this information for registration and identity verification, task and Kkiri features, data synchronization, notifications, support, and service security. It is collected from sign-in providers, user input, and use of the service.",
          ],
        },
        {
          title: "2. Retention",
          bullets: [
            "Member information, profiles, personal tasks, and settings: until the member leaves Kkiu",
            "Shared Kkiri, task, and activity records: while the relevant Kkiri remains active. Information identifying a departing member is deleted or anonymized.",
            "Kkiri activity may be displayed in the app for the most recent 90 days; this is not the retention period for personal information.",
          ],
          paragraphs: ["Where applicable law requires retention, only the required information is kept for the legally required period."],
        },
        {
          title: "3. Sharing with third parties",
          paragraphs: [
            "3 DAY WEEKEND LAB. does not provide personal information to third parties, except with the user’s separate consent or where applicable law permits or requires it.",
          ],
        },
        {
          title: "4. Service providers and international transfers",
          bullets: [
            "Processor and recipient: Supabase Pte. Ltd. (https://supabase.com/privacy)",
            "Purpose: member authentication, data storage, and service operation",
            "Information transferred: the categories listed in Section 1",
            "Country, timing, and method: Japan, transmitted over encrypted networks when the service is used",
            "Retention: until the member leaves Kkiu or the service agreement with the processor ends",
          ],
          paragraphs: [
            "The transfer is necessary to perform the service agreement with the user. A user may refuse it by not registering, but account-based features will then be unavailable.",
          ],
        },
        {
          title: "5. Deletion",
          paragraphs: [
            "We delete personal information without undue delay when its purpose is fulfilled or its retention period ends. Electronic files are deleted using methods designed to prevent recovery.",
            "When a member leaves Kkiu, member information and personal data are deleted. Shared Kkiri data may remain for service continuity, but information identifying the departing member is deleted or anonymized.",
          ],
        },
        {
          title: "6. User and legal representative rights",
          paragraphs: [
            "Users can view or update their information in the app and may leave Kkiu at any time. Requests to access, correct, delete, or restrict personal information may be sent to the email below and will be handled after identity verification. A legal representative may exercise a child’s rights where applicable law permits.",
          ],
        },
        {
          title: "7. Automatically stored information",
          paragraphs: [
            "Kkiu does not use cookies or SDKs for advertising or user tracking. Authentication information and access records needed to maintain sign-in and service security may be generated during use.",
          ],
        },
        {
          title: "8. Security",
          paragraphs: [
            "3 DAY WEEKEND LAB. uses safeguards including encryption in transit, access restrictions, Row Level Security, and internal access controls.",
          ],
        },
        {
          title: "9. Privacy contact",
          paragraphs: [
            "Privacy contact: 3 DAY WEEKEND LAB. Operations",
            "Email: 3dayweekendlab@gmail.com",
          ],
        },
        {
          title: "10. Changes",
          paragraphs: [
            "We will give notice through the service or website before this policy changes. Published and effective: August 5, 2026.",
          ],
        },
      ]}
    />
  );
}
