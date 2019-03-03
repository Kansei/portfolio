import React from 'react';
import '../../css/main/Section.css'

const Section = (props) => {
  return(
    <div className="section">
      <div className="section-name">
          {props.name}
        <div className="under-line"></div>
      </div>
      <div className="section-contents">
        {props.content}
      </div>
    </div>
  );
}

export default Section;
