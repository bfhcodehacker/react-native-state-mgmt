import React, { useContext } from "react";

interface Languages {
  en: string;
  es: string;
}

interface LanguageContextInterface {
  lang: string,
  toggleLanguage: () => void;
}

export const languages: Languages = {
  en: 'en',
  es: 'es'
};

export const LanguageContext = React.createContext<LanguageContextInterface>({
  lang: languages.en,
  toggleLanguage: () => {}
});

export const useLanguageContext = () => useContext(LanguageContext);