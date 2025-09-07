import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Components
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";


// Accounts
import Cancellations from "./accounts/Cancellations.jsx";
import WishList from "./accounts/WishList.jsx";
import Return from "./accounts/Returns.jsx";
import AddressBook from "./accounts/AddressBook.jsx";
import PaymentOption from "./accounts/PaymentOption.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="*" element={<NotFound />} />
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />

          
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />

          
          <Route path="/accounts/wishlist" element={<WishList />} />
          <Route path="/accounts/cancellations" element={<Cancellations />} />
          <Route path="/accounts/returns" element={<Return />} />
          <Route path="/accounts/address-book" element={<AddressBook />} />
          <Route path="/accounts/payment-option" element={<PaymentOption />} />

          
          
        </Routes>

        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
