"use client";

import i18n, { LanguageInitializer } from "@/configs/i18n";
import { I18nextProvider } from "react-i18next";

export function I18Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nextProvider i18n={i18n} defaultNS="translation">
      <LanguageInitializer />
      {children}
    </I18nextProvider>
  );
}
