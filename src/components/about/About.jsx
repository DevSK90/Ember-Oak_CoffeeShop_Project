import React from "react";
import AboutHero from "./aboutSections/AboutHero";
import WhereItBegan from "./aboutSections/WhereItBegan";
import OurValues from "./aboutSections/OurValues";
import Team from "./aboutSections/Team";

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhereItBegan />
      <OurValues />
      <Team />
    </div>
  );
};

export default About;
