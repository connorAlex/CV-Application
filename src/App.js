import React, { Component } from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

class App extends Component  {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
