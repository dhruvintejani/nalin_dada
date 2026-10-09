import { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const titleKeys: Record<string, string> = {
  "/": "titles.home",
  "/about": "titles.about",
  "/services": "titles.services",
  "/books": "titles.books",
  "/ashram": "titles.ashram",
  "/appointment": "titles.appointment",
  "/contact": "titles.appointment",
};

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    document.title = t(titleKeys[pathname] ?? "titles.home");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.dataset.reveal = "visible";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -7% 0px",
        threshold: 0.08,
      },
    );

    const scan = () => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main section, main article, main .section-title, main .eyebrow",
        ),
      );

      targets.forEach((element, index) => {
        if (observed.has(element)) return;

        observed.add(element);
        element.dataset.reveal = "pending";
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index % 5, 4) * 42}ms`,
        );
        observer.observe(element);
      });
    };

    scan();

    const main = document.querySelector("main");
    const mutationObserver = new MutationObserver(scan);

    if (main) {
      mutationObserver.observe(main, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();

      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          delete element.dataset.reveal;
          element.style.removeProperty("--reveal-delay");
        });
    };
  }, [pathname, t, i18n.language]);

  return null;
}
