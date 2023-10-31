function ProductCard(props) {
  return (
    <div className="product-card" id={props.id}>
      <img src={props.img} className="product-photo" />
      <div className="product-photo-filter"></div>
      <div className="product-description">
        <h3>{props.name}</h3>
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