import React from 'react';
import '../../css/main/SectionName.css'

const SectionName = (props) => {
  return(
    <div className="section-name">
      <div className="section">
        {props.section}
      </div>
      <div className="under-line"></div>
    </div>
  );
}

export default SectionName;
