'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ColorPalette, PaletteId } from '@/lib/palettes';
import { getDefaultPalette, getPaletteById } from '@/lib/palettes';

interface PaletteContextValue {
  palette: ColorPalette;
  paletteId: PaletteId;
  setPaletteId: (palette: PaletteId) => void;
}

const PaletteContext = createContext<PaletteContextValue | undefined>(undefined);
const STORAGE_KEY = 'gaplaw-palette';

export const PaletteProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultPalette = getDefaultPalette();
  const [paletteId, setPaletteId] = useState<PaletteId>(defaultPalette.id);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedPalette = window.localStorage.getItem(STORAGE_KEY) as PaletteId | null;
    if (storedPalette) {
      setPaletteId(storedPalette);
    } else {
      setPaletteId(defaultPalette.id);
    }
  }, [defaultPalette.id]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const palette = getPaletteById(paletteId);
    Object.entries(palette.cssVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, palette.id);
    }
  }, [paletteId]);

  const handleSetPalette = useCallback((id: PaletteId) => {
    setPaletteId(id);
  }, []);

  const value = useMemo<PaletteContextValue>(
    () => ({
      palette: getPaletteById(paletteId),
      paletteId,
      setPaletteId: handleSetPalette,
    }),
    [paletteId, handleSetPalette],
  );

  return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
};

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used inside PaletteProvider');
  }
  return context;
};

