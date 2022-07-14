import React from "react";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shopping from "./components/Shopping";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/shopping" element={<Shopping />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
