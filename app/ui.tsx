import Link from "next/link";

export type Locale = "ko" | "en";

const CONTACT_FORM_HREF = "https://forms.gle/9Ljt3w7MaNJfumLb8";

const labels = {
  ko: {
    product: "제품",
    contact: "문의하기",
    kkiu: "끼우 투두",
    menu: "메뉴",
    intro: "소개",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    deletion: "회원 탈퇴",
  },
  en: {
    product: "Products",
    contact: "Contact",
    kkiu: "Kkiu Todo",
    menu: "Menu",
    intro: "Overview",
    privacy: "Privacy",
    terms: "Terms",
    deletion: "Leave Kkiu",
  },
} as const;

function kkiuHref(locale: Locale, path = "/") {
  return locale === "ko"
    ? `https://kkiu.3dayweekendlab.com${path}`
    : `https://kkiu.3dayweekendlab.com/en${path}`;
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
          LAB<span className="square-dot" aria-hidden="true" />
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
  const productHref = kkiuHref(locale);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="header-brand" href={home} aria-label="3 DAY WEEKEND LAB. home">
          <LogoSymbol compact />
          <span>3 DAY WEEKEND LAB<span className="square-dot" aria-hidden="true" /></span>
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
          <Link href={CONTACT_FORM_HREF} target="_blank" rel="noreferrer">{c.contact}</Link>
          <Link className="language-link" href={languageHref} hrefLang={locale === "ko" ? "en" : "ko"}>
            {locale === "ko" ? "EN" : "KO"}
          </Link>
        </nav>

        <details className="mobile-nav">
          <summary>{c.menu}</summary>
          <nav className="mobile-menu" aria-label="Mobile navigation">
            <Link href={productHref}>{c.kkiu}</Link>
            <Link href={CONTACT_FORM_HREF} target="_blank" rel="noreferrer">{c.contact}</Link>
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
    ["intro", kkiuHref(locale), c.intro],
    ["privacy", kkiuHref(locale, "/privacy/"), c.privacy],
    ["terms", kkiuHref(locale, "/terms/"), c.terms],
    ["deletion", kkiuHref(locale, "/delete-account/"), c.deletion],
  ];

  return (
    <nav className="product-subnav" aria-label={locale === "ko" ? "끼우 메뉴" : "Kkiu navigation"}>
      <div className="subnav-inner">
        <Link className="subnav-title" href={kkiuHref(locale)}>
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
        <Link className="footer-contact" href={CONTACT_FORM_HREF} target="_blank" rel="noreferrer">{c.contact}</Link>
        <p className="copyright">© {new Date().getFullYear()} 3 DAY WEEKEND LAB<span className="square-dot" aria-hidden="true" /></p>
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
          <BrandLockup />
          <div className="hero-intro">
            <span className="index">ABOUT / 00</span>
            <p>
              {ko
                ? "3 DAY WEEKEND LAB.은 일과 생활을 조금 덜 복잡하게 만드는 소프트웨어를 개발합니다."
                : "3 DAY WEEKEND LAB. develops software that makes work and everyday life a little less complicated."}
            </p>
          </div>
        </section>

        <section className="home-product" id="products">
          <div className="section-index">PRODUCT / 01</div>
          <div className="product-row">
            <div>
              <p className="red-label">TODO APPLICATION</p>
              <h1>{ko ? "끼우 투두" : "Kkiu Todo"}<span className="square-dot" aria-hidden="true" /></h1>
            </div>
            <div className="product-summary">
              <p>
                {ko
                  ? "해야 할 일을 오늘의 빈틈에 끼워 넣고, 하나씩 가볍게 끝내는 투두 앱."
                  : "A simple to-do app for fitting tasks into the open spaces of your day."}
              </p>
              <Link className="text-link" href={kkiuHref(locale)}>
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
            <Link className="text-link" href={CONTACT_FORM_HREF} target="_blank" rel="noreferrer">
              {ko ? "문의하기" : "Contact"} <span aria-hidden="true">↗</span>
            </Link>
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
            <span>TODO<span className="square-dot" aria-hidden="true" /></span>
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
          <h2>GOOGLE PLAY<span className="square-dot" aria-hidden="true" /></h2>
          <p>{ko ? "다운로드 링크는 출시 시 연결됩니다." : "The download link will be added at launch."}</p>
          <span className="coming-soon">{ko ? "준비 중" : "COMING SOON"}</span>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
