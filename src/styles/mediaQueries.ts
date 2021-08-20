export const breakpoints = {
  sm: 480,
  md: 760,
  lg: 1200,
  xl: 1920,
};

export const mediaQueries = (
  key: keyof typeof breakpoints,
) => (
  style: TemplateStringsArray | String,
) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
