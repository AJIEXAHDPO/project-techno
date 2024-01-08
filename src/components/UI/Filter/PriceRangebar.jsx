import { useEffect, useState } from "react";

const PriceRangebar = ({ minPrice, maxPrice }) => {
    const rangebarWidth= 260;
    const [priceMin, setPriceMin] = useState(minPrice);
    const [priceMax, setPriceMax] = useState(maxPrice);
    const [thumb1Position, setThumb1Position] = useState(0);
    const [thumb2Position, setThumb2Position] = useState(rangebarWidth - 7);

    useEffect(() => {
        const promise1 = new Promise(resolve => resolve());
        const promise2 = new Promise(resolve => resolve());
        const intervalElem = document.querySelector(".rangebar-interval");
        const intervalWidth = thumb2Position - thumb1Position;
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
    }, [thumb1Position, thumb2Position]);
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
                                setPriceMin(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth - 7) * calculatedPosition));
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
                                setPriceMin(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth - 7) * calculatedPosition));
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
                                if (calculatedPosition > rangebarWidth - 7) calculatedPosition = rangebarWidth - 7;
                                else if (calculatedPosition < thumb1Position + 7) calculatedPosition = thumb1Position + 7;
                                setThumb2Position(calculatedPosition);
                                setPriceMax(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth - 7) * calculatedPosition));
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
                                if (calculatedPosition > rangebarWidth - 7) calculatedPosition = rangebarWidth - 7;
                                else if (calculatedPosition < thumb1Position + 7) calculatedPosition = thumb1Position + 7;
                                setThumb2Position(calculatedPosition);
                                setPriceMax(Math.trunc(minPrice + (maxPrice - minPrice) / (rangebarWidth - 7) * calculatedPosition));
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
                        onChange={e => setPriceMin(e.target.value)}
                        name="price-min"
                        value={priceMin}
                    />
                    <input
                        type="number"
                        className="price-max"
                        onChange={e => setPriceMax(e.target.value)}
                        name="price-max" value={priceMax}
                    />
                </div>
            </div>
        </div>
    );
}

export default PriceRangebar;