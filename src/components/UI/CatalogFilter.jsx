const CatalogFilter = (props) => {
  return (
    <>
      <h1 class="container">Laptops</h1>
    
      <div class="container filter">
        <button class="catalog-bttn">Categories</button>
        <div class="filter-section price-rangebar">
          <h3 class="filter-point">Price</h3>
          <div class="range">
            <div class="rangebar-track">
              <div class="rangebar-thumb r1"></div>
              <div class="rangebar-interval"></div>
              <div class="rangebar-thumb r2"></div>
            </div>
            <div class="price-range">
              <div class="price-min">220&#36;</div>
              <div class="price-max">2000&#36;</div>
            </div>
          </div> 
        </div>
        <div class="filter-section" style={{width: 260+"px"}}>
          <h3 class="filter-point">RAM</h3>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">4 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">16 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">6 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">8 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">32 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">64 GB</label></div>
        </div>
        <div class="filter-section" style={{width: 260+"px"}}>
          <h3 class="filter-point">SSD</h3>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">128 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">256 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">512 GB</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">1 TB</label></div>
        </div>
        <div class="filter-section">
          <h3 class="filter-point">Screen</h3>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">1920 x 1080</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">2560 x 1440</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">1366 x 768</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">1600 x 900</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">1280 x 720</label></div>
          <div class="filter-point"><input type="checkbox" name="" id="" /><label for="">3840 x 2160</label></div>
        </div>
        <div class="filter-main">
          <div>
            <button class="sort-by">Sort By</button>
            <select name="" id="" class="sort-by">
              <option value="Price Desc">Price ▼</option>
              <option value="Price Asc">Price ▲</option>
              <option value="Name">Name</option>
            </select>
          </div>
          <div>
            <span class="more-params">More Parameters</span>
            <button class="apply-all">Apply All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatalogFilter;