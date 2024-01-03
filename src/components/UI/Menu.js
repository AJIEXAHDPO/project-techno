import { useEffect } from "react";

function Menu(props) {
  useEffect(()=> {
    fetch("http://localhost:8000/catalog", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=UTF8 "
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  })
  return (
    <div style={{ transition: "width 3s" }} className="dropdown-menu-background">
      <div className="dropdown-menu catalog-font">
        {props.children}
        <div className="catalog-menu-point">
          <div  className="catalog-menu-point-header gray">CATEGORY</div>
          <div  className="catalog-menu-point-list unfolded">
            <a href="/catalog/monitors" className="catalog-menu-point-item">Monitors</a>
            <a href="/catalog/laptops" className="catalog-menu-point-item">Laptops</a>
            <a href="/catalog/phone" className="catalog-menu-point-item">Smartphone</a>
            <a href="/catalog/tabs" className="catalog-menu-point-item">Tabs</a>
            <a href="/catalog/monitors" className="catalog-menu-point-item">Headphones</a>
          </div>
        </div>
        <div className="catalog-menu-point">
          <div className="catalog-menu-point-header">About</div>
        </div>
        <div className="catalog-menu-point">
          <div className="catalog-menu-point-header">Search</div>
        </div>
        <div className="catalog-menu-point">
          <div className="catalog-menu-point-header">Pc builder</div>
        </div>
        <div className="catalog-menu-point">
          <div className="catalog-menu-point-header">Log in</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
