import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translateEn from "./locales/en.json";
import translateAr from "./locales/ar.json";
import translateFr from "./locales/fr.json";

const resources = {
  en: {
    translation: translateEn,
  },
  ar: {
    translation: translateAr,
  },

  fr: {
    translation: translateFr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: [
      
        "localStorage",
        "htmlTag",
      
      ],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
