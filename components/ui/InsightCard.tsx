import Link from 'next/link';
import type { Insight } from '@/lib/content';

interface InsightCardProps {
  insight: Insight;
}

export const InsightCard = ({ insight }: InsightCardProps) => (
  <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow">
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="text-xs uppercase tracking-wide text-text-muted">
        {new Date(insight.date).toLocaleDateString('bg-BG', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <h3 className="text-xl font-semibold text-text-primary">{insight.title}</h3>
      {insight.excerpt && insight.excerpt !== insight.title ? (
        <p className="text-sm text-text-muted">{insight.excerpt}</p>
      ) : null}
      <div className="mt-auto flex flex-col gap-2">
        <Link
          href={`/insights/${insight.slug}`}
          className="text-sm font-semibold text-primary transition hover:text-primary-dark"
        >
          Повече информация →
        </Link>
        {insight.pdfUrl ? (
          <a
            href={insight.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-text-secondary transition hover:text-primary"
          >
            Изтеглете PDF →
          </a>
        ) : null}
      </div>
    </div>
  </article>
);
