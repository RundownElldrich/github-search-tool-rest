import styled from 'styled-components';

export const Form = styled.form`
  padding: 2.2rem 2.2rem 1.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14.2rem;
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: var(--color-very-light-grey);
  border: 0.1rem solid var(--color-grey);
  border-radius: var(--border-radius-primary);
  font-size: var(--font-size-primary);
  letter-spacing: var(--letter-spacing-primary);

  &::placeholder{
    margin-left: 2rem;
    color: var(--color-grey);
  }
`;

export const SubmitButton = styled.input`
  padding: 1rem;
  background-color: var(--color-blue);
  border: 0.1rem solid var(--color-blue);
  border-radius: var(--border-radius-primary);
  font-size: var(--font-size-primary);
  letter-spacing: var(--letter-spacing-primary);
  color: var(--color-white);
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

export const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-red);
  letter-spacing: var(--letter-spacing-primary);
`;
