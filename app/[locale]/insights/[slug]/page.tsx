import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInsightBySlug, getInsights } from '@/lib/content';
import { getUi, isLocale, locales, type Locale } from '@/lib/i18n';

interface InsightPageProps {
  params: { locale: string; slug: string };
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getInsights().map((insight) => ({ locale, slug: insight.slug })),
  );
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const insight = getInsightBySlug(params.slug);
  if (!insight) {
    return { title: isLocale(params.locale) ? getUi(params.locale).news : 'News' };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default function InsightPage({ params }: InsightPageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getUi(locale);
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  const paragraphs = insight.content
    ? insight.content.split('\n\n').filter((paragraph) => paragraph.trim().length > 0)
    : [];
  const dateLocale = locale === 'en' ? 'en-GB' : 'bg-BG';

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-6">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-text-secondary">
          {new Date(insight.date).toLocaleDateString(dateLocale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <h1>{insight.title}</h1>
      </header>

      {paragraphs.length > 0 ? (
        <div className="space-y-4 text-lg text-text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.substring(0, 20)}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {insight.pdfUrl ? (
        <a
          href={insight.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-dark shadow-luxury hover:-translate-y-0.5"
        >
          {t.downloadPdf}
        </a>
      ) : null}
    </article>
  );
}
