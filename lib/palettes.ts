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
      '--color-accent': '#534b35',
      '--color-accent-light': '#827150',
      '--color-accent-dark': '#2f2718',
      '--color-accent-subtle': '#efe5d2',
      '--color-secondary': '#416a4c',
      '--color-secondary-light': '#5f8b68',
      '--color-secondary-dark': '#224032',
      '--color-text-primary': '#2c2a2c',
      '--color-text-secondary': '#534b35',
      '--color-text-muted': '#6b6b6b',
      '--color-text-light': '#ffffff',
      '--color-surface': '#ffffff',
      '--color-surface-elevated': '#fdf8f1',
      '--color-surface-warm': '#f5ede3',
      '--color-success': '#4da356',
      '--color-warning': '#c27d28',
      '--color-error': '#b1453b',
      '--gradient-trust': 'linear-gradient(135deg, #599b3b, #416a4c)',
      '--gradient-luxury': 'linear-gradient(120deg, #534b35, #2f2718)',
      '--gradient-soft': 'linear-gradient(135deg, #fdf8f1, #efe3d2)',
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
      '--color-accent': '#c28965',
      '--color-accent-light': '#dfb291',
      '--color-accent-dark': '#8d5f3e',
      '--color-accent-subtle': '#fde6d6',
      '--color-secondary': '#940001',
      '--color-secondary-light': '#b61c1c',
      '--color-secondary-dark': '#5c0000',
      '--color-text-primary': '#2f1d1a',
      '--color-text-secondary': '#5d2f28',
      '--color-text-muted': '#7e5f58',
      '--color-text-light': '#fff7f5',
      '--color-surface': '#ffffff',
      '--color-surface-elevated': '#fef5ee',
      '--color-surface-warm': '#f7e4da',
      '--color-success': '#4da356',
      '--color-warning': '#c27d28',
      '--color-error': '#ad2e24',
      '--gradient-trust': 'linear-gradient(135deg, #9e5140, #c28965)',
      '--gradient-luxury': 'linear-gradient(120deg, #5c0000, #c28965)',
      '--gradient-soft': 'linear-gradient(135deg, #fef5ee, #fde6d6)',
      '--gradient-breathe': 'linear-gradient(120deg, #f8c8b3, #fff5ef)',
    },
  },
  teal: {
    id: 'teal',
    name: 'Тийл',
    description: 'Съвременна свежест',
    cssVars: {
      '--color-background': '#f2fbf8',
      '--color-background-light': '#ffffff',
      '--color-background-warm': '#e3f3ef',
      '--color-primary': '#26a98b',
      '--color-primary-light': '#4fc8aa',
      '--color-primary-dark': '#0b595d',
      '--color-primary-hover': '#1f8f74',
      '--color-primary-subtle': '#d0f0e7',
      '--color-accent': '#248b7a',
      '--color-accent-light': '#52ae9e',
      '--color-accent-dark': '#0f4d46',
      '--color-accent-subtle': '#cff2ec',
      '--color-secondary': '#0b595d',
      '--color-secondary-light': '#257b7f',
      '--color-secondary-dark': '#053437',
      '--color-text-primary': '#102422',
      '--color-text-secondary': '#1d4a44',
      '--color-text-muted': '#4d6460',
      '--color-text-light': '#f7fffd',
      '--color-surface': '#ffffff',
      '--color-surface-elevated': '#ecf7f5',
      '--color-surface-warm': '#d9f0eb',
      '--color-success': '#1f9f7b',
      '--color-warning': '#d4963c',
      '--color-error': '#ba4a4a',
      '--gradient-trust': 'linear-gradient(135deg, #26a98b, #0b595d)',
      '--gradient-luxury': 'linear-gradient(120deg, #0b595d, #248b7a)',
      '--gradient-soft': 'linear-gradient(135deg, #ecf7f5, #d9f0eb)',
      '--gradient-breathe': 'linear-gradient(120deg, #a4e4d6, #effcf9)',
    },
  },
};

export const paletteList = Object.values(palettes);

export const getPaletteById = (id: PaletteId): ColorPalette =>
  palettes[id] ?? palettes.green;

export const getDefaultPalette = (): ColorPalette => palettes.teal;

