import styled from 'styled-components';

export const StyledTimeline = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  input[type='range'] {
    -webkit-appearance: none;
    overflow: hidden;
    width: 60vw;
    height: 4px;
    border-color: transparent;
    border-width: 16px 0;
    border-radius: 10px;
    background-color: transparent;

    ::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      background-color: ${({ theme }) => theme.timelineColor};
      color: ${({ theme }) => theme.timelineColor};
      height: 2px;
      margin-top: -1px;
      cursor: pointer;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 0;
      height: 0;
      border-radius: 10px;
      border-color: transparent;
      border-width: auto;
      box-shadow: -1000px 0px 0px 1000px ${({ theme }) => theme.timelineColor};
      cursor: pointer;
    }
    :focus {
      outline: none;
    }
  }
`;

export const Counter = styled.p`
  margin: ${({ theme }) => theme.marginS};
  color: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.fontS};
  line-height: ${({ theme }) => theme.fontL};
`;
