const ProductPriceContainer = ({ price, quantity }) => {
    return (
        <div className="frame">
            <div className="product-page-price">{price} $</div>
            <button className="buy-bttn-blue">Add To Cart</button>
            <button className="buy-bttn-gray">Buy one click</button>
            <div className="product-page-quantity">{quantity > 25 ? "In Stock" : `${quantity} left in Stock`}</div>
        </div>
    );
};

export default ProductPriceContainer;