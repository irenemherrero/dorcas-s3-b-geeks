import React, { Component } from 'react';


let newNumberSelect= [];
class SelectSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: '',
      numbersSelect: [1],
    }
    this.addSelectButtom = this.addSelectButtom.bind(this);
    this.removeSelectButton = this.removeSelectButton.bind(this);
    this.addSelectToCard = this.addSelectToCard.bind(this);
    this.getButtonClass = this.getButtonClass.bind(this);
  }



  addSelectButtom (e){
    const lenArr = (this.state.numbersSelect.length);
    const Arr = (this.state.numbersSelect);
    if (lenArr === 1) {
      this.setState({
        numberSelect: this.state.numbersSelect.push(1),
      });
    } else  if (lenArr === 2){
      if (e.target.className = 'fa fa-plus'){
        this.setState({
          numberSelect: this.state.numbersSelect.push(1),
        });
        alert('OJO: No puedes introducir más habilidades');
      } else if (e.target.className = 'fa fa-minus'){
        this.setState({
          numberSelect: this.state.numbersSelect.splice(1,1),
        });
      }
    } else if (lenArr === 3){
        this.setState({
          numberSelect: this.state.numbersSelect.splice(2,1),
        });
      }
    }


  removeSelectButton (e) {
    if (this.className = 'fa fa-plus') {
      console.log('loading') ;
    } else if (this.className = 'fa fa-minus'){
      console.log('me cago en mi puta madre');
      this.setState({
        numberSelect: this.state.numbersSelect.splice(1),
      });
    }
  }

  addSelectToCard (event) {
    //console.log('hola manolo');
  }

  getButtonClass (len, index) {
    if (len ===1) {
      return this.className='fa fa-plus';
    } else if (len === 2  && index === 0) {
      return this.className='fa fa-minus';
    } else if (len === 2  && index === 1) {
      return this.className='fa fa-plus';
    } else if (len === 2  && index === 1 && this.className === 'fa fa-minus') {
      this.setState({
        numberSelect: this.state.numbersSelect.splice(1,1),
      });
      return this.className='fa fa-plus';
    } else if (len === 3  && index === 0) {
      return this.className='fa fa-minus';
    } else if (len === 3  && index === 1 || index === 2) {
      return this.className='fa fa-minus';
    }  else {
      alert ('El número máximo de habilidades es 3');
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
