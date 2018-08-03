import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { optionsSkills, dataObject, dataObjectPreview, actionReset } = this.props;


    console.log(actionReset)

    return (
      <div className="main__form">
        <Preview
          dataObjectPreview={dataObjectPreview}
          dataObject={dataObject}
          actionReset={actionReset} />
        <Form
          dataObject={dataObject}
          optionsSkills={optionsSkills} />
      </div>
    );
  }
}

export default Main;
