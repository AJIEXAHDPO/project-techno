import {useState} from "react";

const ProductInSearch = ({id: prodId, img, name: prodName, price})=> {
  
  return (
    <div id={prodId} className="container order-product-card">
      <div className="order-product-block">
        <img src={img} alt="product" className="order-product-photo" />
        <h3 className="order-product-name">{prodName}</h3>
      </div>
      <div className="order-product-block">
        <div className="product-price">{price}$</div>
      </div>
    </div>
  );
}



export default ProductInSearch;