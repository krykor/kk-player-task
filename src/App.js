import React from 'react';
import { StyledApp, Background } from './App.styled';

import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import {
  Header,
  Slider,
  Description,
  Buttons,
  Timeline,
  Playlist,
} from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Background />
      <StyledApp>
        <Header />
        <Slider />
        <Description />
        <Buttons />
        <Timeline />
        <Playlist />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
