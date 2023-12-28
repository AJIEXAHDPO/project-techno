import ProductInfo from "@components/UI/ProdInfo";
import ProductPriceContainer from "./UI/ProductPriceContainer";
import "./ProductPage.css";
//import img from "@images/belmsru_ytntbi2rsffedylnym8b_1643617906.jpg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
//import { ErrorPage } from "@components/ErrorPage";


const ProductPage = () => {
    const { search } = useLocation();
    const [prod, setProd] = useState([]);
    const [img, setImg] = useState([]);
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
            .then(([data]) => {
                console.log(data);
                setImg(require(`@images/${data.img}`));
                setProd(data);
            }).catch(e => setPageError(true))
    }, [search]);

    if (pageError) return <div style={{height: 100+"vh"}}><h1>404 PAge not found</h1></div>;
    return (
        <>
            <h1 className="container product-title">{prod.name}</h1>
            <div className="container product-nav">
                <a className="nav-item" href="/catalog">Catalog</a>
                <a className="nav-item" href="/catalog">Laptops</a>
                <span className="nav-item" >{prod.name}</span>
            </div>
            <div className="container">
                <div className="gallery">
                    <img className="slider-big-pic" alt="slider-big-pic" src={img} />
                </div>
                <ProductInfo />
                <ProductPriceContainer quantity={prod.quantity} price={prod.price} />
            </div>
            <div className="container product-page-description">{prod.dscription}</div>
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

