import Link from 'next/link';
import { firm } from '@/lib/content';

const navLinks = [
  { href: '/', label: 'Начало' },
  { href: '/about', label: 'За нас' },
  { href: '/services', label: 'Сфери на дейност' },
  { href: '/insights', label: 'Новини' },
  { href: '/contact', label: 'Контакти' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-surface-warm/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-semibold uppercase tracking-[0.3em] text-sm text-accent">
            {firm.shortName}
          </p>
          <p className="text-lg font-semibold text-text-primary">{firm.nameBg}</p>
          <p className="text-sm text-text-muted">
            Адвокатско дружество Горанова и Христова-Аличкова е българска правна кантора, която
            предоставя услуги на местни и чуждестранни корпоративни организации и юридически лица с
            нестопанска цел.
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
                  <Link href={link.href} className="transition hover:text-primary-dark">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Контакти
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {firm.addressLinesBg.map((line) => (
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

      <div className="border-t border-white/10 bg-surface/80 py-6 text-center text-xs text-text-muted">
        © {year} {firm.nameBg}. Всички права запазени.
      </div>
    </footer>
  );
};
