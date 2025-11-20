import type { Metadata } from 'next';
import { getInsights } from '@/lib/content';
import { InsightCard } from '@/components/ui/InsightCard';

export const metadata: Metadata = {
  title: 'Новини и анализи',
  description: 'Актуални публикации на GAPLaw за корпоративно право и нестопанския сектор.',
};

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <section className="rounded-[2.5rem] bg-surface p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-text-secondary">Актуално</p>
        <h1>Insights & анализи</h1>
        <p className="mt-4 max-w-3xl text-text-muted">
          Споделяме наблюдения върху корпоративното управление, ESG тенденции и развитието на
          нестопанските организации.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {insights.map((insight) => (
          <InsightCard key={insight.slug} insight={insight} />
        ))}
      </div>
    </div>
  );
}

