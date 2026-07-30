import type { Metadata } from "next";
import { ProductPage } from "../../../ui";

export const metadata: Metadata = {
  title: "Kkiu Todo",
  description: "A to-do app for seeing today’s tasks clearly and finishing them one by one.",
};

export default function Page() {
  return <ProductPage locale="en" />;
}
