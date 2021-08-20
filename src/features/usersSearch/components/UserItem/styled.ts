import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem 2.2rem;
  background-color: #F2F2F2;
  border: 0.2rem solid #F2F2F2;
  border-radius: 0.2rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const LoginLabel = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.03rem;
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
    border-top-color: black;
  }

  &::after {
    top:-0.3rem;
    border-top-color: #F2F2F2;
  }
`;
