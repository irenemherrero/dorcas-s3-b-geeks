import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props.dataObjectPreview);
  }

  render() {
    const { optionsSkills, dataObject, dataObjectPreview } = this.props;

    return (
      <div className="main__form">
        <Preview
          dataObjectPreview={dataObjectPreview}
          dataObject={dataObject} />
        <Form
          dataObject={dataObject}
          optionsSkills={optionsSkills} />
      </div>
    );
  }
}

export default Main;
