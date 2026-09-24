import { firm } from '@/lib/content';

export const OrganizationSchema = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: firm.names.bg,
    alternateName: firm.names.en,
    url: 'https://gaplaw.eu',
    logo: 'https://gaplaw.eu/logo_temp.png',
    email: firm.email,
    telephone: firm.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: firm.streetAddress.bg,
      addressLocality: firm.city.bg,
      postalCode: firm.postalCode,
      addressCountry: 'BG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: firm.phone,
      email: firm.email,
      contactType: 'customer service',
      areaServed: 'BG',
      availableLanguage: ['Bulgarian', 'English', 'German'],
    },
    description: firm.footerBlurb.bg,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
