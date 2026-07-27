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
      <div className="w-full flex justify-center items-center gap-5 mt-10">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`w-32 py-2 font-bold text-deep-chocolate cursor-pointer rounded-full shadow transition-colors duration-200 ${activeFilter === filter.value ? "bg-terracotta-accent text-cream-white" : "bg-card-surface text-deep-chocolate"}`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 px-10 gap-4 mt-10">
        {filterdItems.map((menu) => (
          <MenuCard key={menu.id} {...menu} />
        ))}
      </div>
    </div>
  );
};

export default FiltersAndProducts;
