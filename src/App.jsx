import React from "react";
import Home from "./components/landing/Home";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Navbar from "./components/layout/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default App;
