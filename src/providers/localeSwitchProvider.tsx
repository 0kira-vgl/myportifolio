"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import { routing } from "@/routing";

type Locale = (typeof routing.locales)[number];

type LocaleSwitchContextValue = {
  locale: Locale;
  switchLocale: (locale: Locale) => void;
};

const LocaleSwitchContext = createContext<LocaleSwitchContextValue | null>(
  null,
);

export function useLocaleSwitch() {
  const context = useContext(LocaleSwitchContext);
  if (!context) {
    throw new Error(
      "useLocaleSwitch must be used within a LocaleSwitchProvider",
    );
  }
  return context;
}

const messagesLoaders: Record<Locale, () => Promise<AbstractIntlMessages>> = {
  en: () => import("../../messages/en.json").then((mod) => mod.default),
  pt: () => import("../../messages/pt.json").then((mod) => mod.default),
};

export function LocaleSwitchProvider({
  initialLocale,
  initialMessages,
  children,
}: {
  initialLocale: Locale;
  initialMessages: AbstractIntlMessages;
  children: ReactNode;
}) {
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    messagesLoaders[newLocale]().then((newMessages) => {
      setLocale(newLocale);
      setMessages(newMessages);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    });
  };

  return (
    <LocaleSwitchContext.Provider value={{ locale, switchLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleSwitchContext.Provider>
  );
}
