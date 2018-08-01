import React, {Component} from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    console.log(this.props);
    const {optionsSkills, optionsPalettes, optionsTypography, dataObject} = this.props;

    return (
    <div className="main__form">
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
      optionsPalettes={optionsPalettes}
      optionsTypography={optionsTypography}
      dataObject={dataObject}
      optionsSkills={optionsSkills} />
    </div>
  );
  }
}

export default Main;
