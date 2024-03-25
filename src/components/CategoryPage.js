import ProductCard from "@components/UI/ProductCard";
import CatalogFilter from "@components/UI/CatalogFilter";
import LoadingPage from "@components/LoadingPage";
import ErrorPage from "@components/ErrorPage";
//import productList from "@data/productList.json";
import { importImages } from "@functions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const [productList, setProduclList] = useState([]);
  const [imageImports, setImageImports] = useState([]);
  const [categoryParams, setCategoryParams] = useState({});
  const [priceRange, setPriceRange] = useState({ price_min: 0, price_max: 1 });
  const { pathname, search } = useLocation();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
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
      .then(({ data, filterProps, priceRange }) => {
        setImageImports(importImages(data));
        setCategoryParams(filterProps);
        setProduclList(data);
        setPriceRange(priceRange);
        console.log(data);
        console.log(filterProps);
      })
      .catch(e => {
        setError(true);
        console.error(e.message);
      })
      .then(() => setLoading(false));
  }, [category, search]);

  //const imageImports = importImages(productList);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;
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
      <div className="container catalog-body">
        <CatalogFilter params={categoryParams} priceRange={priceRange} />
        <div style={{
          gridColumnStart: 2,
          gridColumnEnd: 5,
        }}>
          <div className="filter-main" style={{ alignItems: "flex-start", border: "none" }}>
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
          <div className="catalog">

            {productList.map(
              product => <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={imageImports[product.img]}
              />
            )}
            {productList.length === 0 &&
              <h2 className="container" style={{ textTransform: "capitalize" }}>No reasults for your request</h2>}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;