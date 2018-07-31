import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class CardGenerator extends Component {
  constructor () {
    super()
    this.state = {
      arraySkills: []
    }
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response =>{
      return response.json();
    })
    .then((json) => {
      this.setState({arraySkills: json.skills})
      console.log(json)
    })
  }
  render() {
    return (
      <div className="CardGenerator">
        <Header/>
        <Main optionsSkills={this.state.arraySkills}/>
        <Footer/>
      </div>
    );
  }
}

export default CardGenerator;
