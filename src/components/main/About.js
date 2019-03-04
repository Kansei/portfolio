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
        <div className="info">
          <div className="name">小神 寛晴(22)</div>
          <div className="affiliation">九州工業大学生命情報工学部4年</div>
        </div>
        <div className="text">
          <ul>
            <li>
            学部3年時に、これでまでの大学生活で身についた技術が一つもない事に気づき、何か技術を身に付けたいという漠然とした思いからアプリ開発を始める。
            </li>
            <li>
            主に Rails/sinatra を用いてweb開発を行っており、現在はフロント開発に興味を持ち React を勉強中。
            </li>
            <li>
            大学では、遺伝子のメチル化からヒトの睡眠状態を予測する研究に従事。
            </li>
            <li>
            好きな食べ物は親子丼、唐揚げ、卵焼き
            </li>
          </ul>
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
