import { useState } from "react";

const ProductInCart = ({ id: prodId, img, name: prodName, price, quantity, total, setTotal }) => {
  const [prodQuantuty, setProdQuantuty] = useState(quantity);

  return (
    <div id={prodId} className="container order-product-card">
      <div className="order-product-block">
        <img src={img} alt="product" className="order-product-photo" />
        <h3 className="order-product-name">{prodName}</h3>
      </div>
      <div className="order-product-block">
        <div className="product-quantity">
          <button onClick={() => {
            if (prodQuantuty > 1) {
              setProdQuantuty(prodQuantuty - 1);
              setTotal(total - 1 * price);
            }
          }
          }>-</button>
          <input type="number" name="" id="" value={prodQuantuty} />
          <button onClick={() => {
              setProdQuantuty(prodQuantuty + 1);
              setTotal(total + 1 * price);
          }
          }>+</button>
        </div>
        <div className="product-price">{price * prodQuantuty}$</div>
      </div>
    </div>
  );
}



export default ProductInCart;