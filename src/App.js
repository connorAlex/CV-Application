import React, { Component } from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
