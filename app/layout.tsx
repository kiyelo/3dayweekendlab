import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3dayweekendlab.com"),
  title: {
    default: "3 DAY WEEKEND LAB.",
    template: "%s | 3 DAY WEEKEND LAB.",
  },
  description:
    "일과 생활을 가볍게 만드는 작은 제품을 만드는 개발 스튜디오입니다.",
  openGraph: {
    type: "website",
    siteName: "3 DAY WEEKEND LAB.",
    locale: "ko_KR",
    alternateLocale: "en_US",
    title: "3 DAY WEEKEND LAB.",
    description: "Small tools for a lighter week.",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 DAY WEEKEND LAB.",
    description: "Small tools for a lighter week.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
