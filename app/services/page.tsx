import type { Metadata } from 'next';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Сфери на дейност',
  description: 'Правни услуги на Адвокатско дружество Горанова и Христова-Аличкова.',
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <section className="rounded-[2.5rem] bg-surface p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-accent-dark">Практики</p>
        <h1>Сфери на дейност</h1>
        <p className="mt-4 max-w-3xl text-text-muted">
          Адвокатско дружество Горанова и Христова-Аличкова предоставя правни услуги на местни и
          чуждестранни корпоративни организации и юридически лица с нестопанска цел.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-white/10 bg-surface-elevated p-8 shadow-glow"
          >
            <h2 className="text-2xl">{service.title}</h2>
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              {service.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
