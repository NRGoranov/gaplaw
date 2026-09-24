import { notFound } from 'next/navigation';
import { FloatingHeader } from '@/components/layout/FloatingHeader';
import { Footer } from '@/components/layout/Footer';
import { HtmlLang } from '@/components/layout/HtmlLang';
import { isLocale, locales, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;

  return (
    <>
      <HtmlLang locale={locale} />
      <FloatingHeader locale={locale} />
      <main className="pt-20" lang={locale}>
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
