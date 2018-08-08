import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import logoAdalab from '../images/awesome-profile-cards-logo-gafas.svg';
class Header extends Component {
  render() {
    return (
      <header className="form-header">
       <a className="header__link">
       <Link to='./' component={Home}>
       
         <img className="header--image" src={logoAdalab} alt="awesome-logo"/>
         </Link>
       </a>
    </header>);
  }
  }

export default Header;
