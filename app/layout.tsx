import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FloatingHeader } from '@/components/layout/FloatingHeader';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { ViewTransitions } from '@/components/layout/ViewTransitions';
import { PaletteProvider } from '@/components/providers/PaletteProvider';
import { OrganizationSchema } from '@/components/SEO/OrganizationSchema';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const keywordsBg = [
  'адвокатско дружество',
  'корпоративно право',
  'търговско право',
  'нестопански организации',
  'интелектуална собственост',
  'обществени поръчки',
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
    'Адвокатско дружество Горанова и Христова-Аличкова е българска правна кантора, която предоставя услуги на местни и чуждестранни корпоративни организации и юридически лица с нестопанска цел.',
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
    <html lang="bg" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-text-primary antialiased">
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
