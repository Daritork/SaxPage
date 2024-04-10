import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./languages/en.json";
import translationGerman from "./languages/de.json";
import translationUkrainian from "./languages/ukr.json";
import translationRussian from "./languages/ru.json";

//---Using different namespaces
const resources = {
  en: {
    home: translationEnglish,
  },
  de: {
    home: translationGerman,
  },
  ukr: {
    home: translationUkrainian,
  },
  ru: {
    home: translationRussian,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", //default language
});

export default i18next;
