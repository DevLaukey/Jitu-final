import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Login from "./components/logins/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/logins/SignUp";
import AddProduct from "./components/admin/AddProduct";
import AddCategory from "./components/admin/AddCategory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/products/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>
);
