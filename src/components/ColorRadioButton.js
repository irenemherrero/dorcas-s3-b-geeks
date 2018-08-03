import React, { Component, Fragment } from 'react';

class ColorRadioButton extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() { 

        const {className} = this.props;
        return (
            <div className={className}></div> 
        );
    }
}
 
export default ColorRadioButton;
