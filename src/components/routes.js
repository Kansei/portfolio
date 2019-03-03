import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main'
import Photograph from './photograph/Photograph'
import Product from './product/Product'

class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Main} />
          <Route exact path='/photograph' component={Photograph}/>
          <Route exact path='/product' component={Product}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
