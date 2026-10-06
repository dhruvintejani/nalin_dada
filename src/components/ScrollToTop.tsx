import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Nalin Dada | Dr. Nalin Pandya",
  "/about": "हमारे बारे में | Nalin Dada",
  "/services": "सेवाएँ | Nalin Dada",
  "/books": "पुस्तकें एवं प्रकाशन | Nalin Dada",
  "/ashram": "पीताम्बरा पीठ साधना भूमि | Nalin Dada",
  "/appointment": "अपॉइंटमेंट एवं संपर्क | Nalin Dada",
  "/contact": "अपॉइंटमेंट एवं संपर्क | Nalin Dada",
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = pageTitles[pathname] ?? "Nalin Dada | Dr. Nalin Pandya";

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
  }, [pathname]);

  return null;
}
