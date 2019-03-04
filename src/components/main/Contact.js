import React from 'react';
import Section from './Section';
import '../../css/main/Contact.css';

const Contact = (props) => {
  const contact = (
    <div className="contact">
      <div className="mail">
        kansei1227@gmail.com
      </div>
      <div className="links">
        <div className="link">
          <a href="https://www.facebook.com/kansei7221">
            <img src="/images/facebook.svg" alt="facebook" />
          </a>
        </div>
        <div className="link">
          <a href="https://twitter.com/kansei1227">
            <img src="/images/twitter.svg" alt="twitter" />
          </a>
        </div>
        <div className="link">
          <a href="https://github.com/Kansei">
            <img src="/images/github.svg" alt="github" />
          </a>
        </div>
        <div className="link">
          <a href="https://www.instagram.com/knskgm/">
            <img src="/images/instagram.svg" alt="instagram" />
          </a>
        </div>

      </div>
    </div>
  )
  return (
    <div id={props.id}>
      <Section name="Contact" content={contact} />
    </div>
  )
}

export default Contact;
