import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">404</p>
      <h1>Страницата не е открита</h1>
      <p className="max-w-xl text-text-muted">
        Възможно е адресът да е въведен неправилно или страницата да е премахната. Продължете към
        началото или разгледайте сфери на дейност.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-dark shadow-luxury">
          Начало
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-text-secondary/30 px-6 py-3 text-sm font-semibold text-text-secondary"
        >
          Сфери на дейност
        </Link>
      </div>
    </div>
  );
}

