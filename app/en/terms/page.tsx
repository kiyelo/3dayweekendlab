import type { Metadata } from "next";
import { LegalPage } from "../../ui";

export const metadata: Metadata = {
  title: "Kkiu Terms of Service",
  description: "Basic terms for using Kkiu.",
};

export default function Page() {
  return (
    <LegalPage
      locale="en"
      active="terms"
      title="Terms of Service"
      lead="These terms describe the basic conditions for using Kkiu, a to-do application provided by 3 DAY WEEKEND LAB."
      notice={{
        title: "Draft",
        body: "The effective date and detailed clauses will be reviewed when the service operator and launch features are finalized.",
      }}
      sections={[
        {
          title: "1. The service",
          paragraphs: ["Kkiu is a to-do application that helps users record and manage tasks."],
        },
        {
          title: "2. Accounts",
          paragraphs: [
            "Users may create and access a Kkiu account through Google account authentication. Users are responsible for keeping access to their account secure.",
          ],
        },
        {
          title: "3. Acceptable use",
          bullets: [
            "Do not access another person’s account without permission.",
            "Do not interfere with the stable operation of the service.",
            "Do not use the service to violate applicable law or the rights of others.",
          ],
        },
        {
          title: "4. Changes to the service",
          paragraphs: [
            "Features may be added, changed, or discontinued to maintain service quality and safety. Material changes will be communicated through a reasonable channel.",
          ],
        },
        {
          title: "5. Closing an account",
          paragraphs: [
            "Users may end their use of Kkiu through the account deletion process. The account deletion page describes the applicable procedure.",
          ],
        },
      ]}
    />
  );
}
