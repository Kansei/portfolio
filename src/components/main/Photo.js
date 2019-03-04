import React from 'react';
import Section from './Section'
import { Link } from 'react-router-dom'
import '../../css/main/Photo.css'

const Photo = () => {
  const photo = (
    <div className="photo">
      <div className="photo-text">
         　写真が好きです。日常にあるちぐはぐなモノを見つけて撮っています。最近は姪っ子と甥っ子を撮っています。
      </div>
      <div className="photo-more">
        <Link to="/photograph"><div className="more-button">MORE</div></Link>
      </div>
    </div>
  );

  return(
    <Section name="Photo" content={photo} />
  );
}

export default Photo;