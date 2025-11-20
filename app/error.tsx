"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="rounded-3xl border border-error/20 bg-error/10 px-8 py-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-error">Грешка</p>
        <h1 className="mt-4">Нещо неочаквано се случи</h1>
        <p className="mt-2 text-text-muted">
          Нашият екип вече е уведомен. Опитайте да опресните страницата или се
          върнете в началото.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-luxury"
          >
            Опресни страницата
          </button>
          <Link
            href="/"
            className="rounded-full border border-text-secondary/30 px-6 py-3 text-sm font-semibold text-text-secondary"
          >
            Начало
          </Link>
        </div>
      </div>
    </div>
  );
}

