import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "./en.json";
import bn from "./bn.json";

const dictionaries = { en, bn };
const STORAGE_KEY = "metro-dental-language";
export const LANGUAGES = ["en", "bn"];

const LanguageContext = createContext(null);

const BANGLA_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBanglaDigits(value) {
  return String(value).replace(/[0-9]/g, (digit) => BANGLA_DIGITS[Number(digit)]);
}

function interpolate(value, vars) {
  if (typeof value !== "string" || !vars) return value;
  return value.replace(/\{(\w+)\}/g, (match, key) =>
    vars[key] === undefined || vars[key] === null ? match : String(vars[key]),
  );
}

function readStoredLanguage() {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(stored) ? stored : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage can be blocked; the site still works for this session.
    }
  }, [language]);

  const t = useCallback(
    (key, vars) => {
      const dictionary = dictionaries[language] ?? en;
      // Fall back to English when a Bangla key is missing.
      const value = dictionary[key] ?? en[key] ?? key;
      return interpolate(value, vars);
    },
    [language],
  );

  const tList = useCallback(
    (key) => {
      const dictionary = dictionaries[language] ?? en;
      const value = dictionary[key] ?? en[key];
      return Array.isArray(value) ? value : [];
    },
    [language],
  );

  const formatNumber = useCallback(
    (value) => (language === "bn" ? toBanglaDigits(value) : String(value)),
    [language],
  );

  const setLanguage = useCallback((next) => {
    if (LANGUAGES.includes(next)) setLanguageState(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === "en" ? "bn" : "en"));
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      tList,
      formatNumber,
      isBangla: language === "bn",
    }),
    [language, setLanguage, toggleLanguage, t, tList, formatNumber],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
}
