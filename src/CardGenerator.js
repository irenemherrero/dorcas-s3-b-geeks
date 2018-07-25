import React, { Component } from 'react';
import './components/Header.js';
import './components/Form.js';
import './components/Preview.js';
import './components/Footer.js';
import './CardGenerator.css';

class CardGenerator extends Component {
  render() {
    return (
      <div className="CardGenerator">
        <Header/>
        <Preview/>
        <Form/>    
        <Footer/>
      </div>
    );
  }
}

export default CardGenerator;
