function ProductCard(props) {
  return (
    <div className="product-card" id={props.id}>
      <img src={props.img} alt={props.name} className="product-photo" />
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
        <div className="price">{props.price}$</div>
      </div>
    </div>
  );
}

export default ProductCard;
//          <button className="add-to-cart"></button>