import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import previewPhoto from './images/card-image.png';

class CardGenerator extends Component {
  constructor (props) {
    super(props)

    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response =>{
      return response.json();
    })
    .then((json) => {
      this.setState({arraySkills: json.skills})
      console.log(json.skills);
    })

  this.state = {
    arraySkills:[],

    paletteTypes: {
      "1": "paleta-azul",
      "2": "paleta-roja",
      "3": "paleta-gris",
    },

    typographyTypes: {
      "1":"font-card--ubuntu",
      "2":"font-card--comicsans",
      "3": "font-card--montserrat",
    },

    data: {
      email: "",
      github: "",
      job: "Front-end developer",
      linkedin:"",
      name: "Nombre Apellidos",
      palette:"1",
      phone: "",
      photo: previewPhoto,
      image:'http://placehold.it/29x29/ffffff/ffffff',
      skills: [],
      typography: "2"
    }
  }
}

  render() {

    return (
      <div className="CardGenerator">
        <Header/>
        <Main
          optionsPalettes={this.state.paletteTypes}
          optionsTypography={this.state.typographyTypes}
          dataObject={this.state.data}
          optionsSkills={this.state.arraySkills}
          />
        <Footer/>
      </div>
    );
  }
}

export default CardGenerator;
