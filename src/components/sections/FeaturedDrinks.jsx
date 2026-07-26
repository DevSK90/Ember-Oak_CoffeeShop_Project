import React from "react";
import ProductCard from "../ui/ProductCard";
import { drinks } from "../../data/menu";
import SectionHeading from "../ui/SectionHeading";

const FeaturedDrinks = ({ subheading, heading }) => {
  return (
    <div className="px-5 sm:px-10 lg:px-20">
      <SectionHeading
        subheading="FEATURED DRINKS"
        heading="Crafted favorites"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-14">
        {drinks.map((drink) => (
          <ProductCard key={drink.name} {...drink} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDrinks;
