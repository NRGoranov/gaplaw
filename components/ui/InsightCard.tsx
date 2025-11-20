import Image from 'next/image';
import Link from 'next/link';
import type { Insight } from '@/lib/content';

interface InsightCardProps {
  insight: Insight;
}

export const InsightCard = ({ insight }: InsightCardProps) => (
  <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={insight.imageUrl}
        alt={insight.imageAlt}
        fill
        className="object-cover transition duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="text-xs uppercase tracking-wide text-text-muted">
        {new Date(insight.date).toLocaleDateString('bg-BG', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <h3 className="text-xl font-semibold text-text-primary">{insight.title}</h3>
      <p className="text-sm text-text-muted">{insight.excerpt}</p>
      <Link
        href={`/insights/${insight.slug}`}
        className="mt-auto text-sm font-semibold text-primary transition hover:text-primary-dark"
      >
        Прочетете статията →
      </Link>
    </div>
  </article>
);

