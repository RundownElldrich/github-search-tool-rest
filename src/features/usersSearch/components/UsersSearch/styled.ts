import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

const gradient = `
  background: #36C6EF;
  background: linear-gradient(to bottom right, #36C6EF, #E898B6);
`;

export const Wrapper = styled.div`
  min-block-size: 100vh;
  background-color: var(--color-white);

  ${mediaQueries('sm')(gradient)};
  ${mediaQueries('sm')('padding: 6.4rem 0;')};
`;

export const Card = styled.div`
  ${mediaQueries('sm')(`
    max-width: 75%;
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: var(--color-white);
    border-radius: var(--border-radius-primary);
  `)};

  ${mediaQueries('md')('max-width: 55%')};

`;

export const ResultsLabel = styled.span`
  padding: 0 2.2rem;
  color: var(--color-light-grey);
  font-size: var(--font-size-primary);
  letter-spacing: var(--letter-spacing-primary);
`;
