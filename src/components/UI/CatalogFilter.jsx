const CatalogFilter = (props) => {
  return (
    <>
      <h1 className="container">Laptops</h1>
    
      <div className="container filter">
        <button className="catalog-bttn">Categories</button>
        <div className="filter-section price-rangebar">
          <h3 className="filter-point">Price</h3>
          <div className="range">
            <div className="rangebar-track">
              <div className="rangebar-thumb r1"></div>
              <div className="rangebar-interval"></div>
              <div className="rangebar-thumb r2"></div>
            </div>
            <div className="price-range">
              <div className="price-min">220&#36;</div>
              <div className="price-max">2000&#36;</div>
            </div>
          </div> 
        </div>
        <div className="filter-section" style={{width: 260+"px"}}>
          <h3 className="filter-point">RAM</h3>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">4 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">16 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">6 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">8 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">32 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">64 GB</label></div>
        </div>
        <div className="filter-section" style={{width: 260+"px"}}>
          <h3 className="filter-point">SSD</h3>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">128 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">256 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">512 GB</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">1 TB</label></div>
        </div>
        <div className="filter-section">
          <h3 className="filter-point">Screen</h3>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">1920 x 1080</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">2560 x 1440</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">1366 x 768</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">1600 x 900</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">1280 x 720</label></div>
          <div className="filter-point"><input type="checkbox" name="" id="" /><label htmlFor="">3840 x 2160</label></div>
        </div>
        <div className="filter-main">
          <div>
            <button className="sort-by">Sort By</button>
            <select name="" id="" className="sort-by">
              <option value="Price Desc">Price ▼</option>
              <option value="Price Asc">Price ▲</option>
              <option value="Name">Name</option>
            </select>
          </div>
          <div>
            <span className="more-params">More Parameters</span>
            <button className="apply-all">Apply All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatalogFilter;