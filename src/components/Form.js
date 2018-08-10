import React, { Component } from 'react';
import Collapsible from './Collapsible';
import SelectSkills from './SelectSkills';
import RadioButton from './RadioButton';
import TypographyButton from './TypographyButton';
import BotonCrearTarjeta from './BotonCrearTarjeta';
BotonCrearTarjeta
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCollapsibleDesign: true,
      openCollapsibleField: false,
      openCollapsibleShare: false
    }
    
    this.handleClickCollapsibleDesign=this.handleClickCollapsibleDesign.bind(this);
    this.handleClickCollapsibleField=this.handleClickCollapsibleField.bind(this);
    this.handleClickCollapsibleShare=this.handleClickCollapsibleShare.bind(this);

  }

  handleClickCollapsibleDesign(){
    if (this.state.openCollapsibleDesign === true) {
      this.setState({openCollapsibleDesign: false});
    } else if (this.state.openCollapsibleDesign === false) {
      this.setState({openCollapsibleDesign: true});
    }
  }

  handleClickCollapsibleField() {
    if (this.state.openCollapsibleField === true) {
      this.setState({openCollapsibleField: false});
    } else if (this.state.openCollapsibleField === false) {
      this.setState({openCollapsibleField: true});
    }
  }

  handleClickCollapsibleShare() {
    if (this.state.openCollapsibleShare === true) {
      this.setState({openCollapsibleShare: false});
    } else if (this.state.openCollapsibleShare === false) {
      this.setState({openCollapsibleShare: true});
    }
  }




  render() {
    console.log(this.props);
    const {name, email, github, job, linkedin, phone, image, typography, palette} = this.props.dataObject;
    const {changeTypography} = this.props;
    const {changeRadioButtonsColor}=this.props;
    const {optionsSkills} = this.props;
    const {changeInputsDataName} = this.props;
    const {changeInputsDataJob} = this.props;
    const {changeInputsDataEmail} = this.props;
    const {changeInputsDataPhone} = this.props;
    const {changeInputsDataLinkedin} = this.props;
    const {changeInputsDataGithub} = this.props;
    const {deleteCompleteName} = this.props;
    const {deleteJob} = this.props;
    const {addSelectToCard} = this.props;
    const {handleLoadPhoto} = this.props;
    const {falseClick} = this.props;
    const {fileInput} = this.props;

    return (
      <div className="wrapper">
        <form id="form" className="form" action="index.html" method="post" name="form">

          {/*---------------------Primer colapsable----------------------*/}
          <section className="fieldset js__dropdown visible">
          <Collapsible
            open={this.state.openCollapsibleDesign}
            icon="far fa-object-ungroup icon__primary--medium"
            name="Diseña"
            arrow="fas fa-angle-up arrow legend__arrow icon__rotation"
            handleClickCollapsibles = {this.handleClickCollapsibleDesign}
          >
            <div className="item-container item-container--color">
              <div className="text__dark--small">colores</div>
              <div className="radio-container">

                {/*-----------------------------RADIOBUTTONS COLORES

  Falta que salgan los colores en lo cuadraditos y que seleccione por defecto la primera opción,a parte de la funcionalidad*/}

                <RadioButton id="color1" radioCual="1" value={palette} defaultChecked="checked"  className="paletteColours1" onChange={changeRadioButtonsColor} />
                <RadioButton id="color2" radioCual="2" value={palette} className="paletteColours2" onChange={changeRadioButtonsColor} />
                <RadioButton id="color3" radioCual="3" value={palette} className="paletteColours3" onChange={changeRadioButtonsColor} />

              </div>
            </div>
            <div className="item-container">
              <div className="text__dark--small">fuentes</div>
              <div className="radio-container">

                {/*-----------------------------RADIOBUTTONS FUENTES----------------------*/}

                <TypographyButton id="font1" radioCual="1" value={typography} className="text__optional--ubuntu label-design" label="Ubuntu" onChange={changeTypography}/>

                <TypographyButton id="font2" radioCual="2" value={typography} className="text__optional--comic label-design" label="Comic Sans" onChange={changeTypography}/>

                <TypographyButton id="font3" radioCual="3" value={typography} className="text__optional--mont label-design" label="Montserrat" onChange={changeTypography}/>

              </div>
            </div>
          </Collapsible>
        </section>
          {/* //FORMULARIO-RELLENA */}
          <section className="fieldset js__dropdown visible">
            <Collapsible
              open={this.state.openCollapsibleField}
              icon="icon__primary--medium far fa-keyboard"
              name="Rellena"
              arrow="fas fa-angle-down arrow legend__arrow icon__rotation"
              handleClickCollapsibles = {this.handleClickCollapsibleField}
            >
            <div className="js__dropdown-content">
              <div className="item">
                <label className="item__label" htmlFor="name">Nombre completo</label>
                <input className="input item__input form-field--name input__storage " value={name} id="name" type="text" name="name" placeholder="Ej: Sally Jill" data-donde="element-name" required="required" onChange={changeInputsDataName} onFocus={deleteCompleteName} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="job">Puesto</label>
                <input className="input item__input form-field--role input__storage" id="job" type="text" name="job" placeholder="Ej: Front-end unicorn" data-donde="element-role" required="required" value={job} onChange={changeInputsDataJob} onFocus={deleteJob} />
              </div>

              {/*-----------------------------IMAGEN FILEREADER----------------------*/}

              <div className="item">
                <label className="item__label" htmlFor="image">Imagen de perfil</label>
                <div className="item__addfile">
  
{/* Boton de subir imagen*/}

                <button className="item__button-file item__button-label" type="button" onClick={falseClick}>Añadir imagen</button>
               
{/*Algo escondido*/}

                <input className="input input__file--hidden input__storage" id="image" type="file" ref={fileInput} onChange={handleLoadPhoto} name="photo" required="required" />
{/*Vista previa de imagen*/}

                  <div className="item-preview">
                
                    <img className="item-preview__img" src={fileInput}></img>
                  
                    </div>

                </div>
              </div>


              <div className="item">
                <label className="item__label" htmlFor="email">Email</label>
                <input className="input item__input form-field--mail input__storage" id="email" type="email" name="email" placeholder="Ej: sally-hill@gmail.com" data-donde="element-mail" required="required" value={email} onChange={changeInputsDataEmail} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="phone">Teléfono</label>
                <input className="input item__input form-field--tel input__storage" id="phone" type="tel" name="phone" placeholder="Ej: 555 55 55 55" data-donde="element-tel" required="required" value={phone} onChange={changeInputsDataPhone} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="linkedin">Linkedin</label>
                <input className="input item__input form-field--lin input__storage" id="linkedin" type="url" name="linkedin" placeholder="Ej: sally.hill" data-donde="element-lin" required="required" value={linkedin} onChange={changeInputsDataLinkedin} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="github">Github</label>
                <input className="input item__input form-field--gh input__storage" id="github" type="text" name="github" placeholder="Ej: sally-hill" data-donde="element-gh" required="required" value={github} onChange={changeInputsDataGithub} />
              </div>
              <SelectSkills
                optionsSkills={optionsSkills}
                changeSelects = {addSelectToCard} />
            </div>
            </Collapsible>
          </section>


          {/* <!-- Sección Comparte --> */}

          {/*---------------------Tercer colapsable----------------------*/}

          <section className="fieldset js__dropdown visible">
            <Collapsible
              open={this.state.openCollapsibleShare}
              icon="icon__primary--medium fas fa-share-alt"
              name="Comparte"
              arrow="fas fa-angle-down arrow legend__arrow icon__rotation"
              handleClickCollapsibles = {this.handleClickCollapsibleShare}
            >
            <div className="js__dropdown-content share__content-parent">
              <div className="share__content">

{/*Boton crear tarjeta*/}

                <BotonCrearTarjeta />
              </div>
              <div className="card-created hidden__item">
                <h3 className="text__dark--title card-created__title">La tarjeta ha sido creada:</h3>
                <p className="card-link text__card-link response"></p>
                <a className="link-twitter" href="" target="_blank">
                  <button className="btn-twitter btn-twitter--position btn-twitter--text" type="button" name="button">
                    <i className="fab fa-twitter icon-twitter"></i>Compartir en twitter</button>
                </a>
              </div>
            </div>
            </Collapsible>
          </section>
        </form>
      </div>

    );
  }
}

            export default Form;
