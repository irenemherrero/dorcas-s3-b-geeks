import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardGenerator from './CardGenerator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardGenerator />, document.getElementById('root'));
registerServiceWorker();
