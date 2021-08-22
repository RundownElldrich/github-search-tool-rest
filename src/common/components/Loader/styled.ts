import styled from 'styled-components';

export const LoaderOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: var(--color-blue-with-opacity);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const LoaderMessage = styled.span`
  width: max-content;
  padding: 2.2rem 3.2rem;
  background-color: var(--color-white);
  font-size: 2.2rem;
  border: 0.4rem solid var(--color-light-grey);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
`;

export const Dots = styled.p`
  transform: translateY(-0.5rem);

  span {
    font-size: 3.6rem;
    animation: pulse 850ms infinite backwards;
    
  }

  span:nth-child(2) {
    animation-delay: 150ms;
  }

  span:nth-child(3) {
    animation-delay: 200ms;
  }

  @keyframes pulse {
    0% {
      opacity: .3;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  }
`;
