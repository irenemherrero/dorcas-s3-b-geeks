import React, { Component } from 'react';
import Collapsible from './Collapsible';
import SelectSkills from './SelectSkills';
import RadioButton from './RadioButton';
import TypographyButton from './TypographyButton';

class Form extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.falseClick = this.falseClick.bind(this);
    this.handleLoadPhoto = this.handleLoadPhoto.bind(this);
    this.fileInput = React.createRef();
  }


  falseClick(event) {
    this.fileInput.current.click()

  }


  handleLoadPhoto(event) {
    console.log(event.target.file)
    event.preventDefault();
    const fr = new FileReader();
    fr.addEventListener('load', () => {
      this.setState({ image: fr.result });
    });
    fr.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);
  }
  render() {
    const { name, email, github, job, linkedin, phone, image } = this.props.dataObject;
    // const {sendRadio}=this.props;
    ///
    const {changeRadioButtonsColor}=this.props;
    console.log(this.props);
    console.log(this.props);
    const { optionsSkills } = this.props;
    console.log(optionsSkills);
    return (
      <div className="wrapper">
        <form id="form" className="form" action="index.html" method="post" name="form">

          {/*---------------------Primer colapsable----------------------*/}

          <Collapsible
            open={true}
            icon="far fa-object-ungroup icon__primary--medium"
            name="Diseña"
            arrow="fas fa-angle-up arrow legend__arrow icon__rotation"
          >
            <div className="item-container item-container--color">
              <div className="text__dark--small">colores</div>
              <div className="radio-container">


                {/*-----------------------------RADIOBUTTONS COLORES

  Falta que salgan los colores en lo cuadraditos y que seleccione por defecto la primera opción,a parte de la funcionalidad*/}


                <RadioButton id="color1" radioCual="1" value="1" defaultChecked="checked" className="paletteColours1" />
                <RadioButton id="color2" radioCual="2" value="2" className="paletteColours2" />
                <RadioButton id="color3" radioCual="3" value="3" className="paletteColours3" />

              </div>
            </div>
            <div className="item-container">
              <div className="text__dark--small">fuentes</div>
              <div className="radio-container">

                {/*-----------------------------RADIOBUTTONS FUENTES----------------------*/}

                <TypographyButton id="font1" radioCual="4" value="1" className="text__optional--ubuntu label-design" label="Ubuntu"/>

                <TypographyButton id="font2" radioCual="5" value="2" className="text__optional--comic label-design" label="Comic Sans"/>

                <TypographyButton id="font3" radioCual="6" value="3" className="text__optional--mont label-design" label="Montserrat"/>

              </div>
            </div>
          </Collapsible>

          {/* //FORMULARIO-RELLENA */}

          {/*---------------------Segundo colapsable----------------------*/}

          <section className="fieldset js__dropdown visible">
            <Collapsible
              open={true}
              icon="icon__primary--medium far fa-keyboard"
              name="Rellena"
              arrow="fas fa-angle-down arrow legend__arrow icon__rotation"
            />
            <div className="js__dropdown-content">
              <div className="item">
                <label className="item__label" htmlFor="name">Nombre completo</label>
                <input className="input item__input form-field--name input__storage " value={name} id="name" type="text" name="name" placeholder="Ej: Sally Jill" data-donde="element-name" required="required" />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="job">Puesto</label>
                <input className="input item__input form-field--role input__storage" id="job" type="text" name="job" placeholder="Ej: Front-end unicorn" data-donde="element-role" required="required" value={job} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="image">Imagen de perfil</label>
                <div className="item__addfile">
                  <button className="item__button-file item__button-label" type="button" onClick={this.falseClick}>Añadir imagen</button>
                  <input className="input input__file--hidden input__storage" id="image" type="file" ref={this.fileInput} onChange={this.handleLoadPhoto} name="photo" required="required" />
                  <div className="item-preview">
                    <img className="item-preview__img" src={image}></img>
                  </div>
                </div>
              </div>
              <div className="item">
                <label className="item__label" htmlFor="email">Email</label>
                <input className="input item__input form-field--mail input__storage" id="email" type="email" name="email" placeholder="Ej: sally-hill@gmail.com" data-donde="element-mail" required="required" value={email} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="phone">Teléfono</label>
                <input className="input item__input form-field--tel input__storage" id="phone" type="tel" name="phone" placeholder="Ej: 555 55 55 55" data-donde="element-tel" required="required" value={phone} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="linkedin">Linkedin</label>
                <input className="input item__input form-field--lin input__storage" id="linkedin" type="url" name="linkedin" placeholder="Ej: sally.hill" data-donde="element-lin" required="required" value={linkedin} />
              </div>
              <div className="item">
                <label className="item__label" htmlFor="github">Github</label>
                <input className="input item__input form-field--gh input__storage" id="github" type="text" name="github" placeholder="Ej: sally-hill" data-donde="element-gh" required="required" value={github} />
              </div>

              <SelectSkills optionsSkills={optionsSkills} />

            </div>
          </section>


          {/* <!-- Sección Comparte --> */}
          {/*---------------------Tercer colapsable----------------------*/}

          <section className="fieldset js__dropdown visible">
            <Collapsible
              open={true}
              icon="icon__primary--medium fas fa-share-alt"
              name="Comparte"
              arrow="fas fa-angle-down arrow legend__arrow icon__rotation"
            />
            <div className="js__dropdown-content share__content-parent">
              <div className="share__content">
                <button id="submit" className="btn-card btn-card--position btn-card--text boton-card--active" type="button" name="button">
                  <i className="far fa-address-card icon-card"></i>Crear tarjeta</button>
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
          </section>
        </form>
      </div>

    );
  }
}

export default Form;
