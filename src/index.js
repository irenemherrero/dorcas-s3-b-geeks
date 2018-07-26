import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.css';
import CardGenerator from './CardGenerator';
import Fontawesome from '@fortawesome/fontawesome-free/css/all.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardGenerator />, document.getElementById('root'));
registerServiceWorker();
