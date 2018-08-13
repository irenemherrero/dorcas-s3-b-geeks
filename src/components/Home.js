import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogoGlasses from '../images/awesome-profile-cards-logo-gafas.svg';
import LogoAdalab from '../images/logo-adalab.png';


class Home extends Component {
    render() {
        return (
            <Fragment>
            <main className="main">
                <div className="image__general">
                    <div className="image__container">
                        <img className="image" src={LogoGlasses} alt="awesome-cards" title="awesome-cards" />
                        <div className="main__section-1">
                            <h1 className="main__sub-title">Crea tu tarjeta de visita</h1>
                            <p className="main__paragraph">Crea mejores contactos profesionales de forma fácil y cómoda</p>
                        </div>
                        <div className="main__section-2">
                            <ul className="card-options">
                                <li className="card-options__item" >
                                    <i className=" icon__primary--card far fa-object-ungroup"></i>
                                    <span>Diseña</span>	</li>
                                <li className="card-options__item">
                                    <i className="icon__primary--card far fa-keyboard"></i>
                                    <span>Rellena</span></li>
                                <li className="card-options__item">
                                    <i className="icon__primary--card fas fa-share-alt"></i>
                                    <span>Comparte</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="main__section-3">
                            <Link to='/card-generator' className="LinkHome button-start">comenzar</Link>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer__content">
                    <p className="footer__copyrigth">Awesome profile-cards @2018</p>
                    <a className="footer__link-adalab" href="http://adalab.es/" target="_blank">
                    <img className="adalab-logo" src={LogoAdalab} alt="adalab-logo" /> </a>
                </div>
            </footer>
        </Fragment>);
    }
}

export default Home;
