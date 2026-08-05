import type { Metadata } from "next";
import { DeleteAccountPage } from "../../ui";

export const metadata: Metadata = {
  title: "Leave Kkiu",
  description: "How Kkiu verifies membership ownership and handles withdrawal.",
};

export default function Page() {
  return <DeleteAccountPage locale="en" />;
}
