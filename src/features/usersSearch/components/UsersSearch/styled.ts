import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Wrapper = styled.div`
  min-block-size: 100vh;
  background-color: #fff;

  ${mediaQueries('sm')`background-color: aqua;`};
  ${mediaQueries('md')`background-color: aquamarine;`};
  ${mediaQueries('lg')`background-color: yellowgreen;`};
  ${mediaQueries('xl')`background-color: violet;`};
`;
export const ResultsLabel = styled.span`
  padding: 0 2.2rem;
  color: #606060;
  font-size: 1.5rem;
  letter-spacing: 0.03rem;
`;
