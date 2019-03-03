import React from 'react'
import '../css/Header.css'

const Header = (props) => {
  let logo;
  let style;
  if(props.isDefault){
    logo = "images/kk-logo-black.png";
    style = {};
  } else {
    logo = "images/kk-logo-white.png";
    style = {
      color: 'white',
      background: 'transparent',
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

export default Header;
