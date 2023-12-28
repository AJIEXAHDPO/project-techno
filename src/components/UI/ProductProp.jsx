import React from "react";
import "@components/UI/ProdProp.css";

const ProductProp = ({name, value}) => {
    return (
        <div className="product-prop">
            <div className="product-prop-name">{name}</div>
            <div className="product-prop-value">{value}</div>
        </div>
    );
};

export default ProductProp;