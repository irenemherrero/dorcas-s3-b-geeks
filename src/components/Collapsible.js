import React, { Component } from 'react';

class Collapsible extends Component {
  render() {
    return (
        <div className="legend__container js__dropdown-title">
        <legend className="fieldset__legend">
        <i className={this.props.icon}></i>
        <span className="text__dark--title">{this.props.name}</span>
        </legend>
        <i className={this.props.arrow}></i>
        </div>
    );
  }
}

export default Collapsible;
