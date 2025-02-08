import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Product from "./pages/Product";
import QuickRes from "./pages/QR";
import Account from "./pages/Account";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      {" "}
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/product" element={<Product />} />{" "}
        <Route path="/report" element={<Report />} />{" "}
        <Route path="/account" element={<Account />} />{" "}
        <Route path="/quickres" element={<QuickRes />} />{" "}
      </Routes>{" "}
    </Router>
  );
};

export default App;
