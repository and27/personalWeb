// import 'server-only';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
  es: () => import('./dictionaries/es.json').then(module => module.default)
};

export const getDictionary = async locale => locale && dictionaries[locale]();
