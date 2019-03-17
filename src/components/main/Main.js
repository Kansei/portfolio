import React, { Component } from 'react';
import Header from '../Header';
import Top from './Top';
import About from './About';
import Carrer from './Carrer';
import Product from './Product';
import Photo from './Photo';
import Contact from './Contact'

let lastScrollY = 0;

class Main extends Component {
  constructor(props){
    super(props);
    this.state = { isDefaultHeader: false};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;

    const shoudBeDefaultHeader = (lastScrollY < window.innerHeight) ? false : true;

    if (shoudBeDefaultHeader !== this.state.isDefaultHeader) {
      this.setState({isDefaultHeader: shoudBeDefaultHeader})
    }

    // スクロールに合わせたアニメーション
    var sections = document.getElementsByClassName("effect-fade");

    for (let i = 0; i< sections.length; i++) {
      if (sections[i].classList.contains("effect-scroll")){continue;}
      let sectionPositoin = sections[i].getBoundingClientRect();

      if (sectionPositoin.top < 400) {
        sections[i].classList.add("effect-scroll");
      }
    }
  }

  render(){
    return(
      <div>
        <Header isDefault={this.state.isDefaultHeader} />
        <Top id="top"/>
        <About id="about"/>
        <Carrer id="carrer"/>
        <Product id="product"/>
        <Photo id="photo"/>
        <Contact id="contact"/>
      </div>
    );
  }
}

export default Main;
