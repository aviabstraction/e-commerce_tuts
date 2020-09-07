import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
//Import Main Router
import MainRouter from './routes';
// import GlobalProvider from './contexts';

export function App() {
  return (
    // <GlobalProvider>
    <MainRouter />
    // </GlobalProvider>
  );
}
