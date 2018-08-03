import React, {Component} from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {optionsSkills, optionsPalettes, optionsTypography, dataObject} = this.props;
    const {changeInputsData}= this.props;
    return (
    <div className="main__form">
<<<<<<< HEAD
    {/*} <Preview
    //       palette = {paletteTypes[this.state.data.palette]}
    //       typography = {typographyTypes[this.state.data.typography]}
    //       name = "Nombre Apellidos"
    //       job = "Front-end developer"
    //       photo = {previewPhoto}
    //       email = ""
    //       github = ""
    //       linkedin = ""
    //       // skills = ["HTML", "SASS"]
    //       />*/}
     <Form
=======
    <Preview
      optionsPalettes={optionsPalettes}
      optionsTypography={optionsTypography}
      dataObject={dataObject}
      optionsSkills={optionsSkills}/>
     <Form 
>>>>>>> 2f6fa49cffc7c99548e7e3c8a7f3b48542a97227
      optionsPalettes={optionsPalettes}
      optionsTypography={optionsTypography}
      dataObject={dataObject}
      optionsSkills={optionsSkills}
      changeInputsData={changeInputsData} />
    </div>
  );
  }
}

export default Main;
