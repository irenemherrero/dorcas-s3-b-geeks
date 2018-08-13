import React, { Component } from "react";
import adalabLogo from "../images/logo-adalab.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__content">
          <p className="footer__copyrigth">Awesome profile-cards @2018</p>
          <a
            className="footer__link-adalab"
            href="http://adalab.es/"
            target="_blank"
          >
            {" "}
            <img
              className="adalab-logo"
              src={adalabLogo}
              alt="adalab-logo"
            />{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
