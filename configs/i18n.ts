"use client";

import uz from "@/public/assets/locales/uz.json";
import en from "@/public/assets/locales/en.json";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { useEffect } from "react";

const Languages = ["uz", "en"] as const;

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "uz",
    fallbackLng: Languages,
    supportedLngs: Languages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"],
    },
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      uz: {
        translation: uz,
      },
      en: {
        translation: en,
      },
    },
    react: {
      useSuspense: false,
    },
  });

const LanguageInitializer = () => {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng") || "uz";
    i18next.changeLanguage(storedLanguage);
  }, []);

  return null;
};

export { LanguageInitializer };
export default i18next;
