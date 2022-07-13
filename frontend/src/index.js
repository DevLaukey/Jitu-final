import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Login from "./components/logins/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/logins/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authenicated = false;

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={authenicated ? <App /> : <Login />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </Provider>
);
