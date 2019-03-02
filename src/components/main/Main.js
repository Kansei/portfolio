import React, { Component } from 'react'
import Header from '../Header'
import Top from './Top'
import About from './About'

let lastScrollY = 0;
let isDefault = false;

class Main extends Component {

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = () => {
  //   lastScrollY = window.scrollY;
  //   if (lastScrollY < window.innerHeight){
  //     isDefault = false;
  //   } else {
  //     isDefault = true;
  //   }
  // }

  render(){
    return(
      <div>
        <Header isDefault={false} />
        <Top />
        <About />
      </div>
    );
  }
}

export default Main;
