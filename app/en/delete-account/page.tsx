import type { Metadata } from "next";
import { DeleteAccountPage } from "../../ui";

export const metadata: Metadata = {
  title: "Delete your Kkiu account",
  description: "How Kkiu verifies account ownership for deletion requests.",
};

export default function Page() {
  return <DeleteAccountPage locale="en" />;
}
