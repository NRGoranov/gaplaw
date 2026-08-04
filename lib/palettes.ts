export type PaletteId = 'green' | 'terracotta' | 'teal';

export interface ColorPalette {
  id: PaletteId;
  name: string;
  description: string;
  cssVars: Record<string, string>;
}

const palettes: Record<PaletteId, ColorPalette> = {
  green: {
    id: 'green',
    name: 'Земно зелено',
    description: 'Естествена увереност и стабилност',
    cssVars: {
      '--color-background': '#f7f4ef',
      '--color-background-light': '#fdfaf5',
      '--color-background-warm': '#f2ece4',
      '--color-primary': '#599b3b',
      '--color-primary-light': '#7ebc60',
      '--color-primary-dark': '#416a4c',
      '--color-primary-hover': '#4b8635',
      '--color-primary-subtle': '#dff0d6',
      '--color-accent': '#6b4a36',
      '--color-accent-light': '#8f6a52',
      '--color-accent-dark': '#3f2a1e',
      '--color-accent-subtle': '#f1e7df',
      '--color-secondary': '#416a4c',
      '--color-secondary-light': '#5f8b68',
      '--color-secondary-dark': '#224032',
      '--color-text-primary': '#14110f',
      '--color-text-secondary': '#3d2e28',
      '--color-text-muted': '#4f453f',
      '--color-text-light': '#ffffff',
      '--color-surface': '#ffffff',
      '--color-surface-elevated': '#fdf8f1',
      '--color-surface-warm': '#f5ede3',
      '--color-success': '#4da356',
      '--color-warning': '#c27d28',
      '--color-error': '#b1453b',
      '--gradient-trust': 'linear-gradient(135deg, #599b3b, #416a4c)',
      '--gradient-luxury': 'linear-gradient(120deg, #3f2a1e, #6b4a36)',
      '--gradient-soft': 'linear-gradient(135deg, #fdf8f1, #f1e7df)',
      '--gradient-breathe': 'linear-gradient(120deg, #b2d6b1, #f2ece4)',
    },
  },
  terracotta: {
    id: 'terracotta',
    name: 'Теракота',
    description: 'Топлина и увереност',
    cssVars: {
      '--color-background': '#fcf6f2',
      '--color-background-light': '#fffaf7',
      '--color-background-warm': '#f6e7de',
      '--color-primary': '#9e5140',
      '--color-primary-light': '#c36f5e',
      '--color-primary-dark': '#7d3d31',
      '--color-primary-hover': '#8a4236',
      '--color-primary-subtle': '#f3d5cd',
      '--color-accent': '#6b4a36',
      '--color-accent-light': '#8f6a52',
      '--color-accent-dark': '#3f2a1e',
      '--color-accent-subtle': '#f1e7df',
      '--color-secondary': '#940001',
      '--color-secondary-light': '#b61c1c',
      '--color-secondary-dark': '#5c0000',
      '--color-text-primary': '#14110f',
      '--color-text-secondary': '#3d2e28',
      '--color-text-muted': '#4f453f',
      '--color-text-light': '#fff7f5',
      '--color-surface': '#ffffff',
      '--color-surface-elevated': '#fef5ee',
      '--color-surface-warm': '#f7e4da',
      '--color-success': '#4da356',
      '--color-warning': '#c27d28',
      '--color-error': '#ad2e24',
      '--gradient-trust': 'linear-gradient(135deg, #9e5140, #c28965)',
      '--gradient-luxury': 'linear-gradient(120deg, #3f2a1e, #6b4a36)',
      '--gradient-soft': 'linear-gradient(135deg, #fef5ee, #f1e7df)',
      '--gradient-breathe': 'linear-gradient(120deg, #f8c8b3, #fff5ef)',
    },
  },
  teal: {
    id: 'teal',
    name: 'Небесно синьо',
    description: 'Светла и спокойна синя палитра',
    cssVars: {
      '--color-background': '#f5f9fe',
      '--color-background-light': '#ffffff',
      '--color-background-warm': '#e8f1fc',
      '--color-primary': '#CBE2FE',
      '--color-primary-light': '#e0eefe',
      '--color-primary-dark': '#2f6bb5',
      '--color-primary-hover': '#b5d6fc',
      '--color-primary-subtle': '#eaf3fe',
      '--color-accent': '#6b4a36',
      '--color-accent-light': '#8f6a52',
      '--color-accent-dark': '#3f2a1e',
      '--color-accent-subtle': '#f1e7df',
      '--color-secondary': '#3a6ba8',
      '--color-secondary-light': '#5b8fc8',
      '--color-secondary-dark': '#1e4474',
      '--color-text-primary': '#14110f',
      '--color-text-secondary': '#3d2e28',
      '--color-text-muted': '#4f453f',
      '--color-text-light': '#f7fbff',
      '--color-surface': '#ffffff',
      '--color-surface-elevated': '#f0f6fd',
      '--color-surface-warm': '#e4eefb',
      '--color-success': '#1f9f7b',
      '--color-warning': '#d4963c',
      '--color-error': '#ba4a4a',
      '--gradient-trust': 'linear-gradient(135deg, #CBE2FE, #2f6bb5)',
      '--gradient-luxury': 'linear-gradient(120deg, #3f2a1e, #6b4a36)',
      '--gradient-soft': 'linear-gradient(135deg, #f0f6fd, #f1e7df)',
      '--gradient-breathe': 'linear-gradient(120deg, #CBE2FE, #f5f9fe)',
    },
  },
};

export const paletteList = Object.values(palettes);

export const getPaletteById = (id: PaletteId): ColorPalette =>
  palettes[id] ?? palettes.green;

export const getDefaultPalette = (): ColorPalette => palettes.teal;

