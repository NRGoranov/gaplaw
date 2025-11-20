'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Начало' },
  { href: '/about', label: 'За нас' },
  { href: '/services', label: 'Услуги' },
  { href: '/insights', label: 'Новини' },
  { href: '/contact', label: 'Контакт' },
];

export const FloatingHeader = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-20 bg-transparent">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-surface/80 px-6 shadow-glow backdrop-blur-md transition">
        <Link href="/" className="flex flex-col">
          <span className="font-semibold uppercase tracking-[0.35em] text-sm text-primary">
            GAPLaw
          </span>
          <span className="text-xs text-text-muted">Адвокатско дружество</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
          >
            Свържете се с нас
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 flex flex-col gap-1.5 lg:hidden"
          aria-label="Меню"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-7 rounded-full bg-text-primary transition ${
              isOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-7 rounded-full bg-text-primary transition ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-7 rounded-full bg-text-primary transition ${
              isOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-x-4 top-24 rounded-3xl border border-white/10 bg-surface-elevated/95 p-6 shadow-luxury-lg backdrop-blur-lg transition lg:hidden ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-3 text-lg font-medium text-text-primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-3 py-2 transition ${
                isActive(item.href)
                  ? 'bg-primary-subtle text-primary-dark'
                  : 'hover:bg-surface-warm'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6">
          <Link
            href="/contact"
            className="block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Насрочете консултация
          </Link>
        </div>
      </div>
    </header>
  );
};

