import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { InsightCard } from '@/components/ui/InsightCard';
import { getInsights } from '@/lib/content';

const services = [
  {
    title: 'Корпоративно право',
    description:
      'Комплексно обслужване на дружества, корпоративно управление, ESG рамки, договори и M&A процеси.',
    icon: '⚖️',
  },
  {
    title: 'Нестопански организации',
    description:
      'Правна рамка за фондации и сдружения, регистрация, финансиране, контрол и отчетност.',
    icon: '🤝',
  },
  {
    title: 'Правни консултации',
    description:
      'Стратегически съвет към бордове и ръководства, регулаторен риск, съдействие при проверки и спорове.',
    icon: '📑',
  },
];

const values = [
  {
    title: 'Доверие',
    text: 'Действаме прозрачно и защитаваме интересите на клиентите с абсолютна конфиденциалност.',
  },
  {
    title: 'Опит',
    text: 'Над 15 години практика в сложни корпоративни сделки и нестопански проекти.',
  },
  {
    title: 'Индивидуален подход',
    text: 'За всяка организация изграждаме адаптирана стратегия, съобразена с нейния контекст.',
  },
];

const stats = [
  { label: 'Години опит', value: '15+' },
  { label: 'Доволни клиенти', value: '200+' },
  { label: 'Професионализъм', value: '100%' },
];

export default function Home() {
  const featuredInsights = getInsights().slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6">
      <section className="gradient-soft relative overflow-hidden rounded-[2.5rem] px-6 pb-16 pt-20 shadow-luxury-lg md:px-12">
        <AnimatedSection className="space-y-8">
          <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary shadow">
            Корпоративна юридическа сигурност
          </p>
          <h1>
            Адвокатско дружество Горанова & Христова-Аличкова
            <span className="block text-2xl text-text-secondary">
              Вашият доверен правен партньор в България и ЕС.
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-text-muted">
            Създаваме устойчиви правни рамки за корпоративни групи, семейни компании и
            нестопански организации. Интегрираме ESG стандарти и осигуряваме правна готовност за
            всяко предизвикателство.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-luxury transition hover:-translate-y-1 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
            >
              Насрочете консултация
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-text-secondary/20 px-6 py-3 text-sm font-semibold text-text-secondary transition hover:border-primary hover:text-primary"
            >
              Нашите услуги
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <AnimatedSection key={stat.label} className="rounded-2xl bg-white/70 p-6 text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm uppercase tracking-wide text-text-secondary">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-text-secondary">Услуги</p>
            <h2>Фокусирани правни решения</h2>
            <p className="max-w-2xl text-text-muted">
              Подкрепяме клиенти от първоначално структуриране до ежедневна оперативна сигурност.
            </p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-primary">
            Всички услуги →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] bg-surface-elevated p-10 shadow-luxury">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-sm uppercase tracking-wide text-text-secondary">Нашият подход</p>
            <h2>Ценности, които следваме ежедневно</h2>
            <p className="text-text-muted">
              Правим сложните процеси разбираеми и управляеми. Работим в тясно сътрудничество с
              вашите вътрешни екипи и външни партньори.
            </p>
          </div>
          <div className="grid flex-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 120} className="rounded-2xl border border-white/10 bg-white/70 p-4">
                <h3 className="text-lg">{value.title}</h3>
                <p className="text-sm text-text-muted">{value.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <AnimatedSection className="rounded-3xl border border-white/10 bg-surface p-10 shadow-glow">
          <p className="text-sm uppercase tracking-wide text-text-secondary">За GAPLaw</p>
          <h2>Правна сигурност с човешко отношение</h2>
          <p className="mt-4 text-text-muted">
            Създадохме GAPLaw, за да осигурим стабилност на организациите, които градят бъдещето на
            България. Работим с корпоративни групи, семейни компании, фондации и международни
            донори. Адаптираме международни стандарти към местната правна реалност.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Научете повече за нас →
          </Link>
        </AnimatedSection>
        <AnimatedSection className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-wide text-text-secondary">Свържете се</p>
          <h2>Готови сме за вашия казус</h2>
          <ul className="mt-6 space-y-4 text-text-muted">
            <li>• Правни одити и подготовка за инвестиции</li>
            <li>• Регистрация и трансформации на НПО</li>
            <li>• ESG и отчетност пред заинтересовани страни</li>
            <li>• Изготвяне и преговори по ключови договори</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-luxury hover:-translate-y-0.5"
          >
            Свържете се с партньор
          </Link>
        </AnimatedSection>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-text-secondary">Новини</p>
            <h2>Insights & анализи</h2>
          </div>
          <Link href="/insights" className="text-sm font-semibold text-primary hover:text-primary-dark">
            Всички публикации →
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

      <section className="rounded-[2.5rem] border border-white/10 bg-surface p-10 text-center shadow-luxury">
        <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Следваща стъпка</p>
        <h2 className="mt-4">Готови сте за доверен правен партньор</h2>
        <p className="mx-auto mt-4 max-w-3xl text-text-muted">
          Свържете се с нас и ще отговорим в рамките на един работен ден. Провеждаме срещи на
          български, английски и испански.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-luxury hover:-translate-y-0.5"
          >
            Планирайте среща
          </Link>
          <a
            href="tel:+35928123456"
            className="rounded-full border border-text-secondary/20 px-6 py-3 text-sm font-semibold text-text-secondary hover:text-primary"
          >
            +359 2 812 34 56
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
          <Link href="/">Начало</Link>
          <Link href="/about">За нас</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/insights">Новини</Link>
          <Link href="/contact">Контакт</Link>
        </div>
      </section>
    </div>
  );
}
