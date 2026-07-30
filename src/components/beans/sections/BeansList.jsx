import React from "react";
import { beans } from "../../../data/menu";

const BeansList = () => {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7 px-5 sm:px-10 lg:px-20">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="bg-card-surface rounded-card shadow-card p-5 flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-10"
        >
          <img
            src={bean.image}
            alt={bean.name}
            className="w-full sm:w-40 sm:shrink-0 h-56 sm:h-50 object-cover rounded-image"
          />
          <div className="flex flex-col justify-between gap-5 min-w-0 w-full">
            <div className=" flex gap-2">
              {bean.tags.map((tags) => (
                <span
                  key={tags}
                  className="bg-tan-surface text-xs text-terracotta-accent font-bold py-1 px-3 rounded-full"
                >
                  {tags}
                </span>
              ))}
            </div>
            <div>
              <h1 className="font-heading text-2xl">{bean.name}</h1>
              <p className="text-md">{bean.desc}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-xl">$ {bean.price}</h2>
              <button className="btn hover:btn">Add to Bag</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeansList;
