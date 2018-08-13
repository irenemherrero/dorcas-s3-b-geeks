import React, { Component } from 'react';

class ColorRadioButton extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={className}></div>
        );
    }
}

export default ColorRadioButton;
