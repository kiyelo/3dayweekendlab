import type { Metadata } from "next";
import { LegalPage } from "../ui";

export const metadata: Metadata = {
  title: "끼우 이용약관",
  description: "끼우 서비스 이용약관입니다.",
};

export default function Page() {
  return (
    <LegalPage
      locale="ko"
      active="terms"
      title="이용약관"
      lead="본 약관은 3 Day Weekend Lab이 제공하는 투두 애플리케이션 끼우의 기본 이용 조건을 안내합니다."
      notice={{
        title: "초안",
        body: "서비스 운영 주체와 출시 기능이 확정된 후 시행일 및 세부 조항을 검토하여 게시합니다.",
      }}
      sections={[
        {
          title: "1. 서비스",
          paragraphs: [
            "끼우는 사용자가 할 일을 기록하고 관리할 수 있도록 돕는 투두 애플리케이션입니다.",
          ],
        },
        {
          title: "2. 계정",
          paragraphs: [
            "사용자는 Google 계정 인증을 통해 끼우 계정을 만들고 이용할 수 있습니다. 사용자는 자신의 계정 접근 수단을 안전하게 관리해야 합니다.",
          ],
        },
        {
          title: "3. 올바른 이용",
          bullets: [
            "다른 사람의 계정을 허가 없이 이용하지 않습니다.",
            "서비스의 안정적인 운영을 방해하지 않습니다.",
            "관련 법령 또는 타인의 권리를 침해하는 목적으로 서비스를 이용하지 않습니다.",
          ],
        },
        {
          title: "4. 서비스 변경",
          paragraphs: [
            "서비스 품질과 안전을 위해 기능이 추가, 변경 또는 종료될 수 있습니다. 중요한 변경은 합리적인 방법으로 안내합니다.",
          ],
        },
        {
          title: "5. 계정 해지",
          paragraphs: [
            "사용자는 계정 삭제 기능을 통해 이용을 종료할 수 있습니다. 구체적인 절차는 계정 삭제 페이지에서 안내합니다.",
          ],
        },
      ]}
    />
  );
}
