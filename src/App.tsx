import React from 'react';
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';
import { Routes } from './routes';

import { AppBody } from './styles/App.styles';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <AppBody>
        <GlobalStyle />
        <Header />
        <Sidebar />
        <Routes />
      </AppBody>
    </>
  );
}

export default App;
