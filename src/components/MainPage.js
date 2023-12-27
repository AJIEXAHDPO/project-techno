import ProductCard from "@components/UI/ProductCard";
import AdPoster from "@components/UI/AdPoster";
import Container from "@components/UI/Container";
import { importImages } from "@functions";
import { useState, useEffect } from "react";

function MainPage() {
  const [brands, setBrands] = useState([]);
  const [brandImports, setBrandImports] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:8000/brands/", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=UTF8",
        }
      })
      .then(response => response.json())
      .then(data => {
        setBrandImports(importImages(data));
        setBrands(data);
        console.log(data);
      })
    }, []);

  const discounts = [
    { id: 1, name: "Adapter usb-c to usb-a", price: 7, img: "14hq.jpeg" },
    { id: 2, name: "Optical Mouse Razer deathadder", price: 220, img: "bd9d7ae69542c1e44e2a2be0710bd715.jpg" },
    { id: 3, name: "Laptop Dell u34678ME i7 12700U", price: 7500, img: "belmsru_ytntbi2rsffedylnym8b_1643617906.jpg" },
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
  
  return (
    <>
      <div className="promo">
        <div className="promo-text">Enchance your perfomance with RTX</div>
        <div className="promo-link">Go store</div>
      </div>

      <Container 
        title="Daily discounts" 
        className="offers">
        <button className="back"></button>
        {discounts.map(
          (product)=> 
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              img={imageImports[product.img]}
            />)}
        <button className="forward"></button>
      </Container>

      <Container 
        className="banners"
        title="Companies we are working with">
        {posters.map(
          (banner)=> 
            <AdPoster
              id={banner.id}
              headerText={banner.headerText}
              innerText={banner.innerText}
            />)}
      </Container>

      <Container 
        title="Companies we are working with" 
        className="logos">
        {brands.map(
          (brand)=> <img className="logo" src={brandImports[brand.img]} alt={brand.name}></img>)}
      </Container>
    </>
  );
}

export default MainPage;
