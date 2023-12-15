import {useState} from "react";

const ProductInCart = ({id: prodId, img, name: prodName, price, quantity})=> {
  const [prodQuantuty, setProdQuantuty] = useState(quantity);
  
  return (
    <div id={prodId} className="container order-product-card">
      <div className="order-product-block">
        <img src={img} alt="product" className="order-product-photo" />
        <h3 className="order-product-name">{prodName}</h3>
      </div>
      <div className="order-product-block">
        <div className="product-quantity">
          <button onClick={()=>setProdQuantuty(prodQuantuty-1)}>-</button>
          <input type="number" name="" id="" value={prodQuantuty} />
          <button onClick={()=>setProdQuantuty(prodQuantuty+1)}>+</button>
        </div>
        <div className="product-price">{price}$</div>
      </div>
    </div>
  );
}



export default ProductInCart;