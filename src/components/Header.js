import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import logoAdalab from '../images/awesome-profile-cards-logo-gafas.svg';

class Header extends Component {
  render() {
    return (
      <header className="form-header">
          <Link to='./' className="header__link">
            <img className="header--image" src={logoAdalab} alt="awesome-logo" />
          </Link>
      </header>);
  }
}

export default Header;
