import React from "react";
import ProductProp from "@components/UI/ProductProp";
import "@components/UI/ProdInfo.css";
const ProductInfo = () => {
    return (
        <div className="info">
            <div className="colors">
                <button className="color2">Gray</button>
                <button className="color1">Silver</button>
            </div>
            <ProductProp name="SSD" value="1 TB" />
            <ProductProp name="RAM" value="16GB" />
            <ProductProp name="CPU" value="Intel Core i7 19500U" />
            <ProductProp name="OS" value="Windows 11 Pro" />
            <ProductProp name="Screen" value="1920x1080" />
            <ProductProp name="Battarey" value="4h" />
            <ProductProp name="GPU" value="Intel Iris XE Graphics" />
            <div className="show-full">Show Full Characteristics</div>
        </div>
    );
};

export default ProductInfo;