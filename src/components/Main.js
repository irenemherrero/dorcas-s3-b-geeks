import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    console.log(this.props);
    const {optionsSkills, dataObject, dataObjectPreview, actionReset, optionsPalettes, optionsTypography} = this.props;
    const {changeTypography} = this.props;
    const {changeRadioButtonsColor}= this.props;
    const {changeInputsDataName} = this.props;
    const {changeInputsDataJob} = this.props;
    const {changeInputsDataEmail} = this.props;
    const {changeInputsDataPhone} = this.props;
    const {changeInputsDataLinkedin} = this.props;
    const {changeInputsDataGithub} = this.props;
    const {deleteCompleteName} = this.props;
    const {deleteJob} = this.props;

    return (
      <div className="main__form">
        <Preview
          optionsSkills={optionsSkills}
          dataObjectPreview={dataObjectPreview}
          actionReset={actionReset} />
        <Form
          optionsPalettes={optionsPalettes}
          optionsTypography={optionsTypography}
          dataObject={dataObject}
          optionsSkills={optionsSkills}
          changeTypography={changeTypography}
          changeRadioButtonsColor= {changeRadioButtonsColor}
          changeInputsDataName={changeInputsDataName}
          changeInputsDataJob={changeInputsDataJob}
          changeInputsDataEmail={changeInputsDataEmail}
          changeInputsDataPhone={changeInputsDataPhone}
          changeInputsDataLinkedin={changeInputsDataLinkedin}
          changeInputsDataGithub={changeInputsDataGithub}
          deleteCompleteName={deleteCompleteName}
          deleteJob={deleteJob} />

      </div>
    );  
  }
}

export default Main;
