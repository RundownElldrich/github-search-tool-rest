export const defaultTheme = {
  breakpoints: ['450px', '600px', '960px', '1280px', '1920px'],

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },

  space: {
    xxs: '0.6rem',
    xs: '0.8rem',
    sm: '1rem',
    md: '1.2rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  colors: {
    white: '#fff',
    black: '#000',

    primary100: '#C6CAFF',
    primary200: '#5650EC',
    primary500: '#3B35DC',

    success100: '#E6FAE7',
    success200: '#52B45A',
    success500: '#2F9237',

    danger100: '#FFECEC',
    danger200: '#E02F32',
    danger500: '#BB1316',

    warning100: '#FFF5EF',
    warning200: '#F17D39',
    warning500: '#D35E1A',
  },
};

export type AppTheme = typeof defaultTheme;
