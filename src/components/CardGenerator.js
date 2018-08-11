import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import previewPhoto from '../images/card-image.png';

let fr = new FileReader();

class CardGenerator extends Component {
  constructor(props) {
    super(props)

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
        skills: ['HTML', 'CSS'],
        typography: "2"
      },

      dataPreview: {},

      cardURL: "",
      showCardURL: "hidden__item",

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
    this.sendRaddioPaletteValue = this.sendRaddioPaletteValue.bind(this);
    this.sendTypographyValue = this.sendTypographyValue.bind(this);
    this.writeDataName = this.writeDataName.bind(this);
    this.writeDataJob = this.writeDataJob.bind(this);
    this.writeSocialMediaEmail = this.writeSocialMediaEmail.bind(this);
    this.writeSocialMediaPhone = this.writeSocialMediaPhone.bind(this);
    this.writeSocialMediaLinkedin = this.writeSocialMediaLinkedin.bind(this);
    this.writeSocialMediaGithub = this.writeSocialMediaGithub.bind(this);
    this.focusName = this.focusName.bind(this);
    this.focusJob = this.focusJob.bind(this);
    this.addSelectToCard = this.addSelectToCard.bind(this);
    this.falseClick = this.falseClick.bind(this);
    this.handleLoadPhoto = this.handleLoadPhoto.bind(this);
    this.createCard = this.createCard.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(response => {
        return response.json();
      })
      .then((json) => {
        this.setState({ arraySkills: json.skills })
      })
    const jsonFromLocalStorage = JSON.parse
      (localStorage.getItem('jsonToSend'))
    if (jsonFromLocalStorage) {
      this.setState({ data: jsonFromLocalStorage })
    }
  }

  createCard() {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(this.state.data),
      headers: {
        'content-type': 'application/json'
      },
    })

      .then(resp => {
        return resp.json();
      })
      .then(result => {
        this.setState({
          cardURL: result.cardURL,
          showCardURL: ""
        })
        localStorage.clear();
      })
      .catch(error => {
        console.log(error);
      });
  }

  falseClick() {
    this.fileInput.current.click()
  }

  handleLoadPhoto() {

    this.fileInput.current.files[0];

    const writePhoto = () => {
      console.log('fr after load', fr);
      this.setState(
        {
          data: {
            ...this.state.data,
            photo: fr.result
          }
        }
      )
    }
    fr.addEventListener('load', writePhoto);
    fr.readAsDataURL(this.fileInput.current.files[0]);
  }

  saveLocalStorage() {
    localStorage.setItem('jsonToSend', JSON.stringify(this.state.data));
  }
  writeDataName(event) {
    const dataTargetName = event.target;
    this.setState({
      data: {
        ...this.state.data,
        name: dataTargetName.value
      }

    });
    this.saveLocalStorage();
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
    this.saveLocalStorage();
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
    this.saveLocalStorage();
  }

  writeSocialMediaPhone(event) {
    const dataTargetPhone = event.target;
    this.setState({
      data: {
        ...this.state.data,
        phone: dataTargetPhone.value
      }
    });
    this.saveLocalStorage();
  }

  writeSocialMediaLinkedin(event) {
    const dataTargetLinkedin = event.target;
    this.setState({
      data: {
        ...this.state.data,
        linkedin: dataTargetLinkedin.value
      }
    });
    this.saveLocalStorage();
  }

  writeSocialMediaGithub(event) {
    const dataTargetGithub = event.target;
    this.setState({
      data: {
        ...this.state.data,
        github: dataTargetGithub.value
      }
    });
    this.saveLocalStorage();
  }

  sendRaddioPaletteValue(event) {
    console.log('hola', event.target.value);
    const { value } = event.target;
    this.setState({
      data: {
        ...this.state.data,
        palette: `${value}`
      }
    });
    this.saveLocalStorage();
  }

  sendTypographyValue(event) {
    console.log('typography value', event.target.value);
    const { value } = event.target;
    this.setState({
      data: {
        ...this.state.data,
        typography: `${value}`

      }
    });
    this.saveLocalStorage();
  }

  resetPreview = () => {
    console.log('oli');
    this.setState({
      data: {
        ...this.state.dataDefault,
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
      skills: this.state.data.skills,
      typography: this.state.typographyTypes[this.state.data.typography]
    }
  }

  addSelectToCard(e) {
    console.log(this.state.data.skills);
    this.setState({
      data: {
        ...this.state.data,
        skills: [e.target.value],
      }
    });
  }

  render() {
    const {paletteTypes, typographyTypes, data, arraySkills, cardURL, showCardURL } = this.state;
    return (
      <div className="CardGenerator">
        <Header />
        <Main
          optionsPalettes={paletteTypes}
          optionsTypography={typographyTypes}
          dataObject={data}
          optionsSkills={arraySkills}
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
          addSelectToCard={this.addSelectToCard}
          actionReset={this.resetPreview}
          falseClick={this.falseClick}
          handleLoadPhoto={this.handleLoadPhoto}
          fileInput={this.fileInput}
          createCard={this.createCard}
          cardURL={cardURL}
          showCardURL={showCardURL}
        />
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
