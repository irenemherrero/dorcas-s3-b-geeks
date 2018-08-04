import React, { Component } from 'react';

class SelectSkills extends Component {
  constructor (props) {
    super (props);
    this.state = {
      skill: '',
      numbersSelect: [1],
      classButton: 'fas fa-plus js__add',
    }
    this.addSelectButtom = this.addSelectButtom.bind(this);
    this.addSelectToCard = this.addSelectToCard.bind(this);
    this.changeButton = this.changeButton.bind(this);
  }



  addSelectButtom (event) {
      console.log(event.target);
     if (this.state.numbersSelect.length < 3 ) {
       this.setState({
         numberSelect: this.state.numbersSelect.push(1),
         classButton: 'fas js__add fa-minus',
       });
     this.changeButton();
    } else {
      alert ('No es posible introducir más habilidades');
    }
    };


    changeButton = () => {

      //console.log(this.event);
      // const button = document.querySelectorAll('.js__add');
      // for (let i = 0; i < button.length; i++) {
      //   if (userSelections.length === i) {
      //     button[i].classList.add('fa-plus');
      //     button[i].removeEventListener('click', removeSelect);
      //     button[i].addEventListener('click', addSelect);
      //   } else {
      //     button[i].classList.remove('fa-plus');
      //     button[i].classList.add('fa-minus');
      //     button[i].removeEventListener('click', addSelect);
      //     button[i].addEventListener('click', removeSelect);
      //   }
      // }

    };


  addSelectToCard (event) {
    //console.log('hola manolo');
  }


  render () {
    const {optionsSkills} = this.props;

    return (

<div className = "item js__select-container" >
  <label className="item__label" htmlFor="abilities">Habilidades (máximo 3)</label>
  {
    this.state.numbersSelect.map((numberSelect,index) => {
      const lengthArray = this.state.numbersSelect.length;
      switch (lengthArray) {
        case 1:
        {
          return (
          <div key={index} className="item__select-container position-${index}">
            <select className="item__select position-${index}" onChange={this.addSelectToCard} value={this.state.skill} name="" id="">
              {
                optionsSkills.map((skill,indexOption) => {
                  return (<option key={indexOption} className='js__option'>
                    {skill}
                  </option>)
                })
              }
            </select>
            <div className="item__select-button" onClick={this.addSelectButtom}>
              <i className={this.state.classButton}/>
            </div>
          </div>
        );
        }

        break;
        case 2:
        {
          return (
          <div key={index} className="item__select-container position-${index}">
            <select className="item__select position-${index}" onChange={this.addSelectToCard} value={this.state.skill} name="" id="">
              {
                optionsSkills.map((skill,indexOption) => {
                  return (<option key={indexOption} className='js__option'>
                    {skill}
                  </option>)
                })
              }
            </select>
            <div className="item__select-button" onClick={this.addSelectButtom}>
              <i className={this.state.classButton}/>
            </div>
          </div>
        );
        }

        break;
        case 3:
        {
          return (
          <div key={index} className="item__select-container position-${index}">
            <select className="item__select position-${index}" onChange={this.addSelectToCard} value={this.state.skill} name="" id="">
              {
                optionsSkills.map((skill,indexOption) => {
                  return (<option key={indexOption} className='js__option'>
                    {skill}
                  </option>)
                })
              }
            </select>
            <div className="item__select-button" onClick={this.addSelectButtom}>
              <i className={this.state.classButton}/>
            </div>
          </div>
        );
        }

        break;
        case 4:
        {
          return (
          console.log('loretus')
        );
        }

        break;

      }



    }



)
}
</div>



    );
  }
}


export default SelectSkills;
