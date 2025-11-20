import type { Metadata } from 'next';
import { TeamMember } from '@/components/ui/TeamMember';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const team = [
  {
    name: 'адв. Мария Горанова',
    role: 'Управляващ съдружник',
    bio: 'Експерт по корпоративно право и M&A с 15 години практика. Консултира водещи компании при трансгранични сделки и ESG трансформации.',
  },
  {
    name: 'адв. Гергана Христова-Аличкова',
    role: 'Съдружник, практика НПО',
    bio: 'Специализирана в нестопански организации, международни донорски инициативи и защита на лични данни.',
  },
  {
    name: 'адв. Даниел Петров',
    role: 'Ръководител правни консултации',
    bio: 'Фокус върху договорно право, регулаторен риск и съдебни производства при корпоративни спорове.',
  },
];

export const metadata: Metadata = {
  title: 'За нас',
  description: 'Научете повече за екипа и историята на GAPLaw.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6">
      <section className="rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-text-secondary">Нашата история</p>
        <h1>Създадени за да защитаваме устойчивия растеж</h1>
        <p className="mt-6 max-w-3xl text-lg text-text-muted">
          GAPLaw започва като бутиково обединение на адвокати, работили в международни кантори и
          организации. Събрахме експертизата си, за да отговорим на нуждата от стратегически правни
          решения, съобразени с локалната среда и европейските стандарти.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {team.map((member, index) => (
          <AnimatedSection key={member.name} delay={index * 120}>
            <TeamMember {...member} />
          </AnimatedSection>
        ))}
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <AnimatedSection className="rounded-3xl border border-white/10 bg-surface p-8 shadow-glow">
          <h2>Подход</h2>
          <p className="mt-4 text-text-muted">
            Работим интегрирано с управленските екипи. Въвеждаме ясен процес: стратегическо
            планиране, правен одит, приоритизиране на рисковете и оперативно изпълнение с измерими
            резултати.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-text-secondary">
            <li>• Пълна конфиденциалност и прозрачност на таксуването</li>
            <li>• Мултидисциплинарни екипи и координация с външни експерти</li>
            <li>• Дигитални инструменти за управление на задачи и документи</li>
          </ul>
        </AnimatedSection>
        <AnimatedSection className="rounded-3xl border border-white/10 bg-surface-warm p-8 shadow-glow">
          <h2>Ценности</h2>
          <p className="mt-4 text-text-muted">
            Измерваме успеха чрез въздействието върху организациите, с които работим. Изграждаме
            дългосрочни партньорства и оставаме на разположение във всеки етап.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-text-secondary">
            <p>• Почтеност и независимост на съвета</p>
            <p>• Професионална дисциплина и внимание към детайла</p>
            <p>• Социална отговорност и подкрепа за гражданския сектор</p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

