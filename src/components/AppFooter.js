import SubscribeForm from "./SubscribeForm";
import InfoLinks from "./UI/InfoLinks";

function AppFooter() {
  const linksList1 = [
    { id: 1, name: "About", href: "", },
    { id: 2, name: "News", href: "", },
    { id: 3, name: "Partners", href: "", },
    { id: 4, name: "Jobs", href: "", },
    { id: 5, name: "Privacy Policy", href: "", },
    { id: 6, name: "Personal Information", href: "", },
    { id: 7, name: "Sales Rules", href: "", },
    { id: 8, name: "Website Terms of Use", href: "", },
    { id: 9, name: "Service centers", href: "", },
  ];

  const linksList2 = [
    { id: 1, name: "How to place an order", href: "", },
    { id: 2, name: "Payment Methods", href: "", },
    { id: 3, name: "Credits", href: "", },
    { id: 4, name: "Delivery", href: "", },
    { id: 5, name: "Order status", href: "", },
    { id: 6, name: "Exchange, return, guar", href: "", },
    { id: 7, name: "Checking Repair Status", href: "", },
  ];

  const linksList3 = [
    { id: 1, name: "For legal entities", href: "", },
    { id: 2, name: "Account verification", href: "", },
    { id: 3, name: "Corporate departments", href: "", },
    { id: 4, name: "Gift cards", href: "", },
    { id: 5, name: "bonus program", href: "", },
    { id: 6, name: "Help", href: "", },
    { id: 7, name: "Feedback", href: "", },
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
