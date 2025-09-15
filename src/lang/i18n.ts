import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/en.json';
import es from './es/es.json';

const resources = {
  en: en,
  es: es,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',// default language to use.
  });

export default {i18n};