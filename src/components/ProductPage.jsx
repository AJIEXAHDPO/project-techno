import ProductInfo from "@components/UI/ProdInfo";
import ProductPriceContainer from "@components/UI/ProductPriceContainer";
import "@components/ProductPage.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductFullInfo from "@components/UI/ProductFullInfo";
import ErrorPage from "@components/ErrorPage";
import { importImage } from "@functions";


const ProductPage = () => {
    const { search } = useLocation();
    const [prod, setProd] = useState({});
    const [prodDetails, setProdDetails] = useState({});
    const [img, setImg] = useState({});
    const [pageError, setPageError] = useState(false);
    const [content, setContent] = useState(prod.description);
    const [buttonActive, setButtonActive] = useState();

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
            .then(({ mainInfo, characteristics }) => {
                console.log(mainInfo);
                setImg(importImage(mainInfo.img));
                setProd(mainInfo);
                setProdDetails(characteristics);
                setContent(mainInfo.description);
            }).catch(e => setPageError(true))
    }, [search]);

    useEffect(() => {
        const targetBttn = buttonActive? 
            buttonActive: 
            document.querySelector(".prod-options-nav-bttn");
            //alert(targetBttn);
        targetBttn.classList.add("active");
        return ()=> {
            targetBttn.classList.remove("active");
        }
    }, [buttonActive, content]);

    if (pageError) return <ErrorPage />
    return (
        <>
            <h1 className="container product-title">{prod.name}</h1>
            <ul className="container product-nav">
                <li className="prod-nav-link"><a href="/">Home</a></li>
                <li className="prod-nav-link"><a href="/catalog">Catalog</a></li>
                <li className="prod-nav-link"><a href={`/catalog/${prod.category_qname}`}>{prod.category_name}</a></li>
                <li className="prod-nav-link"><span>{prod.name}</span></li>
            </ul>
            <div className="container">
                <div className="gallery">
                    <img className="slider-big-pic" alt="slider-big-pic" src={img} />
                </div>
                <ProductInfo info={prodDetails} />
                <div>
                    <ProductPriceContainer quantity={prod.quantity} price={prod.price} />
                    <div style={{ padding: "35px 0 0 35px", display: "flex", flexDirection: "row" }}>FAQ</div>
                    <div style={{ padding: "10px 0 0 35px", display: "flex", flexDirection: "row" }} 
                        className="blue-link">Return of Goods</div>
                    <div style={{ padding: "10px 0 0 35px", display: "flex", flexDirection: "row" }} 
                        className="blue-link">Shipping</div>
                </div>
            </div>
            <div className="container prod-options-nav">
                <button className="prod-options-nav-bttn"
                    onClick={(e) => {
                        setContent(prod.description);
                        setButtonActive(e.target);
                    }}>Description</button>

                <button className="prod-options-nav-bttn"
                    onClick={(e) => {
                        setContent(<ProductFullInfo info={prodDetails} />);
                        setButtonActive(e.target);
                    }}>Characteristics</button>

                <button className="prod-options-nav-bttn"
                    onClick={(e) => {
                        setContent(
                            <div style={{ textAlign: "center", width: 100 + "%" }}>
                                This product has no reviews yet!
                            </div>);
                        setButtonActive(e.target);
                    }}>Reviews</button>
            </div>
            <div className="container product-page-description">{content}</div>
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

