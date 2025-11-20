'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const ViewTransitions = () => {
  const pathname = usePathname();

  useEffect(() => {
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (typeof doc.startViewTransition === 'function') {
      doc.startViewTransition(() => {});
    } else {
      document.body.classList.add('view-transition-fallback');
      const timeout = setTimeout(() => {
        document.body.classList.remove('view-transition-fallback');
      }, 350);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [pathname]);

  return null;
};

