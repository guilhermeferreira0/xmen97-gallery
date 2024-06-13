import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home }from './templates/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';
import { CounterContextProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
