import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import previewPhoto from './images/card-image.png';

class CardGenerator extends Component {
  constructor(props) {
    super(props)

    this.makeObjectData = this.makeObjectData.bind(this);

    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(response => {
        return response.json();
      })
      .then((json) => {
        this.setState({ arraySkills: json.skills })
        console.log(json.skills);
      })

    this.state = {
      arraySkills: [],

      paletteTypes: {
        "1": "paleta-azul",
        "2": "paleta-roja",
        "3": "paleta-gris",
      },

      typographyTypes: {
        "1": "font-card--ubuntu",
        "2": "font-card--comicsans",
        "3": "font-card--montserrat",
      },

      data: {
        email: "",
        github: "",
        job: "Front-end developer",
        linkedin: "",
        name: "Nombre Apellidos",
        palette: "1",
        phone: "",
        photo: previewPhoto,
        image: 'http://placehold.it/29x29/ffffff/ffffff',
        skills: [],
        typography: "2"
      },

      dataPreview: {},

      dataDefault: {
        email: "",
        github: "",
        job: "Front-end developer",
        linkedin: "",
        name: "Nombre Apellidos",
        palette: "1",
        phone: "",
        photo: previewPhoto,
        image: 'http://placehold.it/29x29/ffffff/ffffff',
        skills: [],
        typography: "2"

      }
    }
  }

  resetPreview = () => {
    console.log('oli');
  }

  makeObjectData() {
    return this.state.dataPreview = {
      email: this.state.data.email,
      github: this.state.data.github,
      job: this.state.data.job,
      linkedin: this.state.data.linkedin,
      name: this.state.data.name,
      palette: this.state.paletteTypes[this.state.data.palette],
      phone: this.state.data.phone,
      photo: this.state.data.photo,
      image: 'http://placehold.it/29x29/ffffff/ffffff',
      skills: [],
      typography: this.state.typographyTypes[this.state.data.typography]
    }
  }
  render() {
    const {resetPreview} = this;
    return (
      <div className="CardGenerator">
        <Header />
        <Main
          dataObjectPreview={this.makeObjectData()}
          dataObject={this.state.data}
          optionsSkills={this.state.arraySkills}
          actionReset={resetPreview} />
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
