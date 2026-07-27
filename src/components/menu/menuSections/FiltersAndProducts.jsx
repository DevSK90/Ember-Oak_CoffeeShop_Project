import React from "react";
import { menuItems } from "../../../data/menu";
import MenuCard from "../../ui/MenuCard";

const FiltersAndProducts = () => {
  const filters = ["All", "Coffee", "Tea", "Pastries", "Cold Brew"];

  return (
    <div>
      <div className="w-full flex justify-center items-center gap-5 mt-10">
        {filters.map((filter) => (
          <button
            key={filter}
            className="bg-card-surface w-32 py-2 font-bold text-deep-chocolate cursor-pointer rounded-full shadow"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 px-10 gap-4 mt-10">
        {/* <div className="bg-card-surface rounded-card p-5"> */}
        {menuItems.map((menu) => (
          <MenuCard key={menu.name} {...menu} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default FiltersAndProducts;
