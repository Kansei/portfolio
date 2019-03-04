import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../../css/photograph/photograph.css';

class Photograph extends Component {
  render() {
    return (
      <div>
        <Header isDefault={true} />
        <div className="photograph">
          <div className="preparing">
            <div className="text">
              僕が撮影した写真が見れるように、<br />
              只今準備中です。
            </div>
            <Link to="/">
              <div className="back-button">
                  BACK
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Photograph;
