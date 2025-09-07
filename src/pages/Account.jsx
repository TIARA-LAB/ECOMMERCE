import { Link, Routes, Route } from "react-router-dom";
import Profile from "../accounts/Profile";
import AddressBook from "../accounts/AddressBook";
import PaymentOptions from "../accounts/PaymentOption";
import Returns from "../accounts/Returns";
import Cancellations from "../accounts/Cancellations.jsx";
import Wish from "../accounts/WishList.jsx";

export default function Account() {
  const username =() => {
    const storedName = localStorage.getItem("username");
    return storedName ? storedName : "User";
  }
  return (
    <div className="account-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <span>My Account</span>
      </nav>
      <h3 className="welcome">Welcome,{username} ! </h3>
   

      <div className="account-content">
        
        <aside className="account-sidebar">
          <h4>Manage My Account</h4>
          <ul>
            <li><Link to="/accounts/profile">My Profile</Link></li>
            <li><Link to="/accounts/address-book">Address Book</Link></li>
            <li><Link to="/accounts/payment-options">My Payment Options</Link></li>
          </ul>

          <h4>My Orders</h4>
          <ul>
            <li><Link to="/accounts/returns">My Returns</Link></li>
            <li><Link to="/accounts/cancellations">My Cancellations</Link></li>
          </ul>

          <h4>My Wishlist</h4>
          <ul>
            <li><Link to="/accounts/wishList">My Wishlist</Link></li>
          </ul>
        </aside>

        
        <section className="account-main">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/address-book" element={<AddressBook />} />
            <Route path="/payment-options" element={<PaymentOptions />} />
            <Route path="/returns" element={<Returns />} />
             <Route path="/accounts/cancellations" element={<Cancellations />} />
            <Route path="/wishList" element={<Wish/>} />
          </Routes>
        </section>
      </div>
    </div>
  );
}
