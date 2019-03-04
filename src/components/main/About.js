import React from 'react';
import Section from './Section';
import '../../css/main/About.css';

const About = (props) => {
  const about = (
    <div className="about">
      <div className="icon">
        <img src="/images/me.jpg" alt="me" />
      </div>
      <div className="introduction">
        <div className="name">小神 寛晴(22)</div>
        <div className="text">
          九州工業大学生命情報工学部4年<br />
          学部3年時に大学で得られた技術がないことに気づき、技術習得のため開発を始める。<br />
          主にRails/sinatraを用いて、サーバーサイドの開発を行っている。<br />
          大学では、遺伝子のメチル化からヒトの睡眠状態を予測する研究に従事。
         </div>
      </div>
    </div>
  );

  return (
    <div id={props.id}>
      <Section name="About me" content={about} />
    </div>
  );
}


export default About;
