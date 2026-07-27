import React from "react";
import AboutHero from "./aboutSections/AboutHero";
import WhereItBegan from "./aboutSections/WhereItBegan";
import OurValues from "./aboutSections/OurValues";
import Team from "./aboutSections/Team";
import SeeUs from "./aboutSections/SeeUs";
import FooterOtherPages from "../layout/FooterOtherPages";

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhereItBegan />
      <OurValues />
      <Team />
      <SeeUs />
      <FooterOtherPages />
    </div>
  );
};

export default About;
