export type languageDataImporter = () => Promise<{
  mastheadInfo: {
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string | string[];
    cta: string;
  };
  aboutStudio: {
    title: string;
    description: string | string[];
    cta: string;
  };
  menu: {
    title: string;
    to: string;
    label: string;
  }[];
  services: {
    title: string;
    services: {
      title: string;
      description: string;
    }[];
  };
  servicesStudio: {
    title: string;
    services: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    blockTitle: string;
    inlineTitle: string;
    description: string;
    cta: string;
  };
  recentProjects: {
    title: string;
    projects: {
      title: string;
      description: string;
      impact: string | string[];
    }[];
  };
  projects: {
    title: string;
    slug: string;
    category: string;
    description: string;
    impact: string[];
    hidden?: boolean;
    contributors: string[];
    link: string;
    cta: string;
    github?: string;
    technologies: string[];
    image: string;
  }[];

  footer: {
    rights: string;
  };
}>;

export interface ILanguageDictionary {
  [key: string]: languageDataImporter;
}

const languageDictionaries: ILanguageDictionary = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  // fr: () => import('./dictionaries/fr.json').then(module => module.default),
  es: () => import('./dictionaries/es.json').then(module => module.default)
};

/**
 * Function to get the dictionary for a given locale
 * @param locale - The locale string (e.g. 'en', 'fr', 'es')
 * @returns A promise that resolves to the language dictionary or a fallback
 */
export const getDictionary = async (locale: string) => {
  try {
    if (locale && languageDictionaries[locale]) {
      return await languageDictionaries[locale as 'en' | 'fr' | 'es']();
    } else {
      console.warn(`Locale "${locale}" not found, falling back to 'en'.`);
      return await languageDictionaries['en']();
    }
  } catch (error) {
    console.error(`Error loading dictionary for locale "${locale}":`, error);
    return await languageDictionaries['en']();
  }
};
