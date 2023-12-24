//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainPage from "./components/MainPage";
import CatalogPage from "./components/CatalogPage.js"
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />}/>
          <Route path="catalog" element={<CatalogPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
      <AppFooter />
    </div>
  );
}
//      <MainPage />
export default App;
