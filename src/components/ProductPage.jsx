import ProductInfo from "@components/UI/ProdInfo";
import ProductPriceContainer from "./UI/ProductPriceContainer";
import "./ProductPage.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
//import { ErrorPage } from "@components/ErrorPage";


const ProductPage = () => {
    const { search } = useLocation();
    const [prod, setProd] = useState({});
    const [prodDetails, setProdDetails] = useState({});
    const [img, setImg] = useState({});
    const [pageError, setPageError] = useState(false);

    useEffect(() => {
        console.log(`http://localhost:8000/product${search}`);
        fetch(`http://localhost:8000/product${search}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=UTF8",
            }
        })
            .then(response => response.json())
            .then(({mainInfo, characteristics}) => {
                console.log(mainInfo);
                setImg(require(`@images/${mainInfo.img}`));
                setProd(mainInfo);
                setProdDetails(characteristics);
            }).catch(e => setPageError(true))
    }, [search]);

    if (pageError) return (
        <div style={{ height: 100 + "vh" }}>
            <h1>Page not found</h1>
            <a className="container" href="/">Back to Main</a>
        </div>
    );
    return (
        <>
            <h1 className="container product-title">{prod.name}</h1>
            <div className="container product-nav">
                <a className="prod-nav-link" href="/">Home</a>
                <a className="prod-nav-link" href="/catalog">Catalog</a>
                <a className="prod-nav-link" href="/catalog">Laptops</a>
                <span className="prod-nav-link">{prod.name}</span>
            </div>
            <div className="container">
                <div className="gallery">
                    <img className="slider-big-pic" alt="slider-big-pic" src={img} />
                </div>
                <ProductInfo info={prodDetails}/>
                <ProductPriceContainer quantity={prod.quantity} price={prod.price} />
            </div>
            <div className="container prod-options-nav">
                <button className="prod-options-nav-bttn active">Description</button>
                <button className="prod-options-nav-bttn">Characteristics</button>
                <button className="prod-options-nav-bttn">Reviews</button>
            </div>
            <div className="container product-page-description">{prod.description}</div>
        </>
    );
}
/*<style>
    .product-container {
        display: flex;
    flex-direction: column;
}


</style>*/
export default ProductPage;

