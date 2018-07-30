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
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      data: {
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
  }

  render() {
    console.log(this.props);
    const {optionsSkills} = this.props;
    return (
    <div className="main__form">
    <Preview
          palette = {paletteTypes[this.state.data.palette]}
          typography = {typographyTypes[this.state.data.typography]}
          name = "Nombre Apellidos"
          job = "Front-end developer"
          photo = {previewPhoto}
          email = ""
          github = ""
          linkedin = ""
          // skills = ["HTML", "SASS"]
          />
     <Preview data= {this.data}/>
     
     <Form optionsSkills={optionsSkills} />
    </div>
  );
  }
}

export default Main;
