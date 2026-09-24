import Link from 'next/link';
import { getUi, localizePath, type Locale } from '@/lib/i18n';

export default function NotFound() {
  const locale: Locale = 'bg';
  const t = getUi(locale);

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">404</p>
      <h1>{t.notFoundTitle}</h1>
      <p className="max-w-xl text-text-muted">{t.notFoundBody}</p>
      <div className="flex gap-4">
        <Link
          href={localizePath(locale, '/')}
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-dark shadow-luxury"
        >
          {t.home}
        </Link>
        <Link
          href={localizePath(locale, '/services')}
          className="rounded-full border border-text-secondary/30 px-6 py-3 text-sm font-semibold text-text-secondary"
        >
          {t.services}
        </Link>
      </div>
    </div>
  );
}
