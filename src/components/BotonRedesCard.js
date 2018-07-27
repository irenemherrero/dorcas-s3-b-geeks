import React, { Component } from 'react';

class BotonRedesCard extends Component {
    render () {
      return (
          <button 
            id={this.props.id} 
            className={this.props.className} 
            href={this.props.href}
            target={this.props.target}
            > 
            {this.props.children}
          </button>
      )
    }
}

export default BotonRedesCard;