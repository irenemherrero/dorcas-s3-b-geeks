import React, { Component } from 'react';

class ListSkills extends Component {
    render() {
        console.log(this.props.arraySkills)
        const arraySkills = this.props.arraySkills;
        return (
            <ul className="skills__list text__skills">
                {arraySkills.map(function (skill, index) {
                    return (
                        <li key={index} className="skills__item">{skill}</li>);
                })
                }
            </ul>
        );
    }
}

export default ListSkills;
