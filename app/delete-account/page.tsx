import type { Metadata } from "next";
import { DeleteAccountPage } from "../ui";

export const metadata: Metadata = {
  title: "끼우 계정 삭제",
  description: "끼우 계정 소유권 확인 및 삭제 요청 절차 안내입니다.",
};

export default function Page() {
  return <DeleteAccountPage locale="ko" />;
}
