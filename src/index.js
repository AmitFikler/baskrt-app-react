import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import Header from './header';
import Main from './main';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
