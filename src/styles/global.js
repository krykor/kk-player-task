import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, .root {
    margin: 0;
    padding: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background};
    font-family: 'Lato', sans-serif;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontM}

    }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;
