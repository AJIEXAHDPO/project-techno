import Menu from "@components/UI/Menu";
import SearchPanel from "@components/UI/Search/SearchPanel";
import { useState } from "react";
import closeIcon from "@images/Close.svg";

function AppHeader() {
  const [menuVisability, setMenuVisability] = useState(false);
  const [searchEnabled, setSearchEnabled] = useState(false);

  const currentUser = {
    name: "Guest",
    isLoggedIn: false,
  }

  const menu = <Menu closeCallback={setMenuVisability} />

  const search = <SearchPanel>
    <button
      onClick={() => setSearchEnabled(!setSearchEnabled)}
      className="menu-close-bttn">
      <img alt="" src={closeIcon}></img>
    </button>
  </SearchPanel>

  return (
    <>
      <header>
        <div className="container">
          <div className="header-section">
            <button className="menu-bttn" onClick={() => setMenuVisability(!menuVisability)}></button>
            <a className="store-logo" href="/">TECHNO</a>
          </div>
          <div className="header-section">
            <a className="standard-link" href="/catalog">Discounts</a>
            <a className="standard-link" href="/catalog">Catalog</a>
            <div className="standard-link">PC Builder</div>
            <button
              id="smart-search"
              onClick={() => setSearchEnabled(!searchEnabled)}>
              Search for Item
              <span className="search-bttn"></span>
            </button>
            <button className="login"><div>{(currentUser.isLoggedIn ?? false) ? "Profle" : "Log in"}</div></button>
            <a className="header-cart" href="/cart"><div>Cart</div></a>
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