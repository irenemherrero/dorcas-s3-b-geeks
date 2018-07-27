import React, {Component} from 'react';
import Form from './Form';
import Preview from './Preview';
import previewPhoto from '../images/card-image.png';

const paletteTypes = {
  "1": "paleta-azul",
  "2": "paleta-roja",
  "3": "paleta-gris",
}

const typographyTypes = {
  "1":"font-card--ubuntu",
  "2":"font-card--comicsans",
  "3": "font-card--montserrat",
}

class Main extends Component {
  constructor(){
    super()

{/*¿Hace falta pasar todo esto aunque algunas no tengan datos?*/}

    this.data = {
      email: "",
      github: "",
      job: "Front-end developer",
      linkedin:"",
      name: "Nombre Apellidos",
      palette:"1",
      phone: "",
      photo: previewPhoto,
      skills: [],
      typography: "2"
    }
  }
  render() {
    return (
    <div className="main__form">
      <Preview
      /////estamos probando si funcionan los elmentos comentados 
          palette = {paletteTypes[this.data.palette]}
          typography = {typographyTypes[this.data.typography]}
          name = "Nombre Apellidos"
          job = "Front-end developer"
          photo = {previewPhoto}
          // email = "holi"
          // github = "lol"
          // linkedin = ""
          // skills = ["HTML", "SASS"]
          />
      <Form/>
    </div>);
  }
}

export default Main;
