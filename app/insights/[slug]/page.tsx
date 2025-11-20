import Image from 'next/image';
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
      title: 'Insight',
    };
  }

  return {
    title: `${insight.title}`,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      images: [{ url: insight.imageUrl }],
    },
  };
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  const paragraphs = insight.content.split('\n\n');

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
        <p className="text-lg text-text-muted">{insight.excerpt}</p>
      </header>

      <div className="relative h-96 overflow-hidden rounded-[2.5rem]">
        <Image
          src={insight.imageUrl}
          alt={insight.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </div>

      <div className="space-y-4 text-lg text-text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.substring(0, 20)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

