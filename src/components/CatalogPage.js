import ProductCard from "@components/UI/ProductCard";
import CatalogFilter from "@components/UI/CatalogFilter"
//import productList from "@data/productList.json";
import {importImages} from "@functions";
import {useState, useEffect} from "react";

const CatalogPage = () => {
  const [productList, setProduclList] = useState([]);
  const [imageImports, setImageImports] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/catalog/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=UTF8",
      }
    })
    .then(response => response.json())
    .then(data => {
      setImageImports(importImages(data));
      setProduclList(data);
      console.log(data);
    })
  }, []);
  
  //const imageImports = importImages(productList);
  
  return (
  <> 
  <CatalogFilter />
  <div className="container catalog">
    {productList.map(
      product => <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        img={imageImports[product.img]}
      />
    )}
  </div>
  </>
  );
}

export default CatalogPage;