import React from 'react';
import SectionName from './SectionName';
import ProductItem from './ProductItem';
import '../../css/main/Product.css';


const Product = () => {
  const products = [
    {
      name: "Grumo",
      introduction: "寝坊を無くすための、複数人で使う目覚ましアプリ。寝坊した人にゲップの音などのアラームを送りつけて起こすことができる。３人チームで開発し、Railsでサーバーサイドの開発とロゴのデザインを行った。",
      image: "/images/grumo.png"
    },
    {
      name: "飯塚製麺所R注文管理システム",
      introduction: "学祭で飯塚製麺所Rというまぜそばのお店を出した時に、働くスタッフをサポートするために開発した。",
      image: "/images/isr.png",
      url: "https://iizukaseimenjo.herokuapp.com/"
    },
    {
      name: "UNKO NOW",
      introduction: "様々な言語で「うんこなう」を世界につぶやけるwebサービス。中学生の時に友達が「うんこなう」とつぶやいてたのを思い出したのが開発のきっかけ。",
      image: "/images/unkonow.png",
      url: "https://unkonow.herokuapp.com"
    }
  ]

  const items = products.map((product, index) => {
    return(
      <ProductItem key={index} product={product} />
    );
  })

  return(
    <div className="product">
      <SectionName section="Product"/>
      <div className="products">
        {items}
      </div>
    </div>
  );
}

export default Product;
