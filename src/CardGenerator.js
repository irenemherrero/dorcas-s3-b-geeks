import React, { Component } from 'react';
import Header from './components/Header.js';
import Form from'./components/Form.js';
import Preview from'./components/Preview.js';
import Footer from './components/Footer.js';

class CardGenerator extends Component {
  render() {
    return (
      <div className="CardGenerator">
        <Header/>
        { /*<Preview/>
        <Form/>    
        <Footer/>*/} 
      </div>
    );
  }
}

export default CardGenerator;
