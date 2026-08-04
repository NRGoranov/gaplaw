import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInsightBySlug, getInsights } from '@/lib/content';

interface InsightPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const insight = getInsightBySlug(params.slug);
  if (!insight) {
    return {
      title: 'Новина',
    };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  const paragraphs = insight.content
    ? insight.content.split('\n\n').filter((paragraph) => paragraph.trim().length > 0)
    : [];

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-6">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-text-secondary">
          {new Date(insight.date).toLocaleDateString('bg-BG', {
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
          Изтеглете PDF
        </a>
      ) : null}
    </article>
  );
}
