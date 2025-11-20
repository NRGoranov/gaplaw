'use client';

import type { PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ children, delay = 0, className }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`animate-fade-up ${visible ? 'opacity-100' : 'opacity-0'} ${className ?? ''}`}
    >
      {children}
    </div>
  );
};

