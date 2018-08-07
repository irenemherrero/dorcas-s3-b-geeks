import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.css';
import Landing from './components/Landing';
import { HashRouter } from 'react-router-dom';
import Fontawesome from '@fortawesome/fontawesome-free/css/all.css';


ReactDOM.render(
    <HashRouter>
        <Landing />
    </HashRouter>,
    document.getElementById('root'));
