import React, { Component } from 'react'
import Routes from './routes'
import Footer from './Footer'
import '../css/reset.css'
import '../css/App.css'

class App extends Component {
  render(){
    return(
      <div>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
