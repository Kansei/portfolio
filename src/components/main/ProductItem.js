import React from 'react';
import '../../css/main/ProductItem.css';

const ProductItem = (props) => {
  return(
    <div className="product-item">
      <div className="product-image">
        <img src={props.product["image"]} alt={props.product["name"]}/>
      </div>
      <div className="product-text">
        <div className="product-name">
        <a href={props.product["url"]}>{props.product["name"]}</a>
        </div>
        <div className="product-introduction">
          {props.product["introduction"]}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
