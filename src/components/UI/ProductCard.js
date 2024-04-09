function ProductCard(props) {
  return (
    <a className="product-card" href={`/product?id=${props.id}`}>
      <div className="product-photo-container">
        <img src={props.img} alt={props.name} className="product-photo" />
      </div>
      <div className="product-photo-filter"></div>
      <div>
        <div className="product-description">
          <div className="price">{props.price}{props.price < 1000 ? ".00" : ""} $</div>
          <div className="product-name">{props.name}</div>
          <div className="rating">
            <span>4.7</span>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
          <button className="buy-bttn-blue" style={{ width: "100%", borderRadius: "6px" }}>Add To Cart</button>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
//          <button className="add-to-cart"></button>