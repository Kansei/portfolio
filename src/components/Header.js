import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../css/Header.css'

const Header = (props) => {
  let logo;
  let bgstyle;
  let colorstyle
  if(props.isDefault){
    logo = "images/kk-logo-black.png";
    bgstyle = {};
    colorstyle = {};
  } else {
    logo = "images/kk-logo-white.png";
    bgstyle = { background: 'transparent' };
    colorstyle = { color: 'white' };
  }

  return(
    <div className="header effect-fadein-header" style={bgstyle}>
        <div className="logo">
          <AnchorLink href="#top"><img src={logo} alt="kk"/></AnchorLink>
        </div>
        <div className="menu">
          <AnchorLink href="#about" offset="60" style={colorstyle}>About me</AnchorLink>
        </div>
        <div className="menu">
          <AnchorLink href="#carrer" offset="60" style={colorstyle}>Carrier</AnchorLink>
        </div>
        <div className="menu">
          <AnchorLink href="#product" offset="60" style={colorstyle}>Product</AnchorLink>
        </div>
        <div className="menu">
          <AnchorLink href="#photo" offset="60" style={colorstyle}>Photo</AnchorLink>
        </div>
        <div className="menu">
          <AnchorLink href="#contact"  offset="60" style={colorstyle}>Contact</AnchorLink>
        </div>
      </div>
  );
}

export default Header;
