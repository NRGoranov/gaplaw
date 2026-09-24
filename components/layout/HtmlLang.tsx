'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/i18n';

export const HtmlLang = ({ locale }: { locale: Locale }) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
};
