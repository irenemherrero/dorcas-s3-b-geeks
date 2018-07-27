import React, {Component} from 'react';
import Form from './Form';
import Preview from './Preview';
import previewPhoto from '../images/card-image.png';

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
      <Preview data= {this.data}/>
      <Form/>
    </div>
  );
  }
}

export default Main;
