import Link from "next/link";
import { AccountDeleteClient } from "./account-delete-client";

export type Locale = "ko" | "en";

const labels = {
  ko: {
    product: "제품",
    contact: "문의하기",
    kkiu: "끼우 투두",
    menu: "메뉴",
    intro: "소개",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    deletion: "계정 삭제",
  },
  en: {
    product: "Products",
    contact: "Contact",
    kkiu: "Kkiu Todo",
    menu: "Menu",
    intro: "Overview",
    privacy: "Privacy",
    terms: "Terms",
    deletion: "Delete account",
  },
} as const;

function p(locale: Locale, path: string) {
  return locale === "ko" ? path : `/en${path}`;
}

export function LogoSymbol({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "logo-symbol logo-symbol-compact" : "logo-symbol"} aria-hidden="true">
      <i className="logo-square logo-square-top logo-square-a" />
      <i className="logo-square logo-square-top logo-square-b" />
      <i className="logo-square logo-square-bottom logo-square-c" />
      <i className="logo-square logo-square-bottom logo-square-d" />
      <i className="logo-square logo-square-bottom logo-square-e" />
    </span>
  );
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-lockup brand-lockup-compact" : "brand-lockup"}>
      <LogoSymbol compact={compact} />
      <span className="wordmark">
        <span>3 DAY</span>
        <span>WEEKEND</span>
        <span>
          LAB<span className="wordmark-dot">.</span>
        </span>
      </span>
    </span>
  );
}

export function Header({
  locale,
  alternateHref,
}: {
  locale: Locale;
  alternateHref?: string;
}) {
  const c = labels[locale];
  const home = locale === "ko" ? "/" : "/en";
  const languageHref = alternateHref ?? (locale === "ko" ? "/en" : "/");
  const contactHref = locale === "ko" ? "/#contact" : "/en/#contact";
  const productHref = p(locale, "/products/kkiu");

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="header-brand" href={home} aria-label="3 Day Weekend Lab home">
          <LogoSymbol compact />
          <span>3DWL</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <details className="product-menu">
            <summary>{c.product}</summary>
            <div className="product-dropdown">
              <Link href={productHref}>
                <span>01</span>
                <strong>{c.kkiu}</strong>
              </Link>
            </div>
          </details>
          <Link href={contactHref}>{c.contact}</Link>
          <Link className="language-link" href={languageHref} hrefLang={locale === "ko" ? "en" : "ko"}>
            {locale === "ko" ? "EN" : "KO"}
          </Link>
        </nav>

        <details className="mobile-nav">
          <summary>{c.menu}</summary>
          <nav className="mobile-menu" aria-label="Mobile navigation">
            <Link href={productHref}>{c.kkiu}</Link>
            <Link href={contactHref}>{c.contact}</Link>
            <Link href={languageHref}>{locale === "ko" ? "English" : "한국어"}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function ProductSubnav({ locale, active = "intro" }: { locale: Locale; active?: string }) {
  const c = labels[locale];
  const links = [
    ["intro", p(locale, "/products/kkiu"), c.intro],
    ["privacy", p(locale, "/privacy"), c.privacy],
    ["terms", p(locale, "/terms"), c.terms],
    ["deletion", p(locale, "/delete-account"), c.deletion],
  ];

  return (
    <nav className="product-subnav" aria-label={locale === "ko" ? "끼우 메뉴" : "Kkiu navigation"}>
      <div className="subnav-inner">
        <Link className="subnav-title" href={p(locale, "/products/kkiu")}>
          KKIU TODO
        </Link>
        <div className="subnav-links">
          {links.map(([key, href, label]) => (
            <Link className={active === key ? "active" : ""} href={href} key={key}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const c = labels[locale];
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>3 DAY WEEKEND LAB<span className="red">.</span></strong>
          <p>Independent development studio.</p>
        </div>
        <nav aria-label="Legal">
          <Link href={p(locale, "/privacy")}>{c.privacy}</Link>
          <Link href={p(locale, "/terms")}>{c.terms}</Link>
          <Link href={p(locale, "/delete-account")}>{c.deletion}</Link>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} 3DWL</p>
      </div>
    </footer>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const ko = locale === "ko";
  return (
    <>
      <a className="skip-link" href="#main">{ko ? "본문으로 이동" : "Skip to content"}</a>
      <Header locale={locale} />
      <main id="main">
        <section className="brand-hero">
          <div className="hero-meta">
            <span>INDEPENDENT DEVELOPMENT STUDIO</span>
            <span>SEOUL · KR</span>
          </div>
          <BrandLockup />
          <div className="hero-intro">
            <span className="index">ABOUT / 00</span>
            <p>
              {ko
                ? "3 Day Weekend Lab은 일과 생활을 조금 덜 복잡하게 만드는 소프트웨어를 개발합니다."
                : "3 Day Weekend Lab develops software that makes work and everyday life a little less complicated."}
            </p>
          </div>
        </section>

        <section className="home-product" id="products">
          <div className="section-index">PRODUCT / 01</div>
          <div className="product-row">
            <div>
              <p className="red-label">TODO APPLICATION</p>
              <h1>{ko ? "끼우 투두" : "Kkiu Todo"}<span className="red">.</span></h1>
            </div>
            <div className="product-summary">
              <p>
                {ko
                  ? "해야 할 일을 오늘의 빈틈에 끼워 넣고, 하나씩 가볍게 끝내는 투두 앱."
                  : "A simple to-do app for fitting tasks into the open spaces of your day."}
              </p>
              <Link className="text-link" href={p(locale, "/products/kkiu")}>
                {ko ? "제품 보기" : "View product"} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="product-graphic" aria-hidden="true">
            <span />
            <span />
            <span />
            <span className="hot" />
            <span className="hot" />
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-index">CONTACT / 02</div>
          <div>
            <h2>{ko ? "함께 이야기할 일이 있나요?" : "Have something to discuss?"}</h2>
            <p>
              {ko
                ? "공식 문의 채널은 제품 출시와 함께 이곳에 안내합니다."
                : "Our official contact channel will be published here with the product launch."}
            </p>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function ProductPage({ locale }: { locale: Locale }) {
  const ko = locale === "ko";
  return (
    <>
      <Header locale={locale} alternateHref={locale === "ko" ? "/en/products/kkiu" : "/products/kkiu"} />
      <ProductSubnav locale={locale} active="intro" />
      <main>
        <section className="kkiu-hero">
          <div className="kkiu-label">PRODUCT / 01</div>
          <div className="kkiu-title">
            <span>KKIU</span>
            <span>TODO<span className="red">.</span></span>
          </div>
          <p>
            {ko
              ? "오늘 할 일을 선명하게 보고, 하나씩 가볍게 끝내는 투두 앱입니다."
              : "A to-do app for seeing today’s tasks clearly and finishing them one by one."}
          </p>
        </section>

        <section className="kkiu-overview">
          <div className="overview-copy">
            <span className="section-index">ABOUT KKIU</span>
            <h2>{ko ? "할 일은 단순하게.\n하루는 가볍게." : "Simple tasks.\nA lighter day."}</h2>
          </div>
          <div className="todo-board" aria-label={ko ? "끼우 투두 화면 예시" : "Kkiu example task list"}>
            <div className="todo-head">
              <strong>{ko ? "오늘" : "Today"}</strong>
              <span>03</span>
            </div>
            {[ko ? "자료 정리하기" : "Organize notes", ko ? "산책 20분" : "Walk for 20 minutes", ko ? "내일 할 일 적기" : "Write tomorrow’s task"].map((task, i) => (
              <div className="todo-line" key={task}>
                <span className={i === 0 ? "todo-check checked" : "todo-check"}>{i === 0 ? "✓" : ""}</span>
                <span className={i === 0 ? "done" : ""}>{task}</span>
                <small>0{i + 1}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="kkiu-info-grid">
          <article>
            <span>01</span>
            <h3>{ko ? "오늘에 집중" : "Focus on today"}</h3>
            <p>{ko ? "지금 해야 할 일을 한눈에 확인합니다." : "See what needs your attention right now."}</p>
          </article>
          <article>
            <span>02</span>
            <h3>{ko ? "가볍게 기록" : "Capture quickly"}</h3>
            <p>{ko ? "할 일을 복잡한 설정 없이 바로 적습니다." : "Write tasks without unnecessary setup."}</p>
          </article>
          <article>
            <span>03</span>
            <h3>{ko ? "하나씩 완료" : "Finish one by one"}</h3>
            <p>{ko ? "완료한 일을 지우며 하루의 흐름을 정리합니다." : "Clear completed tasks and simplify your day."}</p>
          </article>
        </section>

        <section className="download-section">
          <span>ANDROID</span>
          <h2>GOOGLE PLAY<span className="red">.</span></h2>
          <p>{ko ? "다운로드 링크는 출시 시 연결됩니다." : "The download link will be added at launch."}</p>
          <span className="coming-soon">{ko ? "준비 중" : "COMING SOON"}</span>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({
  locale,
  title,
  lead,
  sections,
  notice,
  active,
}: {
  locale: Locale;
  title: string;
  lead: string;
  sections: LegalSection[];
  notice?: { title: string; body: string };
  active: "privacy" | "terms";
}) {
  return (
    <>
      <Header locale={locale} />
      <ProductSubnav locale={locale} active={active} />
      <main className="legal-main">
        <div className="legal-wrap">
          <header className="legal-hero">
            <p>KKIU TODO / POLICY</p>
            <h1>{title}<span className="red">.</span></h1>
            <div className="legal-lead">{lead}</div>
          </header>
          {notice ? (
            <aside className="notice-box">
              <strong>{notice.title}</strong>
              <p>{notice.body}</p>
            </aside>
          ) : null}
          <div className="legal-content">
            {sections.map((section) => (
              <section className="legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function DeleteAccountPage({ locale }: { locale: Locale }) {
  const ko = locale === "ko";
  return (
    <>
      <Header locale={locale} />
      <ProductSubnav locale={locale} active="deletion" />
      <main className="legal-main">
        <div className="legal-wrap">
          <header className="legal-hero">
            <p>KKIU TODO / ACCOUNT</p>
            <h1>{ko ? "계정 삭제" : "Delete account"}<span className="red">.</span></h1>
            <div className="legal-lead">
              {ko
                ? "가입에 사용한 동일한 Google 계정으로 다시 인증하여 계정 소유자 본인임을 확인합니다."
                : "Kkiu verifies ownership by asking you to authenticate again with the same Google account used to sign up."}
            </div>
          </header>
          <div className="deletion-flow">
            {[
              ko ? ["01", "Google로 다시 로그인", "끼우 가입에 사용한 Google 계정을 선택합니다."] : ["01", "Sign in again", "Choose the Google account originally used for Kkiu."],
              ko ? ["02", "계정 식별자 대조", "서버가 Google 인증 정보와 기존 끼우 계정을 대조합니다."] : ["02", "Match the account", "The server matches Google’s authentication response with your Kkiu account."],
              ko ? ["03", "삭제 의사 확인", "삭제 대상과 결과를 안내한 뒤 마지막 확인을 받습니다."] : ["03", "Confirm deletion", "Kkiu explains the result and asks for final confirmation."],
            ].map(([num, title, body]) => (
              <article key={num}>
                <span>{num}</span>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <AccountDeleteClient locale={locale} />
          <section className="security-note">
            <strong>{ko ? "보안 안내" : "Security notice"}</strong>
            <p>
              {ko
                ? "3 Day Weekend Lab은 계정 삭제를 위해 Google 비밀번호나 일회용 인증 코드를 요청하지 않습니다."
                : "3 Day Weekend Lab never asks for your Google password or one-time code to delete an account."}
            </p>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
