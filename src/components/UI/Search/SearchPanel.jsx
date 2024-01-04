import { useState, useEffect } from "react";
import ProductInSearch from "./ProductInSearch";
import { importImages } from "@functions";

const SearchPanel = (props) => {
  const [inputText, setInputText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [imageImports, setImageImports] = useState([]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    fetch(`http://localhost:8000/catalog/laptops`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=UTF8",
      }
    })
      .then(response => response.json())
      .then((data) => {
        setImageImports(importImages(data));
        setSearchList(data);
      })
      return ()=> body.style.overflow = "auto";
  }, []);

  const filterResults = (list, template) => {
    const result = list.filter(
      (elem) => elem.name.indexOf(template) > -1
    ).map((elem) => <ProductInSearch
      id={elem.id}
      price={elem.price}
      name={elem.name}
      img={imageImports[elem.img]} />);
    if (result.length === 0) {
      return <div style={{ textAlign: "center", width: 100 + "%" }}>No results for "{template}"</div>;
    }
    return result;
  }

  const results = filterResults(searchList, inputText);

  const searchChangeHandler = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="dropdown-menu-background flex">
      <div className="search-panel">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 100 + "%" }}>
          <input type="text" placeholder="Search" className="input-search"
            onChange={searchChangeHandler} value={inputText} />
          {props.children}
        </div>
        {results}
      </div>
    </div>
  );
}

export default SearchPanel;