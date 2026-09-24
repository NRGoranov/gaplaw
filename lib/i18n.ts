export const locales = ['bg', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'bg';

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const ui = {
  bg: {
    home: 'Начало',
    about: 'За нас',
    services: 'Сфери на дейност',
    news: 'Новини',
    contact: 'Контакти',
    contactUs: 'Свържете се с нас',
    bookConsultation: 'Насрочете консултация',
    navigation: 'Навигация',
    phone: 'Телефон',
    email: 'Имейл',
    address: 'Адрес',
    partners: 'Партньори',
    founders: 'Учредители на адвокатското дружество',
    practices: 'Практики',
    legalServices: 'Правни услуги',
    allServices: 'Всички сфери →',
    learnMoreAbout: 'Научете повече за нас →',
    toContacts: 'Към контакти',
    allNews: 'Всички новини →',
    moreInfo: 'Повече информация →',
    downloadPdf: 'Изтеглете PDF',
    downloadPdfArrow: 'Изтеглете PDF →',
    allRights: 'Всички права запазени.',
    createdBy: 'Създадено от',
    lawFirmSubtitle: 'Адвокатско дружество',
    menu: 'Меню',
    newsIntro: 'Новини на Адвокатско дружество Горанова и Христова-Аличкова.',
    servicesIntro:
      'Адвокатско дружество Горанова и Христова-Аличкова предоставя правни услуги на местни и чуждестранни корпоративни организации и юридически лица с нестопанска цел.',
    homeServicesBlurb:
      'Предоставя услуги на местни и чуждестранни корпоративни организации и юридически лица с нестопанска цел.',
    notFoundTitle: 'Страницата не е открита',
    notFoundBody:
      'Възможно е адресът да е въведен неправилно или страницата да е премахната. Продължете към началото или разгледайте сфери на дейност.',
    switchTo: 'EN',
    switchLabel: 'English',
  },
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    news: 'News',
    contact: 'Contact Us',
    contactUs: 'Contact us',
    bookConsultation: 'Book a consultation',
    navigation: 'Navigation',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    partners: 'Partners',
    founders: 'Founding partners of the law firm',
    practices: 'Practices',
    legalServices: 'Legal services',
    allServices: 'All practice areas →',
    learnMoreAbout: 'Learn more about us →',
    toContacts: 'Go to contacts',
    allNews: 'All news →',
    moreInfo: 'More information →',
    downloadPdf: 'Download PDF',
    downloadPdfArrow: 'Download PDF →',
    allRights: 'All rights reserved.',
    createdBy: 'Created by',
    lawFirmSubtitle: 'Law Firm',
    menu: 'Menu',
    newsIntro: 'News from Goranova & Hristova – Alitchkova Law Firm.',
    servicesIntro:
      'Goranova & Hristova – Alitchkova Law Firm provides services to local and international corporate entities and non-profit organizations.',
    homeServicesBlurb:
      'Services for local and international corporate entities and non-profit organizations.',
    notFoundTitle: 'Page not found',
    notFoundBody:
      'The address may be incorrect or the page may have been removed. Continue to the home page or browse our services.',
    switchTo: 'BG',
    switchLabel: 'Български',
  },
} as const;

export type UiDictionary = (typeof ui)[Locale];

export const getUi = (locale: Locale): UiDictionary => ui[locale];

export const localizePath = (locale: Locale, path = ''): string => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `/${locale}`;
  return `/${locale}${clean}`;
};

export const switchLocalePath = (pathname: string, nextLocale: Locale): string => {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return `/${nextLocale}`;
  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join('/')}`;
  }
  return `/${nextLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
};
