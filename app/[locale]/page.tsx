import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { InsightCard } from '@/components/ui/InsightCard';
import {
  firm,
  getAboutTeaser,
  getAddressLines,
  getFeaturedServices,
  getFirmName,
  getHomeIntro,
  getInsights,
} from '@/lib/content';
import { getUi, isLocale, localizePath, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getUi(locale);
  const featuredInsights = getInsights().slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6">
      <section className="gradient-soft relative overflow-hidden rounded-[2.5rem] px-6 pb-16 pt-20 shadow-luxury-lg md:px-12">
        <AnimatedSection className="space-y-8">
          <p className="inline-flex items-center rounded-full bg-accent-subtle px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark shadow">
            {firm.logoText}
          </p>
          <h1>{getFirmName(locale)}</h1>
          <div className="max-w-3xl space-y-4 text-lg text-text-muted">
            {getHomeIntro(locale).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={localizePath(locale, '/contact')}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-dark shadow-luxury transition hover:-translate-y-1 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
            >
              {t.contactUs}
            </Link>
            <Link
              href={localizePath(locale, '/services')}
              className="rounded-full border border-text-secondary/20 px-6 py-3 text-sm font-semibold text-text-secondary transition hover:border-primary-dark hover:text-primary-dark"
            >
              {t.services}
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-accent-dark">{t.services}</p>
            <h2>{t.legalServices}</h2>
            <p className="max-w-2xl text-text-muted">{t.homeServicesBlurb}</p>
          </div>
          <Link
            href={localizePath(locale, '/services')}
            className="text-sm font-semibold text-primary-dark"
          >
            {t.allServices}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {getFeaturedServices(locale).map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <ServiceCard {...service} icon={null} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <AnimatedSection className="rounded-3xl border border-white/10 bg-surface p-10 shadow-glow">
          <p className="text-sm uppercase tracking-wide text-accent-dark">{t.about}</p>
          <h2>{t.about}</h2>
          <p className="mt-4 text-text-muted">{getAboutTeaser(locale)}</p>
          <Link
            href={localizePath(locale, '/about')}
            className="mt-6 inline-flex items-center text-sm font-semibold text-primary-dark hover:text-primary-dark"
          >
            {t.learnMoreAbout}
          </Link>
        </AnimatedSection>
        <AnimatedSection className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-wide text-accent-dark">{t.contact}</p>
          <h2>{t.contactUs}</h2>
          <ul className="mt-6 space-y-3 text-text-muted">
            <li>
              <a href={`tel:${firm.phoneTel}`} className="hover:text-primary-dark">
                Tel: {firm.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${firm.email}`} className="hover:text-primary-dark">
                {firm.email}
              </a>
            </li>
            {getAddressLines(locale).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Link
            href={localizePath(locale, '/contact')}
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-dark shadow-luxury hover:-translate-y-0.5"
          >
            {t.toContacts}
          </Link>
        </AnimatedSection>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-accent-dark">{t.news}</p>
            <h2>{t.news}</h2>
          </div>
          <Link
            href={localizePath(locale, '/insights')}
            className="text-sm font-semibold text-primary-dark hover:text-primary-dark"
          >
            {t.allNews}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredInsights.map((insight, index) => (
            <AnimatedSection key={insight.slug} delay={index * 100}>
              <InsightCard insight={insight} locale={locale} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
