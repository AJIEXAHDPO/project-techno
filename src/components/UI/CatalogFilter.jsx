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
          (elem) => <FilterPoint name={key} value={elem.value} count={elem.count} />
        )}
      </FilterSection>
    );
  }
  return (
    <>
      <form className="filter">
        <PriceRangebar minPrice={221} maxPrice={2000} />
        {searchPropsList}
        <div className="filter-main">
          <button className="apply-all">Apply All</button>
        </div>
      </form>
    </>
  );
}

export default CatalogFilter;