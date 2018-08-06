import React, { Component } from 'react';
import ResetButton from './ResetButton';

class Preview extends Component {
constructor(props){
  super(props);
  console.log(props);
}
  render() {
    const { email, github, image, job, linkedin, name, palette, phone, photo, skills, typography } = this.props.dataObject;
    const {email, github, image, job, linkedin, name, palette, phone, photo, skills, typography} = this.props.dataObjectPreview;
    const {dataObjectPreview, dataObject, actionReset} = this.props;
    return (
      <section className="section-card">
        <div className="section-card__container">

          {/*Componente botón */}

              <ResetButton 
              dataObjectPreview={dataObjectPreview}
              dataObject={dataObject}
              actionReset={actionReset}/> 

                {/*Datos por props de Main*/}

              <div id="card" className={`card__container ${palette}`}>
                <div className="info-personal">
                  <div id="card__info" className={`info-personal__container ${typography}`}>
                    <p id="element-name" className="font-card--bold font-color">{name}</p>
                    <p id="element-role" className="font-card">{job}</p>
                  </div>
                  <img className="personal-image" src= {photo} alt="foto personal"/>

              <div className="contact">
                <a id="element-tel" className="contact-link contact__link--inactive contact__mobile" href={`tel:${phone}`} target="_blank"><i className="fas fa-mobile-alt icon-mobile icon__contact"></i></a>
                <a id="element-mail" className="contact-link contact__link--inactive contact__envelope" href={`mailto:${email}`} target="_blank"><i className="far fa-envelope icon-mail icon__contact"></i></a>
                <a id="element-lin" className="contact-link contact__link--inactive contact__linkedin" href={`https://linkedin.com/in/${linkedin}`} target="_blank"><i className="fab fa-linkedin-in icon-linkedin icon__contact"></i></a>
                <a id="element-gh" className="contact-link contact__link--inactive contact__github" href={`https://github.com/${github}`} target="_blank"><i className="fab fa-github-alt icon-github icon__contact"></i></a>
              </div>
              {/*Faltan las Skills*/}
              <div className="skills">
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}


export default Preview;
