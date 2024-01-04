import { useState, useEffect } from "react";

function Menu(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    fetch("http://localhost:8000/catalog", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=UTF8 "
      }
    })
      .then(response => response.json())
      .then(data => setCategories(data));
      return ()=> body.style.overflow = "auto";
  }, [])
  return (
    <div style={{ transition: "width 3s" }} className="dropdown-menu-background">
      <div className="dropdown-menu catalog-font">
        {props.children}
        <div className="catalog-menu-point">
          <div className="catalog-menu-point-header gray">CATEGORY</div>
          <div className="catalog-menu-point-list unfolded">
            {categories.map(category =>
              <a href={`/catalog/${category.TableName}`} className="catalog-menu-point-item">
                {category.name}
              </a>)
            }
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
