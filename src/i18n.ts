import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import gu from "./locales/gu.json";
import hi from "./locales/hi.json";

export const supportedLanguages = ["en", "hi", "gu"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const storedLanguage =
  typeof window !== "undefined"
    ? window.localStorage.getItem("nalin-language")
    : null;

const initialLanguage = supportedLanguages.includes(
  storedLanguage as SupportedLanguage,
)
  ? (storedLanguage as SupportedLanguage)
  : "hi";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    gu: { translation: gu },
  },
  lng: initialLanguage,
  fallbackLng: "hi",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

const syncDocumentLanguage = (language: string) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem("nalin-language", language);
  }
};

syncDocumentLanguage(initialLanguage);
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
