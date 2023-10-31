import ProductInCart from "./UI/ProductInCart";

const OrderList = [
  {id: 1, name: "Product full name", img: "air13.jpg", price: 220, quantity: 2},
  {id: 2, name: "Product full name", img: "bd9d7ae69542c1e44e2a2be0710bd715.jpg", price: 220, quantity: 2},
  {id: 3, name: "Product full name", img: "6219718788.jpg", price: 220, quantity: 2},
  {id: 4, name: "Product full name", img: "6470407044.jpg", price: 220, quantity: 2},
];

const imageImports = {};
OrderList.map((elem)=> {
  imageImports[elem.img] = require(`../img/${elem.img}`);
});

const CartPage = ()=> {
  return (
  <>
    <h1 className="container">Shopping cart</h1>
    <div className="container order">
      {OrderList.map((elem)=> <ProductInCart 
        id={elem.id}
        price={elem.price} 
        quantity={elem.quantity}
        name={elem.name}
        img={imageImports[elem.img]}
      />
      )}
    </div>
    <div className="order-totals container">
      <h1>TOTAL</h1>
      <h1 className="order-sum">{
        OrderList.reduce((acc, elem)=>acc+elem.price*elem.quantity, 0)
      }$
      </h1>
    </div>
    <h1 className="container">+1(400)-555-35-35</h1>
    <button className="container order-bttn">Make an order</button>
  </>
  );
}

export default CartPage;