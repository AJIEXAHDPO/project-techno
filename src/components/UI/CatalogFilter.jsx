import FilterSection from "./Filter/FilterSection";
import FilterPoint from "./Filter/FilterPoint";
//import searchData from "@data/filterProps.json";
import PriceRangebar from "./Filter/PriceRangebar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const CatalogFilter = ({ params, priceRange }) => {
  const { search } = useLocation();
  useEffect(() => {
    console.log('categoryParams:');
    console.log(params);
  }, [params]);

  const q = new URLSearchParams(search);
  const searchPropsList = Object.keys(params).map((key) => {
    let checkedParamsCount = 0;
    const isAQueryProp = q.has(key);

    const paramsList = params[key]
      .filter((elem) => (isAQueryProp && !!q.getAll(key).find(el => elem.value === el)) || elem.count > 0)
      .map(
        (elem) => {
          const isChecked = isAQueryProp && !!q.getAll(key).find(el => elem.value === el);
          if (isChecked) checkedParamsCount++;
          return <FilterPoint
            name={key}
            value={elem.value}
            key={elem.value}
            checked={isChecked}
            count={elem.count}
          />
        });

    if (paramsList.length > 1 || checkedParamsCount > 0) return (
      <FilterSection title={key.replace(/_/g, " ")} key={key}>
        {paramsList}
      </FilterSection>
    );
    else return null;
  }).filter(elem => !!elem);

  return (
    <>
      <form className="filter">
        <PriceRangebar minPrice={priceRange["price_min"]} maxPrice={priceRange["price_max"]} />
        {searchPropsList}
        <div className="filter-main">
          <button className="apply-all">Apply All</button>
        </div>
      </form>
    </>
  );
}

export default CatalogFilter;