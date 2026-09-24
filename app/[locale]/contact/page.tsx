import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  firm,
  getAddressLines,
  getCity,
  getFirmName,
  getMeetingNote,
  getStreetAddress,
  getTeam,
} from '@/lib/content';
import { getUi, isLocale, type Locale } from '@/lib/i18n';

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const t = getUi(locale);
  return {
    title: t.contact,
    description: `${t.contactUs} — ${getFirmName(locale)}`,
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getUi(locale);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <section className="rounded-[2.5rem] bg-surface p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-accent-dark">{t.contact}</p>
        <h1>{t.contactUs}</h1>
        <p className="mt-4 max-w-3xl text-text-muted">{getMeetingNote(locale)}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">{t.phone}</p>
            <a
              href={`tel:${firm.phoneTel}`}
              className="text-lg font-semibold text-text-primary hover:text-primary-dark"
            >
              {firm.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">{t.email}</p>
            <a
              href={`mailto:${firm.email}`}
              className="text-lg font-semibold text-text-primary hover:text-primary-dark"
            >
              {firm.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">{t.address}</p>
            <p className="text-lg font-semibold text-text-primary">
              {getStreetAddress(locale)}, {firm.postalCode} {getCity(locale)}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-surface-warm p-8 shadow-glow md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2>{t.address}</h2>
            {getAddressLines(locale).map((line) => (
              <p key={line} className="text-lg text-text-muted">
                {line}
              </p>
            ))}
            <p className="text-lg text-text-muted">
              mail:{' '}
              <a href={`mailto:${firm.email}`} className="hover:text-primary-dark">
                {firm.email}
              </a>
            </p>
            <p className="pt-2 text-text-muted">
              Tel:{' '}
              <a href={`tel:${firm.phoneTel}`} className="hover:text-primary-dark">
                {firm.phone}
              </a>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {getTeam(locale).map((member) => (
              <div key={member.email} className="space-y-1">
                <p className="text-lg font-semibold text-text-primary">{member.name}</p>
                <p className="text-sm text-text-muted">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-primary-dark hover:text-secondary-dark"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
