function Menu(props) {
  return (
    <div style={{transition: "width 3s"}} className="dropdown-menu-background">
      <div className="dropdown-menu catalog-font">
        {props.children}
        <div className="catalog-menu-point">
          <div className="catalog-menu-point-header gray">CATEGORY</div>
          <div className="catalog-menu-point-list unfolded">
            <button className="catalog-menu-point-item">
              Monitors
            </button>
            <button className="catalog-menu-point-item">
              Laptops
            </button>
            <button className="catalog-menu-point-item">
              Smartphone
            </button>
            <button className="catalog-menu-point-item">
              Tabs
            </button>
            <button className="catalog-menu-point-item">
              Headphones
            </button>
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
