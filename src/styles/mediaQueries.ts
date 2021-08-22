import { BREAKPOINTS } from 'styles/constants';

export const mediaQueries = (
  key: keyof typeof BREAKPOINTS,
) => (
  style: TemplateStringsArray | String,
) => `@media (min-width: ${BREAKPOINTS[key]}px) { ${style} }`;
