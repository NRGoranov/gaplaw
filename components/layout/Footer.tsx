import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Начало' },
  { href: '/about', label: 'За нас' },
  { href: '/services', label: 'Услуги' },
  { href: '/insights', label: 'Новини' },
  { href: '/contact', label: 'Контакт' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-surface-warm/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-semibold uppercase tracking-[0.3em] text-sm text-primary">
            GAPLaw
          </p>
          <p className="text-lg font-semibold text-text-primary">
            Адвокатско дружество Горанова и Христова-Аличкова
          </p>
          <p className="text-sm text-text-muted">
            Специализирани правни услуги за корпоративни клиенти и нестопански организации в България и ЕС.
          </p>
        </div>

        <div className="grid flex-1 gap-10 sm:grid-cols-2 md:max-w-lg">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Навигация
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Контакт
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>ул. „Иван Вазов“ 12, София</li>
              <li>
                <a href="tel:+35928123456" className="hover:text-primary">
                  +359 2 812 34 56
                </a>
              </li>
              <li>
                <a href="mailto:office@gaplaw.eu" className="hover:text-primary">
                  office@gaplaw.eu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-surface/80 py-6 text-center text-xs text-text-muted">
        © {year} GAPLaw. Всички права запазени.
      </div>
    </footer>
  );
};

