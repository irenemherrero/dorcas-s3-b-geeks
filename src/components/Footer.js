
import React, { Component } from 'react';
import peakyLogo from '../images/pyb-logo.png';
import adalabLogo from '../images/logo-adalab.png';

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="footer__content">
          <p className="footer__copyrigth">Awesome profile-cards @2018</p>
          <img src={peakyLogo} alt="Peak-y-blinded logo" className="pyb-logo"/>
          <a className="footer__link-adalab" href="http://adalab.es/" target="_blank"> <img className="adalab-logo" src={adalabLogo} alt="adalab-logo"/> </a>
        </div>
      </div>
    );
  }
}



export default Footer;
