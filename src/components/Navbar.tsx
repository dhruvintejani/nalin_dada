import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import type { SupportedLanguage } from "../i18n";
import Brand from "./Brand";

const links = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "services", to: "/services" },
  { key: "books", to: "/books" },
  { key: "ashram", to: "/ashram" },
  { key: "appointment", to: "/appointment" },
] as const;

const languageOptions: Array<{
  code: SupportedLanguage;
  labelKey: "english" | "hindi" | "gujarati";
}> = [
  { code: "en", labelKey: "english" },
  { code: "hi", labelKey: "hindi" },
  { code: "gu", labelKey: "gujarati" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const activeLanguage = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const changeLanguage = async (language: SupportedLanguage) => {
    await i18n.changeLanguage(language);
    setOpen(false);
  };

  return (
    <header className="premium-navbar sticky top-0 z-50 border-b border-[#eadfcd] bg-[#fffdf9]/95 backdrop-blur-md">
      <div className="site-shell flex h-[76px] items-center justify-between gap-4">
        <NavLink to="/" aria-label={t("common.nav.home")} className="shrink-0">
          <Brand />
        </NavLink>

        <nav
          className="hidden items-center gap-3 lg:flex xl:gap-5"
          aria-label={t("common.nav.home")}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
              end={link.to === "/"}
            >
              {t(`common.nav.${link.key}`)}
            </NavLink>
          ))}
        </nav>

        <div
          className="language-switcher hidden items-center gap-1 xl:flex"
          aria-label={t("common.language.label")}
        >
          {languageOptions.map((option) => {
            const active = activeLanguage === option.code;

            return (
              <button
                key={option.code}
                type="button"
                onClick={() => void changeLanguage(option.code)}
                aria-pressed={active}
                className={`language-button ${active ? "language-button-active" : ""}`}
              >
                {t(`common.language.${option.labelKey}`)}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="nav-menu-button grid h-11 w-11 place-items-center rounded-full lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu-surface fixed inset-x-0 top-[77px] z-50 h-[calc(100dvh-77px)] overflow-y-auto bg-[#fffdf9] lg:hidden">
          <div className="site-shell py-6">
            <nav className="grid gap-1" aria-label={t("common.nav.home")}>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold transition ${isActive ? "bg-[#8f181c] text-white" : "text-[#4d3b31] hover:bg-[#fbf2e5]"}`
                  }
                  end={link.to === "/"}
                >
                  {t(`common.nav.${link.key}`)}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 border-t border-[#eadfcd] pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#8b6a4d]">
                {t("common.language.label")}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {languageOptions.map((option) => {
                  const active = activeLanguage === option.code;
                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => void changeLanguage(option.code)}
                      aria-pressed={active}
                      className={`language-mobile-button ${active ? "language-mobile-button-active" : ""}`}
                    >
                      {t(`common.language.${option.labelKey}`)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
