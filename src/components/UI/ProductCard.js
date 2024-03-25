function ProductCard(props) {
  return (
    <a className="product-card" href={`/product?id=${props.id}`}>
      <div className="product-photo-container">
        <img src={props.img} alt={props.name} className="product-photo" />
      </div>
      <div className="product-photo-filter"></div>
      <div className="product-description">
        <div className="product-name">{props.name}</div>
        <div className="rating">
          <span>rating</span>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="price">{props.price}{props.price< 100? ".00": ""} $</div>
      </div>
    </a>
  );
}

export default ProductCard;
//          <button className="add-to-cart"></button>