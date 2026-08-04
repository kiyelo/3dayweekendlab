import type { Metadata } from "next";
import { LegalPage } from "../../ui";

export const metadata: Metadata = {
  title: "Kkiu Terms of Service",
  description: "Terms for using Kkiu.",
};

export default function Page() {
  return (
    <LegalPage
      locale="en"
      active="terms"
      title="Terms of Service"
      lead="These terms govern the use of Kkiu, a to-do application provided by 3 DAY WEEKEND LAB."
      sections={[
        {
          title: "1. How these terms apply",
          paragraphs: [
            "These terms apply when a user accepts them and creates a Kkiu account. 3 DAY WEEKEND LAB. publishes the terms on the website so users can review them at any time.",
          ],
        },
        {
          title: "2. The service",
          paragraphs: [
            "Kkiu provides personal task management, shared tasks between members, activity and completion status, and notifications. The service is currently free. If paid features are introduced, the price and conditions will be shown before purchase.",
          ],
        },
        {
          title: "3. Accounts",
          paragraphs: [
            "Users may create an account through Google authentication. Users must use accurate information, keep access to their account secure, and report unauthorized use to 3dayweekendlab@gmail.com.",
          ],
        },
        {
          title: "4. User responsibilities",
          bullets: [
            "Do not access another person’s account or information without permission.",
            "Do not disrupt the service or bypass or misuse its security features.",
            "Do not store or share unlawful content or content that infringes another person’s rights or privacy.",
            "Respect other members’ information when using invite codes and shared spaces.",
          ],
        },
        {
          title: "5. User content and ownership",
          paragraphs: [
            "Users retain rights in the tasks and content they create. Users give 3 DAY WEEKEND LAB. permission to store, synchronize, and display that content to members of the relevant Kkiri only as needed to provide the service.",
            "Kkiu’s name, design, software, and other service materials belong to 3 DAY WEEKEND LAB. or their respective rights holders.",
          ],
        },
        {
          title: "6. Changes and interruptions",
          paragraphs: [
            "Features may change or be temporarily interrupted for improvements, maintenance, security, or unavoidable operational reasons. We will give advance notice where practical for material changes or extended interruptions.",
          ],
        },
        {
          title: "7. Restrictions",
          paragraphs: [
            "We may restrict use if a user materially violates these terms or applicable law, or threatens the security of the service. Unless urgent security reasons prevent it, we will explain the reason and how to object.",
          ],
        },
        {
          title: "8. Closing an account",
          paragraphs: [
            "Users may leave the service at any time through the account deletion feature. The account deletion page and Privacy Policy explain what is deleted and how shared data is handled.",
          ],
        },
        {
          title: "9. Responsibility for the service",
          paragraphs: [
            "3 DAY WEEKEND LAB. uses reasonable care in operating Kkiu. To the extent permitted by law, it is not responsible for interruptions caused by events outside its reasonable control, such as natural disasters, network failures, or third-party platform outages, unless caused by its intent or gross negligence.",
            "Nothing in these terms excludes liability that cannot lawfully be excluded or limits a user’s statutory rights.",
          ],
        },
        {
          title: "10. Privacy",
          paragraphs: ["The Privacy Policy explains how personal information is handled."],
        },
        {
          title: "11. Changes and contact",
          paragraphs: [
            "If these terms change, we will announce the effective date and changes through the service or website. Material changes that disadvantage users will generally be announced at least 30 days in advance.",
            "Service and terms inquiries: 3dayweekendlab@gmail.com",
          ],
        },
        {
          title: "12. Governing law and disputes",
          paragraphs: [
            "These terms are governed by the laws of the Republic of Korea. The parties will first try to resolve disputes through discussion; unresolved disputes will be submitted to the court with jurisdiction under applicable law.",
            "Published and effective: August 5, 2026.",
          ],
        },
      ]}
    />
  );
}
