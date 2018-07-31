import React, { Component } from 'react';

class SelectSkills extends Component {
  constructor (props) {
    super (props);
    this.addContentToHtml = this.addContentToHtml.bind(this);
  }
  addContentToHtml (event) {
    alert ('hola rita');
  }


  render () {
    const {optionsSkills} = this.props;
    console.log(optionsSkills);
    return (

<div className = "item js__select-container" >
  <label className="item__label" htmlFor="abilities">Habilidades (máximo 3)</label>
  <div className="item__select-container position-${index}">
    <select className="item__select position-${index}" name="" id="">
      {
        optionsSkills.map(function(skill,index) {
          return (<option key={index} className='js__option'>
            {skill}
          </option>)
        })
      }
    </select>
    <div className="item__select-button" onClick={this.addContentToHtml}>
      <i className='fas fa-plus js__add'/>
    </div>
  </div>

</div>



    );
  }
}

export default SelectSkills;
