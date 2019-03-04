import React, { Component } from 'react'
import '../../css/main/Top.css'


class Top extends Component {
  render(){
    return(
      <div className="top">
        <div className="center-box">
          <div className="logo">
            <img src="/images/kk-logo-white.png" alt="kk"/>
          </div>
          <div className="name">
            <img src="/images/name-white.png" alt="kansei kogami"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
