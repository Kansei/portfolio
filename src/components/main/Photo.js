import React from 'react';
import Section from './Section'
import { Link } from 'react-router-dom'
import '../../css/main/Photo.css'

const Photo = (props) => {
  const photo = (
    <div className="photo">
      <div className="photo-text">
        写真が好きです。<br/>
        なんてことない写真を撮っています。<br/>
        最近は姪っ子と甥っ子を撮るのが楽しいです。
      </div>
      <div className="photo-more">
        <Link to="/photograph"><div className="more-button">MORE</div></Link>
      </div>
    </div>
  );

  return (
    <div id={props.id}>
      <Section name="Photo" content={photo} />
    </div>
  );
}

export default Photo;
