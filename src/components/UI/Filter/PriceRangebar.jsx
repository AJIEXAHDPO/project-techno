import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PriceRangebar = ({ minPrice, maxPrice }) => {
    const [rangebarWidth, setRangebarWidth] = useState(0);
    // const rangebarWidth = 260;
    const { search } = useLocation();
    const q = new URLSearchParams(search);
    const currentMax = q.get("price-max");
    const currentMin = q.get("price-min");
    const [priceMin, setPriceMin] = useState(currentMin ?? minPrice);
    const [priceMax, setPriceMax] = useState(currentMax ?? maxPrice);
    const [thumb1Position, setThumb1Position] = useState(rangebarWidth / (maxPrice - minPrice) * (priceMin - minPrice));
    const [thumb2Position, setThumb2Position] = useState(rangebarWidth / (maxPrice - minPrice) * (priceMax - minPrice));

    useEffect(() => {
        setRangebarWidth(document.querySelector(".rangebar-track").clientWidth - 14);
    }, [])

    useEffect(() => {
        let min = currentMin ?? minPrice;
        let max = currentMax ?? maxPrice;
        if (currentMin && (currentMin > maxPrice)) min = maxPrice; // setPriceMin(maxPrice);
        if (currentMin && (currentMin < minPrice)) min = minPrice; // setPRiceMin(minPrice);
        if (currentMax && (currentMax > maxPrice)) max = maxPrice; // setPriceMax(maxPrice);
        if (currentMax && (currentMax < minPrice)) max = minPrice; // setPriceMax(minPrice);

        setPriceMin(min);
        setPriceMax(max);
        console.log("currentMin: ", currentMin);
        console.log("maxPrice: ", maxPrice)
        console.log(`thumb1Prosition = ${rangebarWidth} / (${maxPrice} - ${minPrice}) * (${min}) - ${minPrice}`);

        if (maxPrice === minPrice) {
            setThumb1Position(0);
            setThumb2Position(rangebarWidth);
        }
        else {
            setThumb1Position(rangebarWidth / (maxPrice - minPrice) * ((min) - minPrice));
            setThumb2Position(rangebarWidth / (maxPrice - minPrice) * ((max) - minPrice));
        }
    }, [minPrice, maxPrice, rangebarWidth, currentMin, currentMax])

    useEffect(() => {
        console.log(`priceMin: ${priceMin}`);
        console.log(`priceMax: ${priceMax}`);
        console.log(`thumb 1 position: ${thumb1Position}`);
        console.log(`thumb 2 position: ${thumb2Position}`);
        const promise1 = new Promise(resolve => resolve());
        const promise2 = new Promise(resolve => resolve());
        const intervalElem = document.querySelector(".rangebar-interval");
        const intervalWidth = thumb2Position - thumb1Position;
        console.log("intervalWidth: ", intervalWidth);
        promise1
            .then(() => document.querySelector(".r1"))
            .then(thumb1 => thumb1.style.left = `${thumb1Position}px`);
        promise2
            .then(() => document.querySelector(".r2"))
            .then(thumb2 => {
                thumb2.style.left = thumb2Position + "px";
                intervalElem.style.left = `${thumb1Position}px`;
                intervalElem.style.width = `${intervalWidth}px`;
            });
    }, [thumb1Position, thumb2Position, priceMin, priceMax]);
    return (
        <div className="filter-section price-rangebar">
            <h3 className="filter-point">Price</h3>
            <div className="range">
                <div className="rangebar-track">
                    <div
                        className="rangebar-thumb r1"
                        onMouseDown={e => {
                            document.ondragstart = null;
                            const initialThumbPosition = e.pageX;
                            document.onmousemove = (event) => {
                                let calculatedPosition = thumb1Position + (event.pageX - initialThumbPosition);
                                if (calculatedPosition < 0) calculatedPosition = 0;
                                else if (calculatedPosition > thumb2Position - 7) calculatedPosition = thumb2Position - 7;
                                setThumb1Position(calculatedPosition);
                                setPriceMin(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth) * calculatedPosition));
                            }
                            document.onmouseup = () => {
                                document.onmousemove = null;
                                document.onmouseup = null;
                            }
                        }}
                        onTouchStart={e => {
                            document.ondragstart = null;
                            const initialThumbPosition = e.touches[0].pageX;
                            document.ontouchmove = (event) => {
                                let calculatedPosition = thumb1Position + (event.touches[0].pageX - initialThumbPosition);
                                if (calculatedPosition < 0) calculatedPosition = 0;
                                else if (calculatedPosition > thumb2Position - 7) calculatedPosition = thumb2Position - 7;
                                setThumb1Position(calculatedPosition);
                                setPriceMin(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth) * calculatedPosition));
                            }
                            document.ontouchend = () => {
                                document.ontouchmove = null;
                                document.ontouchend = null;
                            }
                        }}
                    ></div>
                    <div className="rangebar-interval"></div>
                    <div
                        className="rangebar-thumb r2"
                        onMouseDown={e => {
                            document.ondragstart = null;
                            const initialThumbPosition = e.pageX;
                            document.onmousemove = (event) => {
                                let calculatedPosition = thumb2Position + (event.pageX - initialThumbPosition);
                                if (calculatedPosition > rangebarWidth) calculatedPosition = rangebarWidth;
                                else if (calculatedPosition < thumb1Position + 7) calculatedPosition = thumb1Position + 7;
                                setThumb2Position(calculatedPosition);
                                setPriceMax(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth) * calculatedPosition));
                            }
                            document.onmouseup = () => {
                                document.onmousemove = null;
                                document.onmouseup = null;
                            }
                        }}
                        onTouchStart={e => {
                            document.ondragstart = null;
                            const initialThumbPosition = e.touches[0].pageX;
                            document.ontouchmove = (event) => {
                                let calculatedPosition = thumb2Position + (event.touches[0].pageX - initialThumbPosition);
                                if (calculatedPosition > rangebarWidth) calculatedPosition = rangebarWidth;
                                else if (calculatedPosition < thumb1Position + 7) calculatedPosition = thumb1Position + 7;
                                setThumb2Position(calculatedPosition);
                                setPriceMax(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth) * calculatedPosition));
                            }
                            document.ontouchend = () => {
                                document.ontouchmove = null;
                                document.ontouchend = null;
                            }
                        }}
                    ></div>
                </div>
                <div className="price-range">
                    <input
                        type="number"
                        className="price-min"
                        onChange={e => {
                            if (e.target.value > maxPrice) e.target.value = maxPrice;
                            if (e.target.value > priceMax) e.target.value = priceMax;
                            if (e.target.value < minPrice) e.target.value = minPrice;
                            setPriceMin(e.target.value);
                            setThumb1Position(rangebarWidth / (maxPrice - minPrice) * (e.target.value - minPrice));
                        }}
                        name="price-min"
                        min={0}
                        value={priceMin}
                    />
                    <input
                        type="number"
                        className="price-max"
                        onChange={e => {
                            if (e.target.value > maxPrice) e.target.value = maxPrice;
                            if (e.target.value < minPrice) e.target.value = minPrice;
                            if (e.target.value < priceMin) e.target.value = priceMin;
                            setPriceMax(e.target.value);
                            setThumb2Position(rangebarWidth / (maxPrice - minPrice) * (e.target.value - minPrice)) //
                        }}
                        name="price-max"
                        max={maxPrice}
                        value={priceMax}
                    />
                </div>
            </div>
        </div>
    );
}

export default PriceRangebar;