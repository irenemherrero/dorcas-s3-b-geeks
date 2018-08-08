import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import CardGenerator from './CardGenerator';

class Landing extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/card-generator' component={CardGenerator}/>
          </Switch>
         );
    }
}
 
export default Landing;