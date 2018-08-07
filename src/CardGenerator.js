import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import previewPhoto from './images/card-image.png';

class CardGenerator extends Component {
  constructor(props) {
    super(props)

    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(response => {
        return response.json();
      })
      .then((json) => {
        this.setState({ arraySkills: json.skills })
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
        skills: ['HTML', 'CSS'],
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
        image: '',
        skills: ['HTML', 'CSS'],
        typography: "2"
      }
    }
    this.makeObjectData = this.makeObjectData.bind(this);
    this.resetPreview = this.resetPreview.bind(this);
    this.sendRaddioPaletteValue=this.sendRaddioPaletteValue.bind(this);
    this.sendTypographyValue=this.sendTypographyValue.bind(this);
    this.writeDataName = this.writeDataName.bind(this);
    this.writeDataJob = this.writeDataJob.bind(this);
    this.writeSocialMediaEmail = this.writeSocialMediaEmail.bind(this);
    this.writeSocialMediaPhone = this.writeSocialMediaPhone.bind(this);
    this.writeSocialMediaLinkedin = this.writeSocialMediaLinkedin.bind(this);
    this.writeSocialMediaGithub = this.writeSocialMediaGithub.bind(this);
    this.focusName = this.focusName.bind(this);
    this.focusJob = this.focusJob.bind(this);
  }

  writeDataName(event) {
    const dataTargetName = event.target;
    this.setState({
      data: {
        ...this.state.data,
        name: dataTargetName.value
      }
    });
  }

  focusName() {
    this.setState({
      data: {
        ...this.state.data,
        name: ""
      }
    });
  }

  writeDataJob(event) {
    const dataTargetJob = event.target;
    this.setState({
      data: {
        ...this.state.data,
        job: dataTargetJob.value
      }
    });
  }

  focusJob() {
    this.setState({
      data: {
        ...this.state.data,
        job: ""
      }
    });
  }

  writeSocialMediaEmail(event) {
    const dataTargetEmail = event.target;
    this.setState({
      data: {
        ...this.state.data,
        email: dataTargetEmail.value
      }
    });
  }

  writeSocialMediaPhone(event) {
    const dataTargetPhone = event.target;
    this.setState({
      data: {
        ...this.state.data,
        phone: dataTargetPhone.value
      }
    });
  }

  writeSocialMediaLinkedin(event) {
    const dataTargetLinkedin = event.target;
    this.setState({
      data: {
        ...this.state.data,
        linkedin: dataTargetLinkedin.value
      }
    });
  }

  writeSocialMediaGithub(event) {
    const dataTargetGithub = event.target;
    this.setState({
      data: {
        ...this.state.data,
        github: dataTargetGithub.value
      }
    });
  }

sendRaddioPaletteValue(event) {
  console.log('hola', event.target.value);
  const {value} = event.target;
  this.setState({
    data: {
      ...this.state.data,
      palette: `${value}`

sendTypographyValue(event) {
  console.log('typography value', event.target.value);
  const {value} = event.target;
  this.setState({
    data: {
      ...this.state.data,
      typography: `${value}`

    }
  });
}

  resetPreview = () => {
    console.log('oli');
    this.setState({
      data: {...this.state.dataDefault,
      skills: [...this.state.dataDefault.skills]
      }
    })
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
      skills: this.state.data.skills,
      typography: this.state.typographyTypes[this.state.data.typography]
    }
  }
  render() {
    return (
      <div className="CardGenerator">
        <Header />
        <Main
          optionsPalettes={this.state.paletteTypes}
          optionsTypography={this.state.typographyTypes}
          dataObject={this.state.data}
          optionsSkills={this.state.arraySkills}
          changeTypography={this.sendTypographyValue}
          changeRadioButtonsColor={this.sendRaddioPaletteValue}
          changeInputsDataName={this.writeDataName}
          changeInputsDataJob={this.writeDataJob}
          changeInputsDataEmail={this.writeSocialMediaEmail}
          changeInputsDataPhone={this.writeSocialMediaPhone}
          changeInputsDataLinkedin={this.writeSocialMediaLinkedin}
          changeInputsDataGithub={this.writeSocialMediaGithub}
          deleteCompleteName={this.focusName}
          deleteJob={this.focusJob}
          dataObjectPreview={this.makeObjectData()}
          actionReset={this.resetPreview} />
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
