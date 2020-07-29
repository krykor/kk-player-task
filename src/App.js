import React from 'react';
import { StyledApp, Background } from './App.styled';
import GlobalState from './store/GlobalState';

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
  Audio,
} from './components';

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Background />
        <Audio />
        <Header />
        <StyledApp>
          <Slider />
          <Description />
          <Buttons />
          <Timeline />
          <Playlist />
        </StyledApp>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
