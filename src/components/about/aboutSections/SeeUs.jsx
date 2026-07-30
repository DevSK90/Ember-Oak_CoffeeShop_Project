import React from "react";
import { Link } from "react-router-dom";

const SeeUs = () => {
  return (
    <div className="mt-20">
      <div className="bg-deep-chocolate rounded-card w-[92%] sm:w-[88%] h-auto p-8 sm:p-14 lg:p-20 mx-auto flex flex-col items-center gap-5 sm:gap-8 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-cream-white">
          Come see us in person
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-lighttext-03">
          We'd love to pour you a cup
        </p>
        <Link to="/contact">
          <button className="btn">Visit Our Cafe</button>
        </Link>
      </div>
    </div>
  );
};

export default SeeUs;
