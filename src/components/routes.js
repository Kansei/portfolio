import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main'
import Photo from './photo/Photo'
import Product from './product/Product'

class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Main} />
          <Route exact path='/photo' component={Photo}/>
          <Route exact path='/product' component={Product}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
