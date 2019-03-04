import React from 'react'
import '../../css/main/CarrerItem.css'

const CarrerItem = (props) => {
  const events = props.event.map((event, index) => {
    return(
      <li key={index}>{event}</li>
    );
  })

  return(
    <div className="carrer-item">
      <div className="space"></div>
      <div className="date">
        {props.date}
      </div>
      <div className="event">
        <ul>
          {events}
        </ul>
      </div>
    </div>
  );
}

export default CarrerItem;
