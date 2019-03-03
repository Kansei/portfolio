import React from 'react'
import SectionName from './SectionName'
import CarrerItem from './CarrerItem'
import '../../css/main/Carrer.css'

const Carrer = () => {
  const carrer = [
    { date: "1996/12/27",
      event: ["福岡県飯塚市で生を受ける"] },
    { date: "1996 - 2012",
      event: ["元気に育つ"]},
    { date: "2012/4 - 2015/3",
      event: ["福岡県立嘉穂東高等学校"]},
    { date: "2015/4 - 2019/3",
      event: ["九州工業大学 生命情報工学科"] },
    { date: "2019/4 -",
      event: ["九州工業大学大学院 学際情報工学専攻"]},
    { date: "2018/5 -",
      event: ["Haw International アルバイト"] },
    { date: "2018/9 -",
      event: ["LifeIsTechメンター"] },
    ]

    const items = carrer.map((item, index) => {
      return(
        <CarrerItem key={index} date={item["date"]} event={item["event"]}/>
      )
    })

  return(
    <div className="carrer">
      <SectionName section="Carrer" />
      <div className="carrer-items">
        {items}
      </div>
    </div>
  );
}

export default Carrer;
