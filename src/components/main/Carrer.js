import React from 'react';
import Section from './Section';
import CarrerItem from './CarrerItem';
import '../../css/main/Carrer.css';

const Carrer = (props) => {
  const carrers = [
    {
      date: "1996/12/27",
      event: ["福岡県飯塚市で生を受ける"]
    },
    {
      date: "1996 - 2012",
      event: ["元気に育つ"]
    },
    {
      date: "2012/4 - 2015/3",
      event: ["福岡県立嘉穂東高等学校"]
    },
    {
      date: "2015/4 - 2019/3",
      event: ["九州工業大学 生命情報工学科"]
    },
    {
      date: "2019/4 -",
      event: ["九州工業大学大学院 学際情報工学専攻"]
    },
    {
      date: "2018/5 -",
      event: ["Haw International アルバイト"]
    },
    {
      date: "2018/9 -",
      event: ["LifeIsTechメンター"]
    },
  ]

  const items = carrers.map((item, index) => {
    return (
      <CarrerItem key={index} date={item["date"]} event={item["event"]} />
    )
  })

  const carrer = (
    <div className="carrer">
      <div className="carrer-items">
        {items}
      </div>
    </div>
  );

  return (
    <div id={props.id}>
      <Section name="Carrer" content={carrer} />
    </div>
  );
}

export default Carrer;
