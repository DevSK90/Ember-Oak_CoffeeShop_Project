import { Plus } from "lucide-react";
import React from "react";

const PastriesCard = ({ image, name, price }) => {
  return (
    <div className="bg-card-surface rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 p-5">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 sm:h-55 object-cover rounded-image"
        />
      </div>
      <div className="pt-5 px-1.5">
        <h3 className="font-heading text-xl text-deep-chocolate mb-1.5">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl text-deep-chocolate">
            ${price}
          </span>
          <button className="bg-terracotta-accent text-cream-white text-xs font-bold p-2 rounded-full hover:bg-terracotta-hover transition-colors duration-300 cursor-pointer">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastriesCard;
