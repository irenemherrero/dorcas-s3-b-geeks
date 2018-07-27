import React, { Component } from 'react';

class Collapsible extends Component {
  render() {
    return (
        <div className="legend__container js__dropdown-title">
          {this.props.children}
        </div>
    );
  }
}

export default Collapsible;
