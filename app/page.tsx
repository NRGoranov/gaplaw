import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { InsightCard } from '@/components/ui/InsightCard';
import { featuredServices, firm, getInsights, homeIntroBg } from '@/lib/content';

export default function Home() {
  const featuredInsights = getInsights().slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6">
      <section className="gradient-soft relative overflow-hidden rounded-[2.5rem] px-6 pb-16 pt-20 shadow-luxury-lg md:px-12">
        <AnimatedSection className="space-y-8">
          <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary shadow">
            {firm.logoText}
          </p>
          <h1>{firm.nameBg}</h1>
          <div className="max-w-3xl space-y-4 text-lg text-text-muted">
            {homeIntroBg.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-luxury transition hover:-translate-y-1 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
            >
              Свържете се с нас
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-text-secondary/20 px-6 py-3 text-sm font-semibold text-text-secondary transition hover:border-primary hover:text-primary"
            >
              Сфери на дейност
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-text-secondary">Сфери на дейност</p>
            <h2>Правни услуги</h2>
            <p className="max-w-2xl text-text-muted">
              Предоставя услуги на местни и чуждестранни корпоративни организации и юридически лица с
              нестопанска цел.
            </p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-primary">
            Всички сфери →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <ServiceCard {...service} icon={null} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <AnimatedSection className="rounded-3xl border border-white/10 bg-surface p-10 shadow-glow">
          <p className="text-sm uppercase tracking-wide text-text-secondary">За нас</p>
          <h2>За нас</h2>
          <p className="mt-4 text-text-muted">
            Адвокатско дружество Горанова и Христова-Аличкова е естествен резултат на многогодишно
            сътрудничество. То обединява различните познания и опит на партньорите в едно общо
            разбиране за това как трябва да бъдат осъществявани правни услуги.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Научете повече за нас →
          </Link>
        </AnimatedSection>
        <AnimatedSection className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-wide text-text-secondary">Контакти</p>
          <h2>Свържете се с нас</h2>
          <ul className="mt-6 space-y-3 text-text-muted">
            <li>
              <a href={`tel:${firm.phoneTel}`} className="hover:text-primary">
                Tel: {firm.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${firm.email}`} className="hover:text-primary">
                {firm.email}
              </a>
            </li>
            {firm.addressLinesBg.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-luxury hover:-translate-y-0.5"
          >
            Към контакти
          </Link>
        </AnimatedSection>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-text-secondary">Новини</p>
            <h2>Новини</h2>
          </div>
          <Link href="/insights" className="text-sm font-semibold text-primary hover:text-primary-dark">
            Всички новини →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredInsights.map((insight, index) => (
            <AnimatedSection key={insight.slug} delay={index * 100}>
              <InsightCard insight={insight} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
