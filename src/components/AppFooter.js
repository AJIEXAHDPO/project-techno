import SubscribeForm from "./SubscribeForm";
import InfoLinks from "./UI/InfoLinks";

function AppFooter() {
  const linksList1 = [
    {name: "About", href: "",},
    {name: "News", href: "",},
    {name: "Partners", href: "",},
    {name: "Jobs", href: "",},
    {name: "Privacy Policy", href: "",},
    {name: "Personal Information", href: "",},
    {name: "Sales Rules", href: "",},
    {name: "Website Terms of Use", href: "",},
    {name: "Service centers", href: "",},
  ];
  
  const linksList2 = [
    {name: "How to place an order", href: "",},
    {name: "Payment Methods", href: "",},
    {name: "Credits", href: "",},
    {name: "Delivery", href: "",},
    {name: "Order status", href: "",},
    {name: "Exchange, return, guar", href: "",},
    {name: "Checking Repair Status", href: "",},
  ];
  
  const linksList3 = [
    {name: "For legal entities", href: "",},
    {name: "Account verification", href: "",},
    {name: "Corporate departments", href: "",},
    {name: "Gift cards", href: "",},
    {name: "bonus program", href: "",},
    {name: "Help", href: "",},
    {name: "Feedback", href: "",},
  ];
  
  return (
    <footer>
      <div className="container">
        <div className="container">
          <div className="footer-column Company">
            <span className="footer-link-main">
              Company
            </span>
          </div>
          <div className="footer-column Customer">
            <span className="footer-link-main">
              Customer
            </span>
          </div>
          <div className="footer-column Contacts">
            <span className="footer-link-main">
              Contacts
            </span>
          </div>
        </div>
        <div className="container">
          <InfoLinks linksList={linksList1} />
          <InfoLinks linksList={linksList2} />
          <InfoLinks linksList={linksList3} />
          <div className="footer-column">
            <span className="number">
              +1(400)-555-35-35
            </span>
            <button className="standard-link">
              Shops in your city
            </button>
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <address>&copy; 2002–2023 TECHNO All Rights Reserved</address>
          <div className="Payment"></div>
          <div className="community">
            <div className="twitter"></div>
            <div className="facebook"></div>
            <div className="youtube"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
