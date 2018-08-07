import React, { Component } from 'react';


let newNumberSelect= [];
class SelectSkills extends Component {
  constructor (props) {
    super (props);
    this.state = {
      skill: '',
      numbersSelect: [1],
    }
    this.addSelectButtom = this.addSelectButtom.bind(this);
    this.addSelectToCard = this.addSelectToCard.bind(this);
    this.getButtonClass = this.getButtonClass.bind(this);
  }



  addSelectButtom (e){
    console.log(this.state.numbersSelect)
    this.setState({
      numberSelect: this.state.numbersSelect.push(1),
    });
  }

  addSelectToCard (event) {
    //console.log('hola manolo');
  }

  getButtonClass (len, index) {
    if (len ===1) {
      return 'fa fa-plus';
    } else if (len === 2  && index === 0) {
      return 'fa fa-minus';
    } else if (len === 2  && index === 1) {
      return 'fa fa-plus';
    } else if (len === 3  && index === 0) {
      return 'fa fa-minus';
    } else if (len === 3  && index === 1 || index === 2) {
      return 'fa fa-minus';
    }  else if (len > 3) {
      console.log ('El número máximo de habilidades es 3');
    }

  }



  render () {
    const {optionsSkills} = this.props;

    return (

      <div className = "item js__select-container" >
        <label className="item__label" htmlFor="abilities">Habilidades (máximo 3)</label>
        {
          newNumberSelect= this.state.numbersSelect.map((numberSelect,index,arr) =>

          <div key={index} className="item__select-container position-${index}">
            <select className="item__select position-${index}" onChange={this.addSelectToCard} value={this.state.skill} name="" id="">
              {
                optionsSkills.map(function(skill,index) {
                  return (<option key={index} className='js__option'>
                    {skill}
                  </option>)
                })
              }
            </select>
            <div className="item__select-button" onClick={this.addSelectButtom}>
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
