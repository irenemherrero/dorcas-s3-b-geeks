import React, { Component } from 'react';

let newNumberSelect= [];

class SelectSkills extends Component {
  constructor(props) {
    super(props);

    this.getButtonClass = this.getButtonClass.bind(this);
  }

  getButtonClass (len, index) {
    if (len === 2  && index === 0) {
      return this.className='fa fa-minus';
    } else if (len === 2  && index === 1) {
      return this.className='fa fa-plus';
    } else if (len === 3) {
      return this.className='fa fa-minus';
    }
  }



  render () {

    const {
      optionsSkills,
      changeSelects,
      userSkills,
      addSelectButton
    } = this.props;

    return (
      <div className = "item js__select-container" >
        <label className="item__label" htmlFor="abilities">Habilidades (máximo 3)</label>
        {
          userSkills.map((userSkill,index,arr) =>
          <div key={index} className="item__select-container position-${index}">
            <select
              className="item__select position-${index}"
              onChange={changeSelects}
              value={userSkill} name="" id={index}>
              {
                optionsSkills.map(function(optionSkill,index) {
                  return (
                    <option key={index} value={optionSkill} className='js__option'>
                      {optionSkill}
                    </option>
                  )
                })
              }
            </select>
            <div className="item__select-button" onClick={addSelectButton}>
              <i id= 'buttonSelect' className={this.getButtonClass(arr.length,index)}/>
            </div>
          </div>
        )
       }
   </div>
  );
 }
}


export default SelectSkills;
