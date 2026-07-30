import type { Metadata } from "next";
import { ProductPage } from "../../ui";

export const metadata: Metadata = {
  title: "끼우 투두",
  description: "오늘 할 일을 선명하게 보고 하나씩 가볍게 끝내는 투두 앱.",
};

export default function Page() {
  return <ProductPage locale="ko" />;
}
