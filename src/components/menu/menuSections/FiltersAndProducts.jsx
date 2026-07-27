import React, { useState } from "react";
import { menuItems } from "../../../data/menu";
import MenuCard from "../../ui/MenuCard";

const filters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Coffee",
    value: "coffee",
  },
  {
    label: "Tea",
    value: "tea",
  },
  {
    label: "Pastries",
    value: "Pastry",
  },
  {
    label: "Cold Brew",
    value: "cold",
  },
];

const FiltersAndProducts = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterdItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.Category === activeFilter);

  return (
    <div>
      <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-5 mt-10 px-5">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-5 py-2 sm:w-32 font-bold cursor-pointer rounded-full shadow transition-colors duration-200 ${activeFilter === filter.value ? "bg-terracotta-accent text-cream-white" : "bg-card-surface text-deep-chocolate"}`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 sm:px-10 gap-4 mt-10">
        {filterdItems.map((menu) => (
          <MenuCard key={menu.id} {...menu} />
        ))}
      </div>
    </div>
  );
};

export default FiltersAndProducts;
