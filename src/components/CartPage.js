import ProductInCart from "@components/UI/ProductInCart";
import { useState } from "react";
import {importImages} from "@functions";
const orderList = require("@data/orderList.json");

const imageImports = importImages(orderList);

const CartPage = ()=> {
  const [total, setTotal] = useState(orderList.reduce((acc, elem)=>acc+elem.price*elem.quantity, 0));
  return (
  <>
    <h1 className="container">Shopping cart</h1>
    <div className="container order">
      {orderList.map((elem)=> <ProductInCart 
        id={elem.id}
        price={elem.price} 
        quantity={elem.quantity}
        name={elem.name}
        img={imageImports[elem.img]}
        total={total}
        setTotal={setTotal}
      />
      )}
    </div>
    <div className="order-totals container">
      <h1>TOTAL</h1>
      <h1 className="order-sum">{total}$</h1>
    </div>
    <h1 className="container">+1(400)-555-35-35</h1>
    <button className="container order-bttn">Make an order</button>
  </>
  );
}

export default CartPage;