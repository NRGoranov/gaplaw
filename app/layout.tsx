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
  'адвокат корпоративно право',
  'нестопански организации',
  'правни консултации',
  'GAPLaw',
];

const keywordsEn = ['corporate law firm bulgaria', 'non-profit legal', 'GAPLaw'];

export const metadata: Metadata = {
  metadataBase: new URL('https://gaplaw.eu'),
  title: {
    default: 'GAPLaw | Адвокатско дружество Горанова и Христова-Аличкова',
    template: '%s | GAPLaw',
  },
  description:
    'Стратегически правни решения за корпоративни клиенти и нестопански организации. Адвокатско дружество Горанова и Христова-Аличкова.',
  keywords: [...keywordsBg, ...keywordsEn],
  openGraph: {
    title: 'GAPLaw | Корпоративно право и нестопански организации',
    description:
      'Експерти по корпоративно управление, ESG и правни услуги за нестопански организации в България.',
    url: 'https://gaplaw.eu',
    siteName: 'GAPLaw',
    locale: 'bg_BG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GAPLaw | Корпоративно право',
    description:
      'Партньор за юридическа сигурност и устойчив растеж на вашата организация.',
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
