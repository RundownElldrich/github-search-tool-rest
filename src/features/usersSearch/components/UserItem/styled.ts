import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem 2.2rem;
  background-color: var(--color-very-light-grey);
  border: 0.2rem solid var(--color-very-light-grey);
  border-radius: var(--border-radius-primary);
  font-size: var(--font-size-primary);
  cursor: pointer;
`;

export const LoginLabel = styled.p`
  font-size: var(--font-size-primary);
  letter-spacing: var(--letter-spacing-primary);
`;

export const ArrowIcon = styled.i`
  position: relative;
  display: block;
  transform: ${(props) => (
    props.dir === 'up'
      ? 'translate(-0.5rem, 0.2rem) rotate(180deg)'
      : 'translate(-2rem, -0.2rem) rotate(0)'
  )};
  transition: transform 200ms;

  &::before, &::after {
    position: absolute;
    display: block;
    content:"";
    border: 0.8rem solid transparent;
  }
  
  &::before {
    top:0;
    border-top-color: var(--color-black);
  }

  &::after {
    top:-0.3rem;
    border-top-color: var(--color-very-light-grey);
  }
`;
