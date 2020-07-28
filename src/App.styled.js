import styled from 'styled-components';
import img from './assets/images/bg_image.jpg';

export const StyledApp = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.div`
  background: url(${img}) no-repeat top center fixed;
  background-size: contain;
  height: 30vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  ::after {
    height: 31vh;
    width: 100vw;
    background: ${({ theme }) => theme.backgroundGradient};
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
`;
