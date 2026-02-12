import { createContext, useContext } from 'react';

export type Language = 'it' | 'en' | 'de';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const I18nContext = createContext<I18nContextType>({
  language: 'it',
  setLanguage: () => {},
});

export const useI18n = () => useContext(I18nContext);
