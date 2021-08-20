import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Form = styled.form`
  padding: 2.2rem 2.2rem 1.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14.2rem;

  ${mediaQueries('sm')`background-color: yellow;`};
  ${mediaQueries('md')`background-color: green;`};
  ${mediaQueries('lg')`background-color: wheat;`};
  ${mediaQueries('xl')`background-color: pink;`};
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: #F2F2F2;
  border: 0.1rem solid #BFBFBF;
  border-radius: 0.2rem;
  font-size: 1.5rem;
  letter-spacing: 0.03rem;

  &::placeholder{
    margin-left: 2rem;
    color: #606060;
  }
`;

export const SubmitButton = styled.input`
  padding: 1rem;
  background-color: #2D9CDB;
  border: 0.1rem solid #2D9CDB;
  border-radius: 0.2rem;
  font-size: 1.5rem;
  letter-spacing: 0.03rem;
  color: #fff;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

export const Error = styled.span`
  font-size: 1.2rem;
  color: crimson;
  letter-spacing: 0.03rem;
`;
