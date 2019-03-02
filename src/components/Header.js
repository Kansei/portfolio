import React, { Component } from 'react'
import '../css/Header.css'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="logo"><img src="images/kk-logo-black.png" alt="kk"/></div>
        <div className="menu">About me</div>
        <div className="menu">Carrer</div>
        <div className="menu">Product</div>
        <div className="menu">Photo</div>
        <div className="menu">Contact</div>
      </div>
    );
  }
}

export default Header;
