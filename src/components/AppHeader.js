import Menu from "@components/UI/Menu";
import SearchPanel from "@components/UI/Search/SearchPanel";
import MainPage from "@components/MainPage";
import CartPage from "@components/CartPage";
import CatalogPage from "@components/CatalogPage";
import {useState} from "react";
import closeIcon from "@images/Close.svg";

function AppHeader({onClick}) {
  const [menuVisability, setMenuVisability] = useState(false);
  const [searchEnabled, setSearchEnabled] = useState(false);
  
  const currentUser = {
    name: "Guest",
    isLoggedIn: false,
  }
  
  const menu = <Menu>
    <button 
      onClick={()=> setMenuVisability(!menuVisability)}
      className="menu-close-bttn">
      <img src={closeIcon}></img>
    </button>
  </Menu>
  
  const search = <SearchPanel>
    <button 
      onClick={()=> setSearchEnabled(!setSearchEnabled)}
      className="menu-close-bttn">
      <img src={closeIcon}></img>
    </button>
  </SearchPanel>
  
  const setPageDisplaying = (page) => {
    onClick(page)
  }
  
  return (
    <>
      <header>
        <div className="container">
          <div className="header-section">
            <button className="menu-bttn" onClick={()=>setMenuVisability(!menuVisability)}></button>
            <button className="store-logo" onClick={()=> setPageDisplaying(<MainPage />)}>TECHNO</button>
          </div>
          <div className="header-section">
            <div className="standard-link" onClick={()=> setPageDisplaying(<CatalogPage />)}>Discounts</div>
            <div className="standard-link" onClick={()=> setPageDisplaying(<CatalogPage />)}>Catalog</div>
            <div className="standard-link">PC Builder</div>
            <input
              type="search"
              name=""
              id="smart-search"
              value=""
              placeholder="Search for Item"
              onClick={()=>setSearchEnabled(!searchEnabled)}
            />
            <button className="search-bttn"></button>
            <button className="login"><div>{(currentUser.isLoggedIn ?? false)?"Profle":"Log in"}</div></button>
            <button className="header-cart" onClick={()=> setPageDisplaying(<CartPage />)}><div>Cart</div></button>
            <button className="options"></button>
          </div>
        </div>
      </header>
      {menuVisability && menu}
      {searchEnabled && search}
    </>
  );
}

export default AppHeader;