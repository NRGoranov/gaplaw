import type { Metadata } from 'next';
import { TeamMember } from '@/components/ui/TeamMember';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { firm, homeIntroBg, team } from '@/lib/content';

export const metadata: Metadata = {
  title: 'За нас',
  description: `Научете повече за партньорите на ${firm.nameBg}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6">
      <section className="rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-text-secondary">За нас</p>
        <h1>{firm.nameBg}</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-text-muted">
          {homeIntroBg.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-wide text-text-secondary">Партньори</p>
          <h2>Учредители на адвокатското дружество</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 120}>
              <TeamMember
                name={member.name}
                role={member.role}
                email={member.email}
                bio={member.bio}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
