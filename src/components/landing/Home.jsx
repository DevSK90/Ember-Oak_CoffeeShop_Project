import React from "react";
import Hero from "./sections/Hero";
import TrustBadges from "./sections/TrustBadges";
import FeaturedDrinks from "./sections/FeaturedDrinks";
import WhyChooseUs from "./sections/WhyChooseUs";
import Pastries from "./sections/Pastries";
import OurBeans from "./sections/OurBeans";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
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
