import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uk from './locales/uk.json';
import en from './locales/en.json';
import sk from './locales/sk.json';

const resources = {
  uk: { translation: uk },
  en: { translation: en },
  sk: { translation: sk },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'uk',
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
