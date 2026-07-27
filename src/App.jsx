import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./components/landing/Home";
import Menu from "./components/menu/Menu";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Beans from "./components/beans/Beans.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/beans" element={<Beans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
