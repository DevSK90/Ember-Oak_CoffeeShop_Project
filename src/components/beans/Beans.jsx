import React from "react";
import BeansHero from "./sections/BeansHero";
import BeansList from "./sections/BeansList";
import FooterOtherPages from "../layout/FooterOtherPages";

const Beans = () => {
  return (
    <div>
      <BeansHero />
      <BeansList />
      <FooterOtherPages />
    </div>
  );
};

export default Beans;
