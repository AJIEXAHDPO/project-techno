//import logo from './logo.svg';
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainPage from "./components/MainPage";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainPage />
      <AppFooter />
    </div>
  );
}
//      <MainPage />
export default App;
