import React, { Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Main from './main/Main'
import Photo from './photo/Photo'
import Product from './product/Product'

class Routes extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Router exact path='/' component={Main} />
        <Router exact path='photo' component={Photo}/>
        <Router exact path='product' component={Product}/>
      </BrowserRouter>
    );
  }
}
