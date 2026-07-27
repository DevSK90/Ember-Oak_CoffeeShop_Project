import React from "react";
import MenuHeading from "./menuSections/MenuHeading";
import FiltersAndProducts from "./menuSections/FiltersAndProducts";
import FooterOtherPages from "../layout/FooterOtherPages";

const Menu = () => {
  return (
    <div>
      <MenuHeading />
      <FiltersAndProducts />
      <FooterOtherPages />
    </div>
  );
};

export default Menu;
