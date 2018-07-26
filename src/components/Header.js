import React, { Component } from 'react';
import logoAdalab from '../images/awesome-profile-cards-logo-gafas.svg';
class Header extends Component {
  render () {
    console.log(logoAdalab);
    return (
      <header className="form-header">
       <a className="header__link"
       // href="index.html"
       >
         <img className="header--image" src={logoAdalab} alt="awesome-logo"/>
       </a>
    </header>);
  }
  }

export default Header;
