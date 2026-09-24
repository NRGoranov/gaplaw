import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServices } from '@/lib/content';
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
    title: t.services,
    description: t.servicesIntro,
  };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getUi(locale);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <section className="rounded-[2.5rem] bg-surface p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-accent-dark">{t.practices}</p>
        <h1>{t.services}</h1>
        <p className="mt-4 max-w-3xl text-text-muted">{t.servicesIntro}</p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {getServices(locale).map((service) => (
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
