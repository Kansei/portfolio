import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main'
import Photograph from './photograph/Photograph'

class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Main} />
          <Route exact path='/photograph' component={Photograph}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
