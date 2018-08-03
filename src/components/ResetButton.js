import React, { Component } from 'react';

class ResetButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('oli');
    }
    render() {
        return (
            <button className="button-reset" onClick={this.handleClick}>
                <i className="far fa-trash-alt button-reset__icon"></i>
                <span className="button-reset__text">reset</span>
            </button>
        );
    }
}

export default ResetButton;
