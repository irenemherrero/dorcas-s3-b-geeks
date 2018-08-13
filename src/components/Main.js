import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  render() {

    console.log(this.props);
    const {optionsSkills, optionsPalettes, optionsTypography, dataObject, dataObjectPreview, actionReset, changeTypography, changeRadioButtonsColor, changeInputsDataName, changeInputsDataJob, changeInputsDataEmail, changeInputsDataPhone, changeInputsDataLinkedin, changeInputsDataGithub, deleteCompleteName, deleteJob, addSelectToCard, falseClick, handleLoadPhoto, fileInput, createCard, cardURL, showCardURL} = this.props;

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
          addSelectToCard={addSelectToCard}
          deleteJob={deleteJob} 
          falseClick = {falseClick}
          handleLoadPhoto = {handleLoadPhoto}
          fileInput = {fileInput}
          createCard = {createCard}
          cardURL = {cardURL}
          showCardURL = {showCardURL}/>
      </div>
    );
  }
}

export default Main;
