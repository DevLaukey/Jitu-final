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

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/" element={authenicated ? <App /> : <Login />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
=======
>>>>>>> fae1151db8f320d88c3c8af1a834731a2fa742ef
>>>>>>> a824972843311199d0f0090db45df74ee1591edf
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </Provider>
);
