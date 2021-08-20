import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2.2rem 1rem 4rem;
  padding: 0.8rem 0.6rem;
  background-color: #D2D2D2;
  border: 0.2rem solid #D2D2D2;
  border-radius: 0.2rem;
  font-size: 1.5rem;
`;

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const NameLabel = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.03rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  word-wrap: break-word;
  max-width: 85%;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.03rem;
`;

export const StarCounter = styled.p`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;

  &::after {
    content: "\u2B50";
  }
`;
