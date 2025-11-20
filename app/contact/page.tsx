import type { Metadata } from 'next';
import { ContactForm } from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Контакт',
  description: 'Свържете се с GAPLaw за правна консултация.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <section className="rounded-[2.5rem] bg-surface p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-text-secondary">Свържете се</p>
        <h1>Готови сме да съдействаме</h1>
        <p className="mt-4 max-w-3xl text-text-muted">
          Отговаряме в рамките на един работен ден. При спешни случаи използвайте директната линия
          за клиенти.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">Телефон</p>
            <p className="text-lg font-semibold text-text-primary">+359 2 812 34 56</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">Имейл</p>
            <p className="text-lg font-semibold text-text-primary">office@gaplaw.eu</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-text-secondary">Адрес</p>
            <p className="text-lg font-semibold text-text-primary">ул. „Иван Вазов“ 12, София</p>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6 rounded-3xl border border-white/10 bg-surface-warm p-8 shadow-glow">
          <h2>Работно време</h2>
          <p className="text-text-muted">Понеделник – Петък, 09:00 – 18:30</p>
          <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 text-sm text-text-secondary">
            <p className="font-semibold">Офис София</p>
            <p>ул. „Иван Вазов“ 12, ет. 5</p>
            <p>Метростанция СУ „Св. Климент Охридски“</p>
            <p className="mt-4 text-xs text-text-muted">
              * Подгответе се за проверка на документ за самоличност при посещение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

