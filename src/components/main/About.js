import React, { Component } from 'react'
import SectionName from './SectionName'
import '../../css/main/About.css'

class About extends Component {
  render(){
    return(
      <div className="about">
       <SectionName section="About me"/>
       <div className="contents">
         <div className="icon">
           <img src="/images/me.jpg" alt="me"/>
         </div>
         <div className="introduction">
           <div className="name">小神 寛晴(22)</div>
           <div className="text">
             九州工業大学生命情報工学部4年<br/>
             学部3年時に大学で得られた技術がないことに気づき、技術習得のため開発を始める。<br/>
             主にRails/sinatraを用いて、サーバーサイドの開発を行っている。<br/>
             大学では、遺伝子のメチル化からヒトの睡眠状態を予測する研究に従事。
           </div>
         </div>
       </div>
      </div>
    );
  }
}

export default About;
