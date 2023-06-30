export type languageDataImporter = () => Promise<{
  mastheadInfo: {
    title: string;
    description: string;
    cta: string;
  };
  menu: {
    title: string;
    to: string;
    label: string;
  }[];
}>;

export interface ILanguageDictionary {
  [key: string]: languageDataImporter;
}

const languageDictionaries: ILanguageDictionary = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
  es: () => import('./dictionaries/es.json').then(module => module.default)
};

export const getDictionary = async (locale: string) => {
  if (locale) return languageDictionaries[locale as 'en' | 'fr' | 'es']();
  else return null;
};
