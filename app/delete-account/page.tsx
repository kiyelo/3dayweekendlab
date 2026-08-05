import type { Metadata } from "next";
import { DeleteAccountPage } from "../ui";

export const metadata: Metadata = {
  title: "끼우 회원 탈퇴",
  description: "끼우 회원 본인 확인 및 탈퇴 절차 안내입니다.",
};

export default function Page() {
  return <DeleteAccountPage locale="ko" />;
}
