import React from "react";

const ProductCard = ({ image, name, description, price, likes }) => {
  return (
    <div className="bg-card-surface rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 p-5">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-55 object-cover rounded-image"
        />
        <span className="absolute top-3 right-3 bg-cream-white text-terracotta-hover text-xs font-bold px-3 py-1.5 rounded-full shadow">
          {" "}
          ♥ {likes}
        </span>
      </div>
      <div className="pt-5 px-1.5">
        <h3 className="font-heading text-xl text-deep-chocolate mb-1.5">
          {name}
        </h3>
        <p className="text-sm text-textdark-03 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl text-deep-chocolate">
            ${price}
          </span>
          <button className="bg-terracotta-accent text-cream-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-terracotta-hover transition-colors duration-300 cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
