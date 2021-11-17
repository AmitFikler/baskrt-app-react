import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './core/footer';
import Header from './core/header';
import Main from './core/main';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
