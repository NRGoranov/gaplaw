export const OrganizationSchema = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Адвокатско дружество Горанова и Христова-Аличкова',
    url: 'https://gaplaw.eu',
    logo: 'https://gaplaw.eu/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. „Иван Вазов“ 12',
      addressLocality: 'София',
      postalCode: '1000',
      addressCountry: 'BG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+35928123456',
      contactType: 'customer service',
      areaServed: 'BG',
      availableLanguage: ['Bulgarian', 'English'],
    },
    sameAs: ['https://www.linkedin.com/company/gaplaw'],
    description:
      'GAPLaw предлага стратегически правни решения за корпоративни клиенти и нестопански организации.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

