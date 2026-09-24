import type { Locale } from '@/lib/i18n';

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  pdfUrl?: string;
}

export interface ServiceArea {
  title: string;
  details: string[];
}

export interface TeamMemberContent {
  name: string;
  role: string;
  email: string;
  bio: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export const firm = {
  shortName: 'GAPLaw',
  logoText: 'Goranova & Hristova - Alitchkova',
  phone: '+359 888 71 0909',
  phoneTel: '+359888710909',
  email: 'office@gaplaw.eu',
  postalCode: '1309',
  names: {
    bg: 'Адвокатско дружество Горанова и Христова-Аличкова',
    en: 'Goranova & Hristova – Alitchkova Law Firm',
  },
  addressLines: {
    bg: ['1309 София, България', 'Ул. Царибродска №94, ет.3, офис 5'],
    en: ['94 Tsaribrodska Street., floor 3, office 5', '1309 Sofia, Republic of Bulgaria'],
  },
  streetAddress: {
    bg: 'Ул. Царибродска №94, ет.3, офис 5',
    en: '94 Tsaribrodska Street., floor 3, office 5',
  },
  city: {
    bg: 'София',
    en: 'Sofia',
  },
  meetingNote: {
    bg: 'За организиране на среща е необходимо предварително да се обадите и да си запазите час и да уточните темата на срещата. Моля свържете се с нас.',
    en: 'For arranging a meeting preliminary appointment and agenda is needed. Please, contact us.',
  },
  footerBlurb: {
    bg: 'Адвокатско дружество Горанова и Христова-Аличкова е българска правна кантора, която предоставя услуги на местни и чуждестранни корпоративни организации и юридически лица с нестопанска цел.',
    en: 'Goranova & Hristova – Alitchkova Law Firm is a Bulgarian legal office which provides services to local and international corporate entities and non-profit organizations.',
  },
} as const;

const homeIntro = {
  bg: [
    'Адвокатско дружество Горанова и Христова-Аличкова е българска правна кантора, която предоставя бутикови правни решения за вашия бизнес.',
    'Адвокатско дружество Горанова и Христова-Аличкова е естествен резултат на многогодишно сътрудничество. То обединява различните познания и опит на партньорите в едно общо разбиране за това как трябва да бъдат осъществявани правни услуги. Нашият юридически екип вярва, че клиентът се нуждае от всеобхватен, компетентен, индивидуален, навременен и бизнес ориентиран съвет, достатъчно добър, за да може клиентът да вземе собствено, обосновано бизнес решение.',
    'Правната практика на Адвокатско дружество Горанова и Христова-Аличкова се основава на професионализма, тясното сътрудничество с клиента, лоялността и справедливата цена.',
  ],
  en: [
    'Goranova & Hristova – Alitchkova Law Firm is a Bulgarian legal office which provides services to local and international corporate entities and non-profit organizations.',
    'Our legal office is managed by two partners, who have shared their professional experience since 1999. Goranova & Hristova – Alitchkova law firm is a natural result of many years collaboration. It unites partners’ different knowledge and experience in their common understanding how the legal services should be performed. Our legal team believes that the client needs comprehensive, competent, individual, prompt and business-oriented legal advice good enough to make its his/their own business decisions.',
    'Goranova & Hristova – Alitchkova legal practice is based on professionalism, close cooperation with the client, loyalty and fair price.',
  ],
} as const;

const aboutTeaser = {
  bg: 'Адвокатско дружество Горанова и Христова-Аличкова е естествен резултат на многогодишно сътрудничество. То обединява различните познания и опит на партньорите в едно общо разбиране за това как трябва да бъдат осъществявани правни услуги.',
  en: 'Goranova & Hristova – Alitchkova law firm is a natural result of many years collaboration. It unites partners’ different knowledge and experience in their common understanding how the legal services should be performed.',
} as const;

const teamByLocale: Record<Locale, TeamMemberContent[]> = {
  bg: [
    {
      name: 'Мария Горанова',
      role: 'Адвокат — Дружествено право',
      email: 'maria.goranova@gaplaw.eu',
      imageUrl: '/team/maria-goranova.png',
      imageAlt: 'Мария Горанова',
      bio: [
        'Мария Горанова e една от учредителите на Адвокатско дружество „Горанова и Христова-Аличкова“. Мария практикува право от 1997 г. като младши правен консултант (преди дипломирането й през 1999 г. в СУ „Св. Климент Охридски). Поради интереса си към корпоративното и данъчното право, тя придобива и диплом за второ висше образование по финанси от Университета за Национално и Световно Стопанство в гр. София. Водена от конкретните си и ясни цели в областта на бизнес правото, тя започва своя професионален юридически опит в данъчно-правния отдел на най-голямата българска одиторска фирма и по-късно продължава работата си данъчно-правен консултант, част от екипа на една от Големите Четири одиторски дружества, където работи до 2005 г.',
        'От 1997 до 2005 г. Мария работи като данъчно-правен консултант в следните области – корпоративно правно консултиране, данъчно консултиране (приложение на ДДС, корпоративни данъци, данъци върху доходите на физическите лица, данъчно планиране, спогодби за избягване на двойното данъчно облагане и др.), трудово право, правни анализи на дружества (due diligence), международни търговски договори, др.',
        'Мария основава независима юридическа практика от 2005 г. Тя предоставя правни услуги на дружества от няколко бизнес сектора – разработка на софтуер, международни софтуерни компании или компании за търговия със стоки, комуникационни и медийни услуги и др. Тя е работила и като външен правен експерт по проекти за развитие на електронното управление за български институции.',
        'Мария се специализира в предоставянето на правни консултации и услуги по корпоративно право и административно право. Тя използва английски език.',
      ],
    },
    {
      name: 'Гергана Христова-Аличкова',
      role: 'Адвокат — Представител по индустриална собственост',
      email: 'gergana.alitchkova@gaplaw.eu',
      imageUrl: '/team/gergana-hristova-alitchkova.jpg',
      imageAlt: 'Гергана Христова-Аличкова',
      bio: [
        'Гергана Христова-Аличкова е една от учредителите на Адвокатско дружество „Горанова и Христова-Аличкова“. Гергана практикува право от 2002 г. след приключване на юридическото си образование в СУ „Климент Охридски“ (1994-1999г.) и магистратура в Университета в Кьолн, Германия, на немски език (2000-2002г.), последната осигуряваща й специализация по Немско Гражданско право, Телекомуникации и Защита на потребителите. Преди обучението й в Германия, тя се обучава един семестър в Университета в Копенхаген, Дания, като гост студент, където специализира право на Европейския съюз и Международно Енергийно право.',
        'От 2002 до 2012 г. Гергана работи като юрисконсулт за голяма международна търговска компания в България, където тя изгражда своята юридическа практика основно в следните области: търговско право, трудово право, застрахователно право, договорни отношения на местно и международно ниво. Професионалният й опит включва също така процесуално представителство, както и специализация в областта на правото на интелектуалната собственост.',
        'От 2013 г. тя работи като самостоятелен адвокат към Софийска адвокатска колегия. През 2015 г. тя придобива допълнителна квалификация като Представител по индустриална собственост (ПИС), регистриран в българското Патентно ведомство, както и като Представител по европейски търговски марки и дизайни (EUTM and Design Attorney) към Организация за Хармонизация на Вътрешния Пазар (OHIM).',
        'Гергана се специализира в предоставянето на правни консултации и услуги по търговско и гражданско право, трудово право, защита на личните данни и право на интелектуалната собственост. Тя използва английски и немски език.',
      ],
    },
  ],
  en: [
    {
      name: 'Maria Goranova',
      role: 'Attorney-at-Law — Company law',
      email: 'maria.goranova@gaplaw.eu',
      imageUrl: '/team/maria-goranova.png',
      imageAlt: 'Maria Goranova',
      bio: [
        'Maria Goranova is one of the founders of “Goranova & Hristova – Alitchkova Law Firm”. Maria has been practicing law since 1997 as a junior legal consultant (before her graduation from Sofia University St. Kliment Ohridski in 1999). Because of her interest in Corporate and Tax Law, she obtained second higher education diploma in Finance at the University of National and Worldwide Economy in Sofia, Bulgaria. She began her professional legal practice in the Tax & Legal Department of the biggest Bulgarian audit company and later continued it as tax & legal consultant in the team of one of the Big Four audit companies, where she worked till 2005.',
        'From 1997 to 2005 Maria worked as tax & legal consultant in following areas – corporate legal consulting, tax consulting (application of VAT, corporate taxes, individual income taxes, tax planning, double tax treaties, etc.), labour law, legal due diligence, international commercial contracts, etc.',
        'Maria started her independent legal practice in 2005. She has being providing legal services to companies of several business sectors - software development, international software or goods trading companies, communications and media related service companies, etc. She has also worked as external legal expert for some public projects for Bulgarian institutions, related to the development of e-government in Bulgaria.',
        'Maria is specialized in provision of legal consultations and services in corporate law and administrative law. She speaks English.',
      ],
    },
    {
      name: 'Gergana Hristova – Alitchkova',
      role: 'Attorney-at-Law (L.L.M. Cologne, Germany) — Bulgarian & European IPR Attorney',
      email: 'gergana.alitchkova@gaplaw.eu',
      imageUrl: '/team/gergana-hristova-alitchkova.jpg',
      imageAlt: 'Gergana Hristova – Alitchkova',
      bio: [
        'Gergana Hristova – Alitchkova is one of the founders of “Goranova & Hristova – Alitchkova Law Firm”. Gergana has been practicing law since 2002 after finishing her law education at Sofia University “Kliment Ohridski” (1994-1999) and German-language Magister Legum program (L.L.M. degree) at the University of Cologne, Germany (2000-2002) – thus ensuring her specialization in German Civil Law, Telecommunications and Consumer protection. Before her study in Germany, she was a guest student at the University of Copenhagen, Denmark for one semester where she passed a course of specialization in EU Law and International Energy Law.',
        'From 2002 to 2012 Gergana held the position of in-house lawyer for a big foreign trade company based in Bulgaria where she has built her legal practice mostly in the field of Commercial Law, Labor Law, Insurances, Contracts and Obligational Relations on local and international level. Her practice is focused also in the area of litigation and Intellectual Property Rights Law.',
        'Since 2013 she has worked as self-employed attorney-at-law, registered at Sofia Bar Association. In 2015 she obtained additional qualification as an Industrial property representative (IPR), registered at the Bulgarian Patent Office, as well as European Trade Mark and Design Attorney (EUTM and Design Attorney) at the Organization for Harmonization of the Internal Market (OHIM).',
        'Gergana is specialized in provision of legal consultations and services in commercial and civil law, labour law, personal data protection and intellectual property rights. She speaks German and English.',
      ],
    },
  ],
};

const servicesByLocale: Record<Locale, ServiceArea[]> = {
  bg: [
    {
      title: 'Корпоративно и Търговско право',
      details: [
        'Юридически консултации относно учредяването на дружества и организации с нестопанска цел, структуриране на стартиращ бизнес в подходяща правна форма',
        'Регистрация на дружества и организации с нестопанска цел (асоциации, фондации), клонове и търговски представителства на чуждестранни лица, както и промени в данните (капитал, адрес на управление, управителни органи и др.)',
        'Организация на Общи събрания (при поискване включително водене на протокол и други административни услуги)',
        'Подготовка на пълен набор от документи за стартиране на бизнес, ежедневната дейност и финансирането на дружествата – търговски договори (за услуги или ли за покупко-продажба на стоки, изготвяне на Общи условия за търговия или услуги, Рамкови договори, лицензионни споразумения и договори за франчайзинг, заеми, особени залози и др.)',
        'Участие в търговски преговори',
        'Правно-диагностични одити на дружества (due diligence)',
      ],
    },
    {
      title: 'Ликвидация',
      details: [
        'Правни съвети, свързани с всички аспекти и стъпки на ликвидационната процедура и нейните възможни алтернативи',
        'Подготовка и подаване на пълния комплект документи, свързани с производството по ликвидация, в Агенцията по вписванията (този вид услуги изисква тясно сътрудничество със счетоводния отдел на клиента)',
        'Правни консултации относно сроковете и необходимите действия, свързани с ликвидацията, пред органите по приходите (данъчните органи, Националния осигурителен институт и др. )',
      ],
    },
    {
      title: 'Преструктуриране, Сливания и Придобивания',
      details: [
        'Консултации относно преструктурирането на действащ бизнес – стъпки, данъчни и правни ефекти и други аспекти на различните видове бизнес преструктуриране – сливане, вливане, разделяне, отделяне и промяна на правната форма',
        'Подготовка и подаване на пълния комплект документи за избраната форма на преструктуриране в Агенцията по вписванията, Търговски регистър (този вид услуги изисква тясно сътрудничество със счетоводния отдел на клиента)',
      ],
    },
    {
      title: 'Интелектуална собственост',
      details: [
        'Представителство пред българското Патентно ведомство, Световната организация за интелектуална собственост (WIPO), Ведомство за хармонизация на вътрешния пазар (OHIM) и Ведомство на Европейския съюз за интелектуална собственост (EUIPO).',
        'Защита и регистрация на индустриален дизайн, търговски марки и марки за услуги, наименования за произход',
        'Консултации относно правата на интелектуална собственост, свързани с медия и телевизионни програми, доставка на съдържание',
        'Мониторинг на обекти на индустриална собственост',
        'Правна защита срещу нарушения на права върху търговски марки, индустриален дизайн и други обекти на индустриалната собственост пред българското Патентно ведомство и компетентния съд',
        'Подготовка на лицензионни договори и договори за франчайзинг',
        'Оценка на данъчните ефекти, свързани с данъка при източника върху възнагражденията за използване на права на интелектуална собственост, франчайзиннг или подобен тип трансгранични споразумения',
      ],
    },
    {
      title: 'Защита на личните данни',
      details: [
        'Консултации, одити и правно съдействие за привеждане на дейността и документацията в съответствие с изискванията на Регламента за защита на личните данни (GDPR);',
        'Права на субектите на данни;',
        'Права, задължения и отговорности на администраторите на лични данни и обработващите лични данни;',
        'Длъжностно лице по защита на данните',
      ],
    },
    {
      title: 'Трудово право',
      details: [
        'Изготвяне на трудови договори',
        'Подготовка на граждански договори с външни експерти за възлагане на определена работа',
        'Изработване на вътрешни разпореждания (заповеди), длъжностни характеристики и други вътрешни актове',
        'Консултации в областта на трудовото право',
        'Прекратяване на трудови и граждански договори, както и на договори за управление',
        'Незаконно уволнение и възстановяване на работа',
        'Споразумения за конфиденциалност със служителите и правни възможности за налагане на санкции на персонала',
        'Изработване на проекти на Вътрешни правила в съответствие със спецификите на дружеството',
      ],
    },
    {
      title: 'Административно право',
      details: [
        'Консултации за възможностите за избягване или намаляване на негативните ефекти от издаването на административни актове, налагащи санкции (например: актове на органите по приходите (данъчните и други публични органи), Комисията за защита на конкуренцията, Комисията за регулиране на съобщенията, др.)',
        'Изготвяне на възражения или жалби срещу административни актове пред компетентните органи (административни или съдебни)',
        'Процесуално представителство пред съд във всички фази на съдебния процес по обжалване на административните актове',
        'Правни консултации и/или представителство пред компетентните административни органи във връзка с приложимите административни режими',
        'Правно съдействие на клиенти пред административните органи във връзка с успешното осъществяване на административни процедури за получаване на сертификати, лицензии или регистрация (за регистрационните режими), необходими за извършването на определен вид бизнес в България',
      ],
    },
    {
      title: 'Процесуално представителство',
      details: [
        'Консултации и подходящо правно съдействие при извънсъдебно уреждане на спорове (в случай, че е възможно)',
        'Процесуално представителство пред съдебни и арбитражни органи в гр. София (воденето на дела пред други съдилища в Република България би могло да бъде предмет на специална уговорка)',
        'Съдебни спогодби',
      ],
    },
  ],
  en: [
    {
      title: 'Corporate & Commercial Law',
      details: [
        'Legal consultations for establishment of companies and non-profit organizations, structuring of start-ups in an appropriate legal form',
        'Registration of companies and non-profit organizations (associations, foundations), branches and representative offices of foreign companies as well as all changes in registered data (capital, seat of management, management bodies, etc.)',
        'Organization and management of General Meetings (incl. secretarial services for GM’s protocols upon request)',
        'Preparation of full range of documents needed for start-up, operation and financing of the company - commercial agreements (service and sell-purchase agreements, General Terms of Trade or Services Framework Agreements, license and franchise agreements, loans, special pledges, etc.), management agreements, employment and civil contracts, etc.',
        'Participation in commercial negotiations',
        'Legal due diligence of companies.',
      ],
    },
    {
      title: 'Company Liquidation',
      details: [
        'Advice on all aspects and steps of the liquidation procedure and its possible alternatives',
        'Preparation and submission of the whole set of documents before the Bulgarian Registry Agency, Commercial Register (close cooperation with the client’s accounting department is required for these type of services)',
        'Advices on the deadlines and necessary steps before tax authorities, National Social Security Institute, etc., related with company’s liquidation procedure.',
      ],
    },
    {
      title: 'Reorganization, Mergers & Acquisitions',
      details: [
        'Consultation on re-structuring of client’s ongoing business - the steps, tax & legal effects and all other aspects of different business restructuring - merger, merger by acquisition, separation, spin-off and change of legal form',
        'Preparation and submission of the whole set of documents for the chosen form of business restructuring before the Bulgarian Registry Agency, Commercial Register (close cooperation with the client’s accounting department is required for these type of services).',
      ],
    },
    {
      title: 'Intellectual property',
      details: [
        'Representation before the Bulgarian Patent Office, World Intellectual Property Organization (WIPO), Organization For Harmonization Of The Internal Market (OHIM) and European Union Intellectual Property Office (EUIPO)',
        'Protection and registration of industrial designs, trademarks & service marks, origin',
        'Consultations on the IP rights on Media and TV programs & packages, delivery of content',
        'Monitoring of objects of industrial property',
        'Legal protection against violations of the rights over trademarks, industrial design and other objects of industrial property before the Patent Office of Bulgaria and before the competent court',
        'Preparation of license and franchise agreements',
        'Evaluation of the tax effects related to withholding tax on the IPR, franchise or similar type of cross-border agreements',
      ],
    },
    {
      title: 'Personal Data Protection',
      details: [
        'Consultations, due diligence and legal assistance for implementation of the activities and documentation in compliance of the provisions of General Data Protection Regulation (GDPR)',
        'Rights of the data subject',
        'Rights, obligations and responsibilities of data controllers and data processors',
        'Data protection officer (DPO)',
      ],
    },
    {
      title: 'Labour Law',
      details: [
        'Preparation of employment contracts',
        'Drawing up of civil contracts with external experts for specific work',
        'Preparation of internal regulations, job descriptions and other internal acts',
        'Consultations in the field of labour law',
        'Termination of employment, management and civil contracts',
        'Unlawful dismissal and reinstatement',
        'Non-disclosure agreements and legal possibilities for imposing sanctions on employees',
        'Drafting internal rules according to the specifics of the company',
      ],
    },
    {
      title: 'Administrative Law',
      details: [
        'Consulting on the possibilities to avoid or decrease the negative effects derived from the issuance of administrative acts imposing penalties (for example: acts of the tax authorities, Commission for Protection of Competition, Communications Regulation Commission, etc.)',
        'Preparation of objections or appeals of the administration acts before competent bodies (administration or the court)',
        'Litigation of clients before the court within all stages of appeal of administrative acts',
        'Legal consultation and/or representation before competent administrative bodies regarding effective administrative regimes',
        'Legal assistance before the administration for issuance of certificates, licenses or observing registration needed for doing business in Bulgaria depending on the applicable administrative regime',
      ],
    },
    {
      title: 'Litigation',
      details: [
        'Out-of-court settlements of disputes (if possible) and propose the appropriate legal assistance',
        'Litigation services before state and arbitration courts in Sofia (litigation before other courts on the territory of the Republic of Bulgaria could be acceptable only upon special agreement)',
        'Court settlement agreements',
      ],
    },
  ],
};

const featuredServicesByLocale: Record<Locale, { title: string; description: string }[]> = {
  bg: [
    {
      title: 'Корпоративно и Търговско право',
      description:
        'Юридически консултации относно учредяването на дружества и организации с нестопанска цел, структуриране на стартиращ бизнес в подходяща правна форма',
    },
    {
      title: 'Интелектуална собственост',
      description:
        'Представителство пред българското Патентно ведомство, Световната организация за интелектуална собственост (WIPO), Ведомство за хармонизация на вътрешния пазар (OHIM) и Ведомство на Европейския съюз за интелектуална собственост (EUIPO).',
    },
    {
      title: 'Административно право',
      description:
        'Консултации за възможностите за избягване или намаляване на негативните ефекти от издаването на административни актове, налагащи санкции (например: актове на органите по приходите (данъчните и други публични органи), Комисията за защита на конкуренцията, Комисията за регулиране на съобщенията, др.)',
    },
  ],
  en: [
    {
      title: 'Corporate & Commercial Law',
      description:
        'Legal consultations for establishment of companies and non-profit organizations, structuring of start-ups in an appropriate legal form',
    },
    {
      title: 'Intellectual property',
      description:
        'Representation before the Bulgarian Patent Office, World Intellectual Property Organization (WIPO), Organization For Harmonization Of The Internal Market (OHIM) and European Union Intellectual Property Office (EUIPO)',
    },
    {
      title: 'Administrative Law',
      description:
        'Consulting on the possibilities to avoid or decrease the negative effects derived from the issuance of administrative acts imposing penalties (for example: acts of the tax authorities, Commission for Protection of Competition, Communications Regulation Commission, etc.)',
    },
  ],
};

const insights: Insight[] = [
  {
    slug: 'preregistraciya-sdruzheniya-fondacii-2017',
    title:
      'Пререгистрация на Сдружения и Фондации в светлината на сроковете за ГФО 2017 г. или неизвършвана дейност през 2017 г.',
    excerpt:
      'Пререгистрация на Сдружения и Фондации в светлината на сроковете за ГФО 2017 г. или неизвършвана дейност през 2017 г.',
    content: '',
    date: '2017-01-01',
    pdfUrl:
      'https://gaplaw.eu/images/Novini/All_clients_letter_NGO-preregistration--no-activity-2017.pdf',
  },
  {
    slug: 'gdpr-osnovni-polozheniya',
    title:
      'Общ Регламент за Защита на Личните данни - основни положения при подготовката за съответствие',
    excerpt:
      'Общ Регламент за Защита на Личните данни - основни положения при подготовката за съответствие',
    content: '',
    date: '2018-01-01',
    pdfUrl: 'https://gaplaw.eu/images/Novini/Information_Letter_GDPR-Jan_2018.pdf',
  },
  {
    slug: 'promeni-2018-lica-neizvarshvashti-deinost',
    title: 'Промени през 2018 г. за лица, неизвършващи дейност',
    excerpt: 'Промени през 2018 г. за лица, неизвършващи дейност',
    content: '',
    date: '2017-11-29',
    pdfUrl:
      'https://gaplaw.eu/images/Novini/All_clients_letter_29.11.2017_GoranovaHristova-Alitchkova_Law_Firm.pdf',
  },
  {
    slug: 'promeni-targovski-zakon-2017',
    title: 'Промени в Търговския закон, в сила през 2017 г., от значение за ООД / ЕООД',
    excerpt: 'Промени в Търговския закон, в сила през 2017 г., от значение за ООД / ЕООД',
    content: '',
    date: '2017-02-21',
    pdfUrl: 'https://gaplaw.eu/images/GAP_law_presentation_BNI_21_02_2017_vf.pdf',
  },
  {
    slug: 'gfo-2015',
    title: 'ГФО 2015',
    excerpt: 'ГФО 2015',
    content: '',
    date: '2016-04-21',
    pdfUrl: 'https://gaplaw.eu/images/GFO__2015_GAP_law_21-04-2016-vf.pdf',
  },
  {
    slug: 'reshenie-gfo-2015',
    title: 'Решение',
    excerpt: 'Решение',
    content: '',
    date: '2016-04-21',
    pdfUrl: 'https://gaplaw.eu/images/Decision_GM__GFO_2015-GAP_law.pdf',
  },
];

export const getFirmName = (locale: Locale) => firm.names[locale];
export const getHomeIntro = (locale: Locale) => homeIntro[locale];
export const getAboutTeaser = (locale: Locale) => aboutTeaser[locale];
export const getTeam = (locale: Locale) => teamByLocale[locale];
export const getServices = (locale: Locale) => servicesByLocale[locale];
export const getFeaturedServices = (locale: Locale) => featuredServicesByLocale[locale];
export const getAddressLines = (locale: Locale) => [...firm.addressLines[locale]];
export const getMeetingNote = (locale: Locale) => firm.meetingNote[locale];
export const getFooterBlurb = (locale: Locale) => firm.footerBlurb[locale];
export const getStreetAddress = (locale: Locale) => firm.streetAddress[locale];
export const getCity = (locale: Locale) => firm.city[locale];

export const getInsights = (): Insight[] => insights;

export const getInsightBySlug = (slug: string): Insight | undefined =>
  insights.find((insight) => insight.slug === slug);
