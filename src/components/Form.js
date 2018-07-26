import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <div className="wrapper">
      <form id="form" className="form" action="index.html" method="post" name="form">
        <section className="form__fieldset-design js__dropdown visible">
          <div className="legend__container js__dropdown-title">
            <legend className="fieldset__legend">
              <i className="far fa-object-ungroup icon__primary--medium"></i>
              <span className="text__dark--title">diseña</span>
            </legend>
            <i className="fas fa-angle-up arrow legend__arrow icon__rotation"></i>
          </div>
          <div className="design__container js__dropdown-content">
            <div className="item-container item-container--color">
              <div className="text__dark--small">colores</div>
              <div className="radio-container">
                <div className="palette palette--margin">
                  <input id="color1" className="input__storage" type="radio" name="palette" radio-cual="1" value="1" checked="checked"/>
                  <label for="color1" className="label-design">
                    <span></span>
                    <div className="palette-box colorp1"></div>
                    <div className="palette-box colorp2"></div>
                    <div className="palette-box colorp3"></div>
                  </label>
                </div>
                <div className="palette palette--margin">
                  <input id="color2" className="input__storage" type="radio" name="palette" radio-cual="2" value="2"/>
                    <label for="color2" className="label-design">
                      <span></span>
                      <div className="palette-box colorp4"></div>
                      <div className="palette-box colorp5"></div>
                      <div className="palette-box colorp6"></div>
                    </label>
                  </div>
                  <div className="palette">
                    <input id="color3" className="input__storage" type="radio" name="palette" radio-cual="3" value="3"/>
                      <label for="color3" className="label-design">
                        <span></span>
                        <div className="palette-box colorp7"></div>
                        <div className="palette-box colorp8"></div>
                        <div className="palette-box colorp9"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="item-container">
                  <div className="text__dark--small">fuentes</div>
                  <div className="radio-container">
                    <div className="font font--margin">
                      <input id="font1" className="input__storage" type="radio" name="typography" radio-cual="4" value="1"/>
                        <label for="font1" className="text__optional--ubuntu label-design">
                          <span></span>
                          Ubuntu</label>
                      </div>
                      <div className="font font--margin">
                        <input id="font2" className="input__storage" type="radio" name="typography" radio-cual="5" value="2" checked="checked"/>
                          <label for="font2" className="text__optional--comic label-design">
                            <span></span>
                            Comic Sans</label>
                        </div>
                        <div className="font">
                          <input id="font3" className="input__storage" type="radio" name="typography" radio-cual="6" value="3"/>
                            <label for="font3" className="text__optional--mont label-design">
                              <span></span>
                              Montserrat</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </section>

                    {/* //FORMULARIO-RELLENA */}
                    <section className="fieldset js__dropdown">
                      <div className="legend__container js__dropdown-title">
                        <div className="legend">
                          <i className="icon__primary--medium far fa-keyboard"></i>
                          <h1 className="text__dark--title">Rellena</h1>
                        </div>
                        <i className="fas fa-angle-down arrow legend__arrow icon__rotation"></i>
                      </div>
                      <div className="js__dropdown-content">
                        <div className="item">
                          <label className="item__label" for="name">Nombre completo</label>
                          <input className="input item__input form-field--name input__storage " id="name" type="text" name="name" placeholder="Ej: Sally Jill" data-donde="element-name" required="required"/>
                        </div>
                          <div className="item">
                            <label className="item__label" for="job">Puesto</label>
                            <input className="input item__input form-field--role input__storage" id="job" type="text" name="job" placeholder="Ej: Front-end unicorn" data-donde="element-role" required="required"/>
                          </div>
                            <div className="item">
                              <label className="item__label" for="image">Imagen de perfil</label>
                              <div className="item__addfile">
                                <button className="item__button-file item__button-label" type="button">Añadir imagen</button>
                                <input className="input input__file--hidden input__storage" id="image" type="file" name="photo" required="required"/>
                                  <div className="item-preview">
                                    <img className="item-preview__img" src="http://placehold.it/29x29/ffffff/ffffff"></img>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <label className="item__label" for="email">Email</label>
                                <input className="input item__input form-field--mail input__storage" id="email" type="email" name="email" placeholder="Ej: sally-hill@gmail.com" data-donde="element-mail" required="required"/>
                              </div>
                                <div className="item">
                                  <label className="item__label" for="phone">Teléfono</label>
                                  <input className="input item__input form-field--tel input__storage" id="phone" type="tel" name="phone" placeholder="Ej: 555 55 55 55" data-donde="element-tel" required="required"/>
                                </div>
                                  <div className="item">
                                    <label className="item__label" for="linkedin">Linkedin</label>
                                    <input className="input item__input form-field--lin input__storage" id="linkedin" type="url" name="linkedin" placeholder="Ej: sally.hill" data-donde="element-lin" required="required"/>
                                  </div>
                                    <div className="item">
                                      <label className="item__label" for="github">Github</label>
                                      <input className="input item__input form-field--gh input__storage" id="github" type="text" name="github" placeholder="Ej: sally-hill" data-donde="element-gh" required="required"/>
                                    </div>
                                      <div className="item js__select-container">
                                        <label className="item__label" for="abilities">Habilidades (máximo 3)</label>
                                      </div>
                                    </div>
                                  </section>

                                  {/* <!-- Sección Comparte --> */}

                                  <section className="share js__dropdown">
                                    <div className="share__header js__dropdown-title">
                                      <div className="share__icon-title">
                                        <i className="icon__primary--medium fas fa-share-alt"></i>
                                        <h2 className="text__dark--title share__title">comparte</h2>
                                      </div>
                                      <i className="fas fa-angle-down arrow legend__arrow icon__rotation"></i>
                                    </div>
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
