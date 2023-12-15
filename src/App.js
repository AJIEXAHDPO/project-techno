//import logo from './logo.svg';
import "./App.css";
import {useState} from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainPage from "./components/MainPage";
import CatalogPage from "./components/CatalogPage.js"
//import CartPage from "./components/CartPage";

function App() {
  const [pageDisplaying, setPageDisplaying] = useState(<MainPage />);
  return (
    <div className="App">
      <AppHeader onClick={setPageDisplaying}/>
      {pageDisplaying}
      <AppFooter />
    </div>
  );
}
//      <MainPage />
export default App;
