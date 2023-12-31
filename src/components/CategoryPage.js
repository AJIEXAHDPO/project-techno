import ProductCard from "@components/UI/ProductCard";
import CatalogFilter from "@components/UI/CatalogFilter"
//import productList from "@data/productList.json";
import { importImages } from "@functions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const [productList, setProduclList] = useState([]);
  const [imageImports, setImageImports] = useState([]);
  const { pathname, search } = useLocation();
  const category = pathname.replace("/catalog/", "");
  console.log(category);
  useEffect(() => {
    fetch(`http://localhost:8000/catalog/${category}${search}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=UTF8",
      }
    }, [search])
      .then(response => response.json())
      .then(data => {
        setImageImports(importImages(data));
        setProduclList(data);
        console.log(data);
      })
  }, [category, search]);

  //const imageImports = importImages(productList);

  return (
    <>
      <ul className="container product-nav">
        <li className="prod-nav-link"><a href="/">Home</a></li>
        <li className="prod-nav-link"><a href="/catalog">Catalog</a></li>
        <li className="prod-nav-link"><a href={`/catalog/${category}`}>{category}</a></li>
      </ul>
      <h1 className="container" style={{
        width: "1140px",
        marginBottom: "20px",
        borderBottom: "1px solid #d9d9d9",
        paddingBottom: "10px",
      }}>
        {`${category.replace(/_/g, " ")} (${productList.length} product${productList.length !== 1 ? "s" : ""})`}
      </h1>
      <div className="container">
        <CatalogFilter />
        <div className="catalog">

          <div className="filter-main container" style={{ alignItems: "flex-start", border: "none" }}>
            <div>
              <button className="sort-by">Sort By</button>
              <select name="" id="" className="sort-by">
                <option value="Price Desc">Price ▼</option>
                <option value="Price Asc">Price ▲</option>
                <option value="Name">Name</option>
              </select>
            </div>
            <div>
              <span className="more-params">More Parameters</span>
              <button className="apply-all">Apply All</button>
            </div>
          </div>
          {productList.map(
            product => <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              img={imageImports[product.img]}
            />
          )}
          {productList.length === 0 &&
            <h2 className="container" style={{textTransform: "capitalize"}}>No reasults for your request</h2>}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;