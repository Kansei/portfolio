import React from 'react'
import '../../css/main/Top.css'


const Top = (props) => {
  return (
    <div className="top" id={props.id}>
      <div className="center-box">
        <div className="logo">
          <img src="/images/kk-logo-white.png" alt="kk" />
        </div>
        <div className="name">
          <img src="/images/name-white.png" alt="kansei kogami" />
        </div>
      </div>
    </div>
  );
}

export default Top;
