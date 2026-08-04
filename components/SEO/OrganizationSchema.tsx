import { firm } from '@/lib/content';

export const OrganizationSchema = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: firm.nameBg,
    alternateName: firm.nameEn,
    url: 'https://gaplaw.eu',
    email: firm.email,
    telephone: firm.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: firm.streetAddress,
      addressLocality: firm.city,
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
    description: homeDescription(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

function homeDescription() {
  return 'Адвокатско дружество Горанова и Христова-Аличкова е българска правна кантора, която предоставя бутикови правни решения за вашия бизнес.';
}
