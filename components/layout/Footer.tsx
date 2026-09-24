import Link from 'next/link';
import { firm, getAddressLines, getFirmName, getFooterBlurb } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { getUi, localizePath } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export const Footer = ({ locale }: FooterProps) => {
  const year = new Date().getFullYear();
  const t = getUi(locale);
  const name = getFirmName(locale);

  const navLinks = [
    { href: localizePath(locale, '/'), label: t.home },
    { href: localizePath(locale, '/about'), label: t.about },
    { href: localizePath(locale, '/services'), label: t.services },
    { href: localizePath(locale, '/insights'), label: t.news },
    { href: localizePath(locale, '/contact'), label: t.contact },
  ];

  return (
    <footer className="mt-20 border-t border-white/10 bg-surface-warm/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-display text-base font-semibold uppercase tracking-[0.28em] text-accent">
            {firm.shortName}
          </p>
          <p className="text-lg font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-text-muted">{getFooterBlurb(locale)}</p>
        </div>

        <div className="grid flex-1 gap-10 sm:grid-cols-2 md:max-w-lg">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              {t.navigation}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary-dark">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              {t.contact}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {getAddressLines(locale).map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                <a href={`tel:${firm.phoneTel}`} className="hover:text-primary-dark">
                  {firm.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${firm.email}`} className="hover:text-primary-dark">
                  {firm.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-surface/80 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {t.createdBy}{' '}
            <a
              href="https://nrgtrw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text-secondary/80 transition hover:text-accent-dark"
            >
              NRG
            </a>
          </p>
          <p className="sm:text-right">
            © {year} {name}. {t.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
};
