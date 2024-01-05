import FilterSection from "./Filter/FilterSection";
import FilterPoint from "./Filter/FilterPoint";
import searchData from "@data/filterProps.json";
import PriceRangebar from "./Filter/PriceRangebar";

const CatalogFilter = (props) => {
  const searchPropsList = [];
  for (let key in searchData) {
    searchPropsList.push(
      <FilterSection title={key}>
        {searchData[key].map(
          (elem) => <FilterPoint value={elem.value} count={elem.count} />
        )}
      </FilterSection>
    );
  }
  return (
    <>
      <h1 className="container">Laptops</h1>

      <form className="container filter">
        <select className="catalog-bttn">
          <option value="Laptops">laptops</option>
          <option value="Laptops">Mice</option>
        </select>
        <PriceRangebar minPrice={221} maxPrice={2000}/>
        {searchPropsList}
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
      </form>
    </>
  );
}

export default CatalogFilter;