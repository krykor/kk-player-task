import styled from 'styled-components';

export const StyledPlayerButtons = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: ${({ theme }) => theme.marginM};
  width: 95vw;
  max-height: 80px;
  z-index: 20;
`;

export const Button = styled.button`
  text-align: center;
  width: ${({ isPlayButton, theme }) =>
    isPlayButton ? theme.buttonPNG : theme.buttonSVG};
  height: ${({ isPlayButton, theme }) =>
    isPlayButton ? theme.buttonPNG : theme.buttonSVG};
  border: none;
  background-color: transparent;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: ${({ isPlayButton, theme }) =>
    isPlayButton ? theme.buttonPNG : theme.buttonSVG};
`;
