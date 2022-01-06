import React from 'react';
import { Routes } from './routes';

import { AppBody } from './styles/App.styles';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <AppBody>
        <GlobalStyle />
        <Routes />
      </AppBody>
    </>
  );
}

export default App;
