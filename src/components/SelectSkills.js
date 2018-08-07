import React, { Component } from 'react';

class SelectSkills extends Component {
  constructor (props) {
    super (props);
    this.state = {
      skill: ''
    }
    this.addContentToHtml = this.addContentToHtml.bind(this);
    this.addSelect = this.addSelect.bind(this);
  }
  addContentToHtml (event) {
    console.log('hola paco');
  }

  addSelect (event) {
    console.log('hola manolo');
  }


  render () {
    const {optionsSkills} = this.props;
    return (

<div className = "item js__select-container" >
  <label className="item__label" htmlFor="abilities">Habilidades (máximo 3)</label>
  <div className="item__select-container position-${index}">
    <select className="item__select position-${index}" onChange={this.addSelect} value={this.state.skill} name="" id="">
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
