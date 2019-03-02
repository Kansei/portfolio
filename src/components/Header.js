import React, { Component } from 'react'
import '../css/Header.css'
import { white } from 'ansi-colors';

let logo;
let style;

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDefault: props.isDefault,
    };
  }

  render(){
    if(this.state.isDefault){
      logo = "images/kk-logo-black.png";
      style = {};
    } else {
      logo = "images/kk-logo-white.png";
      style = {
        color: 'white',
        background: 'rgba(0,0,0,0.8)',
      };
    }

    return(
      <div className="header" style={style}>
        <div className="logo"><img src={logo} alt="kk"/></div>
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
