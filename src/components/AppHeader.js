import Menu from "./UI/Menu";
import {useState} from "react";

function AppHeader() {
  const [visability, setVisability] = useState(false);
  const [scrolledTop, setScrolledTop] = useState(0);
  
  const currentUser = {
    name: "Guest",
    isLoggedIn: false,
  }
  
  window.onscroll = ()=> setScrolledTop(window.pageYOffset);
  return (
    <>
      <header>
        <div className="container">
          <div className="header-section">
            <button className="menu-bttn" onClick={()=>setVisability(!visability)}></button>
            <div className="store-logo">TECHNO</div>
          </div>
          <div className="header-section">
            <div className="standard-link">About</div>
            <div className="standard-link">Catalog</div>
            <div className="standard-link">PC Builder</div>
            <input
              type="search"
              name=""
              id="smart-search"
              value=""
              placeholder="Search for Item"
            />
            <button className="search-bttn"></button>
            <button className="header-cart"><div>Cart</div></button>
            <button className="login"><div>{(currentUser.isLoggedIn ?? false)?"Profle":"Log in"}</div></button>
            <button className="options"></button>
          </div>
        </div>
      </header>
      <Menu visability={visability}/>
    </>
  );
}

export default AppHeader;
