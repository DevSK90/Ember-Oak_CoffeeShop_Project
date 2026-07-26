import React from "react";
import Navbar from "./layout/Navbar";
import Hero from "./landing/sections/Hero";
import TrustBadges from "./landing/sections/TrustBadges";
import FeaturedDrinks from "./landing/sections/FeaturedDrinks";
import WhyChooseUs from "./landing/sections/WhyChooseUs";
import Pastries from "./landing/sections/Pastries";
import OurBeans from "./landing/sections/OurBeans";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBadges />
      <FeaturedDrinks />
      <WhyChooseUs />
      <Pastries />
      <OurBeans />
      <Footer />
    </div>
  );
};

export default Home;
