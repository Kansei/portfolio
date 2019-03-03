import React, { Component } from 'react'
import Header from '../Header'
import Top from './Top'
import About from './About'

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
  }

  render(){
    return(
      <div>
        <Header isDefault={this.state.isDefaultHeader} />
        <Top />
        <About />
      </div>
    );
  }
}

export default Main;
