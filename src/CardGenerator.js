import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class CardGenerator extends Component {
  render() {
    return (
      <div className="CardGenerator">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default CardGenerator;
