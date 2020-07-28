import styled from 'styled-components';

export const StyledSlider = styled.div`
  z-index: 20;
  position: relative;
  margin-top: 20px;
  min-width: 100vw;
  img {
    max-width: 200px;
  }
  .center img {
    width: 100%;
  }
  .right {
    transform: scale(0.5) translateX(100%) !important;
  }
  .left {
    transform: scale(0.5) translateX(-100%) !important;
  }
  .left .right {
    transition: transform 250ms linear 0s !important;
  }
`;
