import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { FloatingHeader } from '@/components/layout/FloatingHeader';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { ViewTransitions } from '@/components/layout/ViewTransitions';
import { PaletteProvider } from '@/components/providers/PaletteProvider';
import { OrganizationSchema } from '@/components/SEO/OrganizationSchema';

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const keywordsBg = [
  'адвокатско дружество',
  'корпоративно право',
  'търговско право',
  'нестопански организации',
  'интелектуална собственост',
  'Горанова и Христова-Аличкова',
  'GAPLaw',
];

const keywordsEn = [
  'law firm bulgaria',
  'corporate commercial law',
  'non-profit legal',
  'intellectual property bulgaria',
  'Goranova Hristova Alitchkova',
  'GAPLaw',
];

export const metadata: Metadata = {
  metadataBase: new URL('https://gaplaw.eu'),
  title: {
    default: 'GAPLaw | Адвокатско дружество Горанова и Христова-Аличкова',
    template: '%s | GAPLaw',
  },
  description:
    'Адвокатско дружество Горанова и Христова-Аличкова е българска правна кантора, която предоставя бутикови правни решения за вашия бизнес.',
  keywords: [...keywordsBg, ...keywordsEn],
  openGraph: {
    title: 'GAPLaw | Адвокатско дружество Горанова и Христова-Аличкова',
    description:
      'Правна практика, основана на професионализма, тясното сътрудничество с клиента, лоялността и справедливата цена.',
    url: 'https://gaplaw.eu',
    siteName: 'GAPLaw',
    locale: 'bg_BG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GAPLaw | Адвокатско дружество Горанова и Христова-Аличкова',
    description:
      'Услуги за местни и чуждестранни корпоративни организации и юридически лица с нестопанска цел.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="bg"
      className={`${sourceSans.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-text-primary antialiased">
        <PaletteProvider>
          <ViewTransitions />
          <OrganizationSchema />
          <FloatingHeader />
          <main className="pt-20">{children}</main>
          <Footer />
          <ScrollToTop />
        </PaletteProvider>
      </body>
    </html>
  );
}
