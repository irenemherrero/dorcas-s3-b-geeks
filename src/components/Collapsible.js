import React, { Component } from 'react';

class Collapsible extends Component {
  render() {
    return (
        <div className="legend__container js__dropdown-title">
          <legend className="fieldset__legend">
            <i className="far fa-object-ungroup icon__primary--medium"></i>
            <span className="text__dark--title">diseña</span>
          </legend>
          <i className="fas fa-angle-up arrow legend__arrow icon__rotation"></i>
        </div>
    );
  }
}

export default Collapsible;
