import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { optionsSkills, dataObject, dataObjectPreview, resetPreview } = this.props;

//Aquí la función de resetPreview que quiero pasar al botón pierde su valor y es undefined. ¿por qué?

    console.log(resetPreview)

    return (
      <div className="main__form">
        <Preview
          dataObjectPreview={dataObjectPreview}
          dataObject={dataObject}
          actionReset={resetPreview} />
        <Form
          dataObject={dataObject}
          optionsSkills={optionsSkills} />
      </div>
    );
  }
}

export default Main;
