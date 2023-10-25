import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';

export default () => {
  return (
    <BrowserRouter>
    <div>      
      <Header />
      <MarketingApp />
    </div>
    </BrowserRouter>
  );
};
