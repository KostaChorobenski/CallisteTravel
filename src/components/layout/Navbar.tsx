import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Wordmark } from "../../assets/logo/Wordmark";
import GoogleTranslate from "next-google-translate-widget";
import "next-google-translate-widget/styles";

function selectedLanguage() {
  return document.cookie.split(";").some((cookie) =>
    /^googtrans=(?:\/|%2F)(?:mk|auto)(?:\/|%2F)en$/i.test(cookie.trim()),
  ) ? "en" : "mk";
}

function clearTranslationCookies() {
  // Expire host-only cookies and domain cookies, including parent domains.
  const domains = window.location.hostname.split(".").map((_, index, parts) =>
    parts.slice(index).join("."),
  );
  const paths = new Set(["/"]);
  const segments = window.location.pathname.split("/");
  for (let index = 1; index <= segments.length; index++) {
    const path = segments.slice(0, index).join("/") || "/";
    paths.add(path);
    paths.add(path.endsWith("/") ? path : `${path}/`);
  }
  for (const path of paths) {
    for (const domain of ["", ...domains]) {
      document.cookie = `googtrans=; Max-Age=0; path=${path}${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

const links = [
  { to: "/", label: "Почетна" },
  { to: "/destinatsii", label: "Дестинации" },
  { to: "/dnevnik", label: "Дневник" },
  { to: "/za-nas", label: "За нас" },
  { to: "/kontakt", label: "Контакт" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language] = useState(selectedLanguage);

  const changeLanguage = (language: "mk" | "en") => {
    clearTranslationCookies();
    if (language === "en") {
      document.cookie = "googtrans=/mk/en; path=/; SameSite=Lax";
    }
    try {
      // Clear the widget preference and the previous i18next preference.
      localStorage.removeItem("ngt_lang");
      localStorage.removeItem("i18nextLng");
    } catch {
      // Cookies and reload still work when local storage is unavailable.
    }
    // Rebuild the original DOM at the same path, query and hash. Never translate to MK.
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link to="/" onClick={() => setIsOpen(false)} className="notranslate">
          <Wordmark />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  clsx(
                    "text-sm font-semibold transition-colors",
                    isActive ? "text-rust" : "text-ink-soft hover:text-ink",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="notranslate hidden items-center gap-2 text-sm font-semibold md:flex">
            <button
              type="button"
              onClick={() => changeLanguage("mk")}
              aria-pressed={language === "mk"}
              className={clsx("transition-colors hover:text-ink", language === "mk" ? "text-rust" : "text-ink-soft")}
            >
              MK
            </button>
            <span className="text-ink-soft">|</span>
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
              className={clsx("transition-colors hover:text-ink", language === "en" ? "text-rust" : "text-ink-soft")}
            >
              EN
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Затвори мени" : "Отвори мени"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          {isOpen ? <X size={23} /> : <List size={23} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-ink/10 bg-cream px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-rust/10 text-rust"
                      : "text-ink-soft hover:bg-ink/5 hover:text-ink",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="notranslate flex items-center gap-2 px-4 py-3">
              <button
                type="button"
                onClick={() => {
                  changeLanguage("mk");
                  setIsOpen(false);
                }}
                aria-pressed={language === "mk"}
                className={clsx("text-sm font-semibold transition-colors hover:text-ink", language === "mk" ? "text-rust" : "text-ink-soft")}
              >
                MK
              </button>
              <span className="text-ink-soft">|</span>
              <button
                type="button"
                onClick={() => {
                  changeLanguage("en");
                  setIsOpen(false);
                }}
                aria-pressed={language === "en"}
                className={clsx("text-sm font-semibold transition-colors hover:text-ink", language === "en" ? "text-rust" : "text-ink-soft")}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      )}

      <div className="hidden">
        <GoogleTranslate
          pageLanguage="mk"
          languages={[
            { label: "Македонски", value: "mk", flag: "mk" },
            { label: "English", value: "en", flag: "us" },
          ]}
        />
      </div>
    </header>
  );
}
