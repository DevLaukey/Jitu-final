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

const root = ReactDOM.createRoot(document.getElementById("root"));
const authenicated = true;

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={authenicated ? <App /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </Provider>
);
