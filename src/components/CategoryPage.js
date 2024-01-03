import ProductCard from "@components/UI/ProductCard";
import CatalogFilter from "@components/UI/CatalogFilter"
//import productList from "@data/productList.json";
import {importImages} from "@functions";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const [productList, setProduclList] = useState([]);
  const [imageImports, setImageImports] = useState([]);
  const {pathname} = useLocation();
  const category = pathname.replace("/catalog/", "");
  console.log(category);
  useEffect(() => {
    fetch(`http://localhost:8000/catalog/${category}`, {
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
  }, [category]);
  
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

export default CategoryPage;