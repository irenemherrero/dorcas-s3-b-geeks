import React, { Component } from 'react';

class TypographyButton extends Component {
    render() {
        const { id,
                radioCual,
                className,
                label,
                onChange } = this.props;
        return (
            <div className="font font--margin">
                <input id={id}
                       className="input__storage"
                       type="radio"
                       name="typography" 
                       radio-cual={radioCual}
                       value={radioCual}
                       onChange={onChange} />
                <label htmlFor={id} className={className}>
                    <span></span>
                    {label}</label>
            </div>
        );
    }
}

export default TypographyButton;
