import React, { Component } from 'react';

class TypographyButton extends Component {
    render() {
        const{id, radioCual, value, className, label} = this.props; 
        return ( 
            <div className="font font--margin">
                <input id={id} className="input__storage" type="radio" name="typography" radio-cual={radioCual} value={value} />
                  <label htmlFor={id} className={className}>
                    <span></span>
                    {label}</label>
                </div>
         );
    }
}
 
export default TypographyButton;