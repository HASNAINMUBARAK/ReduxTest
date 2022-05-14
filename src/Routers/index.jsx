import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Service from "../Pages/Service";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Country from "../Components/Country";
import Favorite from "../Components/Favorite";
import Detail from "../Components/Detail";

const Routers = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Service" exact element={<Service />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/:CountryDetails" element={<Country />} />
          <Route path="/Favorite" exact element={<Favorite />} />
          <Route path="/Detail" exact element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;
