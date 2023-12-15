import {useState} from "react";
import ProductInCart from "./ProductInSearch";

const OrderList = require("@data/orderList.json");

const imageImports = {};
OrderList.forEach((elem)=> {
  imageImports[elem.img] = require(`../../../img/${elem.img}`);
});


const SearchPanel = (props)=> {
  const [inputText, setInputText] = useState("");
  
  const filterResults = (list, template)=> {
    const result = list.filter(
      (elem)=> elem.name.indexOf(template) > -1
    ).map((elem)=> <ProductInCart 
        id={elem.id}
        price={elem.price} 
        name={elem.name}
        img={imageImports[elem.img]}/>);
    if (result.length === 0) {
      return <div style={{textAlign: "center", width: 100+"%"}}>No results for "{template}"</div>;
    }
    return result;
  }
  
  const results = filterResults(OrderList, inputText);
  
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