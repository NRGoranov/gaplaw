import Link from 'next/link';
import type { Insight } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { getUi, localizePath } from '@/lib/i18n';

interface InsightCardProps {
  insight: Insight;
  locale: Locale;
}

export const InsightCard = ({ insight, locale }: InsightCardProps) => {
  const t = getUi(locale);
  const dateLocale = locale === 'en' ? 'en-GB' : 'bg-BG';

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow">
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="text-xs uppercase tracking-wide text-text-muted">
          {new Date(insight.date).toLocaleDateString(dateLocale, {
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
            href={localizePath(locale, `/insights/${insight.slug}`)}
            className="text-sm font-semibold text-primary-dark transition hover:text-secondary-dark"
          >
            {t.moreInfo}
          </Link>
          {insight.pdfUrl ? (
            <a
              href={insight.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-text-secondary transition hover:text-primary-dark"
            >
              {t.downloadPdfArrow}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
