import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from '@/components/layout/ViewTransitions';
import { PaletteProvider } from '@/components/providers/PaletteProvider';
import { OrganizationSchema } from '@/components/SEO/OrganizationSchema';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://gaplaw.eu'),
  icons: {
    icon: [{ url: '/logo_temp.png', type: 'image/png' }],
    apple: [{ url: '/logo_temp.png', type: 'image/png' }],
    shortcut: '/logo_temp.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${sourceSans.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="bg-background font-sans text-text-primary antialiased">
        <PaletteProvider>
          <ViewTransitions />
          <OrganizationSchema />
          {children}
          <ScrollToTop />
        </PaletteProvider>
      </body>
    </html>
  );
}
