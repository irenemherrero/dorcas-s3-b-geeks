import React, { Component } from 'react';

class Collapsible extends Component {
  render() {
    const { open, handleClickCollapsibles } = this.props;
    console.log("OPEN COLAPSIBLE", open);
    return (
      <section className="fieldset js__dropdown visible">
        <div className="legend__container js__dropdown-title" onClick={handleClickCollapsibles}>
          <legend className="fieldset__legend">
            <i className={this.props.icon}></i>
            <span className="text__dark--title">{this.props.name}</span>
          </legend>
          <i className={this.props.arrow}></i>
        </div>
        <div className="design__container js__dropdown-content">
          {!open ? null : this.props.children}
        </div>
      </section>
    );
  }
}

export default Collapsible;
