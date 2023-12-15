import ProductCard from "@components/UI/ProductCard";
import * as brands from "@components/brands";
import AdPoster from "@components/UI/AdPoster";
import Container from "@components/UI/Container"

function MainPage() {
  const discounts = [
    { id: "prod1", name: "Adapter usb-c to usb-a", price: 7, img: "14hq.jpeg" },
    { id: "prod2", name: "Optical Mouse Razer deathadder", price: 220, img: "bd9d7ae69542c1e44e2a2be0710bd715.jpg" },
    { id: "prod3", name: "Laptop Dell u34678ME i7 12700U", price: 7500, img: "belmsru_ytntbi2rsffedylnym8b_1643617906.jpg" },
  ];
  
  const placeholder = require("@images/14hq.jpeg");
  const imageImports = {};
  discounts.forEach((elem)=> {
    imageImports[elem.img] = elem.img? require(`@images/${elem.img}`): placeholder;
  });
  
  const posters = [
    {id: "banner1", headerText: "Premium Devices", innerText: "iPhone 12Pro\n at an affordable price",},
    {id: "banner2", headerText: "Build your PC", innerText: "Create optimal pc for youself with our support and price calculators.",},
    {id: "banner3", headerText: "JBL 30% OFF", innerText: "Sound you can touch",},
    {id: "banner4", headerText: "MacBook Air", innerText: "Perfect sollution for designers",},
  ];
  
  const Brands = () => brands.map(
    (brand)=> <img className="logo" src={brand.src} alt={brand.name}></img>);

  const DiscountsList = ()=> discounts.map(
    (product)=> 
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        img={imageImports[product.img]}
      />
  );

  const AdPosters = () => posters.map(
    (banner)=> 
      <AdPoster
        id={banner.id}
        headerText={banner.headerText}
        innerText={banner.innerText}
      />
  );
  
  return (
    <>
      <div className="promo">
        <div class="promo-text">Enchance your perfomance with RTX</div>
        <div class="promo-link">Go store</div>
      </div>

      <Container 
        title="Daily discounts" 
        className="offers">
        <button className="back"></button>
          <DiscountsList />
        <button className="forward"></button>
      </Container>

      <Container 
        className="banners"
        title="Companies we are working with">
        <AdPosters />
      </Container>

      <Container 
        title="Companies we are working with" 
        className="logos">
        <Brands />
      </Container>
    </>
  );
}

export default MainPage;
