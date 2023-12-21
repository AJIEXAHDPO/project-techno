import {useState} from "react";
import ProductInSearch from "./ProductInSearch";
import {importImages} from "@functions";

const orderList = require("@data/orderList.json");

const imageImports = importImages(orderList);

const SearchPanel = (props)=> {
  const [inputText, setInputText] = useState("");
  
  const filterResults = (list, template)=> {
    const result = list.filter(
      (elem)=> elem.name.indexOf(template) > -1
    ).map((elem)=> <ProductInSearch 
        id={elem.id}
        price={elem.price} 
        name={elem.name}
        img={imageImports[elem.img]}/>);
    if (result.length === 0) {
      return <div style={{textAlign: "center", width: 100+"%"}}>No results for "{template}"</div>;
    }
    return result;
  }
  
  const results = filterResults(orderList, inputText);
  
  const searchChangeHandler = (e)=> {
    setInputText(e.target.value);
  }
  
  return (
    <div className="dropdown-menu-background flex">
      <div className="search-panel">
        <input type="text" placeholder="Search" className="input-search" 
          onChange = {searchChangeHandler} value={inputText}/>
        {props.children}
        {results}
      </div>    
    </div>
  );
}

export default SearchPanel;