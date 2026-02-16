import React, { createContext, useContext, useState, useCallback } from "react";
import { Language, translations } from "./translations";

type TranslationData = {
  nav: { home: string; offer: string; pricing: string; about: string; contact: string };
  hero: { title: string; subtitle: string; description: string; call: string; whatsapp: string; email: string };
  offer: { title: string; cbt: string; cbtDesc: string; anxiety: string; anxietyDesc: string; depression: string; depressionDesc: string; crisis: string; crisisDesc: string; change: string; changeDesc: string; online: string; onlineDesc: string; stationary: string; stationaryDesc: string; adults: string; adultsDesc: string };
  pricing: { title: string; session: string; duration: string; price: string; note: string };
  about: { title: string; p1: string; p2: string; p3: string; values: string };
  contact: { title: string; address: string; addressLabel: string; emailLabel: string; phoneLabel: string; online: string; callBtn: string; whatsappBtn: string; emailBtn: string };
  footer: { rights: string };
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("pl");

  const setLang = useCallback((l: Language) => {
    setLangState(l);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
