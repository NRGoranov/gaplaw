import type { Metadata } from 'next';
import { firm, team } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Контакти',
  description: `Свържете се с ${firm.nameBg}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <section className="rounded-[2.5rem] bg-surface p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-accent-dark">Контакти</p>
        <h1>Свържете се с нас</h1>
        <p className="mt-4 max-w-3xl text-text-muted">{firm.meetingNoteBg}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">Телефон</p>
            <a
              href={`tel:${firm.phoneTel}`}
              className="text-lg font-semibold text-text-primary hover:text-primary-dark"
            >
              {firm.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">Имейл</p>
            <a
              href={`mailto:${firm.email}`}
              className="text-lg font-semibold text-text-primary hover:text-primary-dark"
            >
              {firm.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">Адрес</p>
            <p className="text-lg font-semibold text-text-primary">
              {firm.streetAddress}, {firm.postalCode} {firm.city}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-surface-warm p-8 shadow-glow md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2>Адрес</h2>
            {firm.addressLinesBg.map((line) => (
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
            {team.map((member) => (
              <div key={member.email} className="space-y-1">
                <p className="text-lg font-semibold text-text-primary">{member.name}</p>
                <p className="text-sm text-text-muted">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-primary-dark hover:text-secondary-dark-dark"
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
