import type { Metadata } from 'next';

const services = [
  {
    title: 'Корпоративно право',
    details: [
      'Структуриране на дружества, преобразувания и M&A',
      'Корпоративно управление, бордова документация, ESG политики',
      'Договори за дистрибуция, франчайз, стратегически партньорства',
    ],
  },
  {
    title: 'Нестопански организации',
    details: [
      'Учредяване и регистрация на фондации и сдружения',
      'Съответствие с изискванията на донорите и държавните институции',
      'Вътрешни правила, GDPR, управление на доброволци',
    ],
  },
  {
    title: 'Правни консултации',
    details: [
      'Оценка и управление на регулаторни рискове',
      'Изготвяне и преговори по договори, правни становища',
      'Представителство в административни производства и съдебни спорове',
    ],
  },
];

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Подробен преглед на правните услуги, които предоставяме.',
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <section className="rounded-[2.5rem] bg-surface p-10 shadow-luxury">
        <p className="text-sm uppercase tracking-wide text-text-secondary">Практики</p>
        <h1>Правни услуги, ориентирани към бизнеса</h1>
        <p className="mt-4 max-w-3xl text-text-muted">
          Обслужваме клиенти в ключови индустрии — финанси, производство, технологии, социални
          предприемачи. Вярваме в интегриран подход и ясни резултати.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-white/10 bg-surface-elevated p-8 shadow-glow"
          >
            <h2 className="text-2xl">{service.title}</h2>
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              {service.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

