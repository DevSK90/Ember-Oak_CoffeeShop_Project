import React from "react";
import AboutHero from "./aboutSections/AboutHero";
import WhereItBegan from "./aboutSections/WhereItBegan";
import OurValues from "./aboutSections/OurValues";

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhereItBegan />
      <OurValues />
    </div>
  );
};

export default About;
