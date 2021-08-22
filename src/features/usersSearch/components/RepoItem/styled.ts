import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2.2rem 1rem 4rem;
  padding: 0.8rem 0.6rem;
  background-color: var(--color-light-grey);
  border: 0.2rem solid var(--color-light-grey);
  border-radius: var(--border-radius-primary);
  font-size: var(--font-size-primary);
`;

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const NameLabel = styled.p`
  font-size: 1.6rem;
  letter-spacing: var(--letter-spacing-primary);
  font-weight: bold;
  color: var(--color-black);
  text-decoration: none;
  word-wrap: break-word;
  max-width: 85%;
`;

export const Description = styled.p`
  font-size: var(--font-size-primary);
  letter-spacing: var(--letter-spacing-primary);
`;

export const StarCounter = styled.p`
  font-size: var(--font-size-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;

  &::after {
    content: "\u2B50";
  }
`;
