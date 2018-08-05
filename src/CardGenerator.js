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
        skills: [],
        typography: "2"
      }
    }
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


  render() {

    return (
      <div className="CardGenerator">
        <Header />
        <Main
          optionsPalettes={this.state.paletteTypes}
          optionsTypography={this.state.typographyTypes}
          dataObject={this.state.data}
          optionsSkills={this.state.arraySkills}
          changeInputsDataName={this.writeDataName}
          changeInputsDataJob={this.writeDataJob}
          changeInputsDataEmail={this.writeSocialMediaEmail}
          changeInputsDataPhone={this.writeSocialMediaPhone}
          changeInputsDataLinkedin={this.writeSocialMediaLinkedin}
          changeInputsDataGithub={this.writeSocialMediaGithub}
          deleteCompleteName={this.focusName}
          deleteJob={this.focusJob}
        />
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
