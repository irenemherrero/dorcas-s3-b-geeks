import React, { Component } from 'react';
import cardImage from "../images/card-image.png";
import BotonRedesCard from "./BotonRedesCard";

class Preview extends Component {

/* ¿Hace falta poner constructor para pasarle los datos de los botones de las redes sociales al componente BotonRedesCard?*/

  render () {
    return (
        <section className="section-card">
          <div className="section-card__container">
          
{/*Componente botón */}

            <button className="button-reset">
              <i class="far fa-trash-alt button-reset__icon"></i>
                <span className="button-reset__text">reset</span>
            </button>


              <div id="card" className="card__container paleta-azul">
                <div className="info-personal">
                  <div id="card__info" className="info-personal__container font-card--comicsans">

{/*Datos por props de Main*/}

                    <p id="element-name" className="font-card--bold font-color">{this.props.data.name}</p>
                    <p id="element-role" className="font-card">{this.props.data.job}</p>
                  </div>
                  <img className="personal-image" src= {this.props.data.photo} alt="foto personal"/>

{/*Botones redes sociales con componente hijo*/}

                  <div className="contact">
                    
                    <BotonRedesCard 
                      id="element-tel" 
                      className="contact-link contact__link--inactive contact__mobile" 
                      href="" 
                      target="_blank">
                    
                      <i className="fas fa-mobile-alt icon-mobile icon__contact">
                      </i>

                    </BotonRedesCard>

                    <BotonRedesCard 
                      id="element-mail" 
                      className="contact-link contact__link--inactive contact__envelope" 
                      href="" 
                      target="_blank">
                      
                      <i className="far fa-envelope icon-mail icon__contact">
                      </i>

                    </BotonRedesCard>

                    <BotonRedesCard 
                      id="element-lin" 
                      className="contact-link contact__link--inactive contact__linkedin" 
                      href="" 
                      target="_blank">
                      
                      <i className="fab fa-linkedin-in icon-linkedin icon__contact">
                      </i>

                    </BotonRedesCard>

                    <BotonRedesCard 
                      id="element-gh" 
                      className="contact-link contact__link--inactive contact__github" 
                      href="" 
                      target="_blank">
                      
                      <i className="fab fa-github-alt icon-github icon__contact">
                      </i>
                      
                    </BotonRedesCard>
                  </div>
                  <div className="skills">
                  </div>
                </div>
              </div>
        </div>
      </section>);
  }
}


export default Preview;
