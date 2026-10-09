import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lockedScrollYRef = useRef(0);
  const restoreScrollOnCloseRef = useRef(true);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const activeLanguage = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];

  useEffect(() => {
    if (open) {
      restoreScrollOnCloseRef.current = false;
      setOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (!open) {
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    lockedScrollYRef.current = window.scrollY;
    restoreScrollOnCloseRef.current = true;
    const body = document.body;

    body.style.position = "fixed";
    body.style.top = `-${lockedScrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      menuRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";

      if (restoreScrollOnCloseRef.current) {
        window.scrollTo({
          top: lockedScrollYRef.current,
          left: 0,
          behavior: "auto",
        });
      }
    };
  }, [open]);

  const navigateFromMenu = () => {
    restoreScrollOnCloseRef.current = false;
    setOpen(false);
  };

  const changeLanguage = async (language: SupportedLanguage) => {
    await i18n.changeLanguage(language);
    setOpen(false);
  };

  return (
    <header className="premium-navbar fixed inset-x-0 top-0 z-50 border-b border-[#eadfcd] bg-[#fffdf9]/95 backdrop-blur-md">
      <div className="site-shell flex h-[76px] items-center justify-between gap-4">
        <NavLink to="/" aria-label={t("common.nav.home")} className="shrink-0">
          <Brand />
        </NavLink>

        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label={t("common.accessibility.primaryNavigation")}
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
          role="group"
          className="language-switcher hidden items-center gap-1 xl:flex"
          aria-label={t("common.accessibility.languageSwitcher")}
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
          ref={menuButtonRef}
          type="button"
          className="nav-menu-button grid h-11 w-11 place-items-center rounded-full xl:hidden"
          aria-label={
            open
              ? t("common.accessibility.closeMenu")
              : t("common.accessibility.openMenu")
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          className="mobile-menu-surface absolute inset-x-0 top-full h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain bg-[#fffdf9] xl:hidden"
        >
          <div className="site-shell py-6">
            <nav
              className="grid gap-1"
              aria-label={t("common.accessibility.primaryNavigation")}
            >
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={navigateFromMenu}
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
              <div
                role="group"
                aria-label={t("common.accessibility.languageSwitcher")}
                className="grid grid-cols-3 gap-2"
              >
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
