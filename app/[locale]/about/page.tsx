import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TeamMember } from '@/components/ui/TeamMember';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getFirmName, getHomeIntro, getTeam } from '@/lib/content';
import { getUi, isLocale, type Locale } from '@/lib/i18n';

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const t = getUi(locale);
  return {
    title: t.about,
    description: `${t.about} — ${getFirmName(locale)}`,
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getUi(locale);

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6">
      <section className="rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-accent-dark">{t.about}</p>
        <h1>{getFirmName(locale)}</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-text-muted">
          {getHomeIntro(locale).map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-wide text-accent-dark">{t.partners}</p>
          <h2>{t.founders}</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {getTeam(locale).map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 120}>
              <TeamMember
                name={member.name}
                role={member.role}
                email={member.email}
                bio={member.bio}
                imageUrl={member.imageUrl}
                imageAlt={member.imageAlt}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
