import React, { Component } from 'react';

//import './components/Header.js';
import Form from './components/Form';
//import './components/Preview.js';
import Footer from './components/Footer';

class CardGenerator extends Component {
  render() {
    return (
      <div className="CardGenerator">
        {/* <Header/> */}
        {/* <Preview/> */}
        <Form/>
      <Footer/>
        <Header/>
        { /*<Preview/>

      </div>
    );
  }
}

export default CardGenerator;
