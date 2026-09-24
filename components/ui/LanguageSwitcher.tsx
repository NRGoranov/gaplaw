'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { switchLocalePath } from '@/lib/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
}

export const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent-subtle/70 px-1.5 py-1 text-xs font-semibold tracking-wide text-accent-dark"
      aria-label="Language"
    >
      <Link
        href={switchLocalePath(pathname, 'bg')}
        className={`rounded-full px-2.5 py-1 transition ${
          locale === 'bg' ? 'bg-surface text-accent-dark shadow-sm' : 'opacity-60 hover:opacity-100'
        }`}
        hrefLang="bg"
        lang="bg"
      >
        BG
      </Link>
      <span className="text-accent/40" aria-hidden>
        |
      </span>
      <Link
        href={switchLocalePath(pathname, 'en')}
        className={`rounded-full px-2.5 py-1 transition ${
          locale === 'en' ? 'bg-surface text-accent-dark shadow-sm' : 'opacity-60 hover:opacity-100'
        }`}
        hrefLang="en"
        lang="en"
      >
        EN
      </Link>
    </div>
  );
};
