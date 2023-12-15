import ProductCard from "@components/UI/ProductCard";
import CatalogFilter from "@components/UI/CatalogFilter"
import productList from "@data/productList.json";
import {importImages} from "@functions";

const CatalogPage = () => {
  const imageImports = importImages(productList);
  
  return (
  <> 
  <CatalogFilter />
  <div class="container catalog">
    {productList.map(
      product => <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        img={imageImports[product.img]}
      />
    )}
  </div>
  </>
  );
}

export default CatalogPage;