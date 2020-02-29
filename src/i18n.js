import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
        "en": { translation: require('./translations/en.json') },
        "zh-Hans": { translation: require('./translations/zh-Hans.json') }
    },
    fallbackLng: "en",
    whitelist: ['en', 'zh-Hans'],
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
