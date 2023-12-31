import React from "react";
import ProductProp from "@components/UI/ProductProp";
import "@components/UI/ProdInfo.css";
const ProductInfo = ({ info }) => {
    const prodProps = [];
    let i = 0;
    for (let name in info) {
        i++;
        prodProps.push(<ProductProp name={name} value={info[name]} />);
        if (i >= 7) break;
    }
    return (
        <div className="info">
            <div className="colors">
                <button className="color2">Gray</button>
                <button className="color1">Silver</button>
            </div>
            {prodProps}
            <div className="show-full">Show Full Characteristics</div>
        </div>
    );
};

export default ProductInfo;