const ProductInSearch = ({ id: prodId, img, name: prodName, price }) => {

  return (
    <a id={prodId} href={`/product?id=${prodId}`} className="container search-product-card">
      <img src={img} alt="product" className="order-product-photo" />
      <h3 className="order-product-name">{prodName}</h3>
      <div className="product-price">{price}$</div>
    </a>
  );
}



export default ProductInSearch;