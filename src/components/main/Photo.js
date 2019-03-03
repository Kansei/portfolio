import React from 'react';
import Section from './Section'
import { Link } from 'react-router-dom'
import '../../css/main/Photo.css'

const Photo = () => {
  const photo = (
    <div className="photo">
      <div className="photo-text">
         　写真が好きです。日常にあるちぐはぐなモノを見つけるのが得意です。主にモノクロでスナップ写真を撮ります。最近は姪っ子と甥っ子を撮っています。
      </div>
      <div className="photo-more">
        <Link to="/photo"><div className="more-button">MORE</div></Link>
      </div>
    </div>
  );

  return(
    <Section name="Photo" content={photo} />
  );
}

export default Photo;
