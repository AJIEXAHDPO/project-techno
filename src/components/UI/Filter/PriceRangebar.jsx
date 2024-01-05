import { useEffect, useState } from "react";

const PriceRangebar = ({ minPrice, maxPrice }) => {
    return (
        <div className="filter-section price-rangebar">
            <h3 className="filter-point">Price</h3>
            <div className="range">
                <div className="rangebar-track">
                    <div className="rangebar-thumb r1"></div>
                    <div className="rangebar-interval"></div>
                    <div className="rangebar-thumb r2"></div>
                </div>
                <div className="price-range">
                    <input className="price-min" name="price-min" value={minPrice} />
                    <input className="price-max" name="price-max" value={maxPrice} />
                </div>
            </div>
        </div>
    );
}

export default PriceRangebar;