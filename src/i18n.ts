// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import mkTranslation from "./translations/mk/translationMK.json";
// import enTranslation from "./translations/en/translationEN.json";

// const savedLanguage = localStorage.getItem("language");

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       mk: {
//         translation: mkTranslation,
//       },
//       en: {
//         translation: enTranslation,
//       },
//     },

//     lng: savedLanguage || "mk",

//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationMK from "./translations/mk/translationMK.json";
import translationEN from "./translations/en/translationEN.json";

const resources = {
  mk: {
    translation: translationMK,
  },
  en: {
    translation: translationEN,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "mk",
  fallbackLng: "mk",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
