import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <footer class="footer">
        <div class="footer__content">
          <p class="footer__copyrigth">Awesome profile-cards @2018</p>
          <img src="./images/pyb-logo.png" alt="Peak-y-blinded logo" class="pyb-logo"/>
          <a class="footer__link-adalab" href="http://adalab.es/" target="_blank"> <img class="adalab-logo" src="./images/logo-adalab.png" alt="adalab-logo"/> </a>
        </div>
      </footer>
    );
  }
}


export default Footer;
