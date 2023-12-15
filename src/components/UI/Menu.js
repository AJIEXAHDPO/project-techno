function Menu(props) {
  return (
    <div style={{transition: "width 3s"}} className="dropdown-menu-background">
      <div class="dropdown-menu catalog-font">
        {props.children}
        <div class="catalog-menu-point">
          <div class="catalog-menu-point-header gray">CATEGORY</div>
          <div class="catalog-menu-point-list unfolded">
            <button class="catalog-menu-point-item">
              Monitors
            </button>
            <button class="catalog-menu-point-item">
              Laptops
            </button>
            <button class="catalog-menu-point-item">
              Smartphone
            </button>
            <button class="catalog-menu-point-item">
              Tabs
            </button>
            <button class="catalog-menu-point-item">
              Headphones
            </button>
          </div>
        </div>
        <div class="catalog-menu-point">
          <div class="catalog-menu-point-header">About</div>
        </div>
        <div class="catalog-menu-point">
          <div class="catalog-menu-point-header">Search</div>
        </div>
        <div class="catalog-menu-point">
          <div class="catalog-menu-point-header">Pc builder</div>
        </div>
        <div class="catalog-menu-point">
          <div class="catalog-menu-point-header">Log in</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
