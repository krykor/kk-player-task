import React from 'react';
import { StyledApp, Background } from './App.styled';

import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <Background />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
