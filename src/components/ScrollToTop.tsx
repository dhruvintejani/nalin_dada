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
  }, [pathname]);

  return null;
}
