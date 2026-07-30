import React from "react";
import beans from "../../../assets/images/beans.jpg";
import { Link } from "react-router-dom";

const OurBeans = () => {
  return (
    <div className="mt-20 px-5 sm:mt-24 sm:px-10 lg:mt-32 lg:px-20">
      <div className="w-full h-auto p-6 sm:p-10 lg:p-20 rounded-panel flex flex-col lg:flex-row justify-between gap-8 lg:gap-3 items-center bg-card-surface">
        <div className="flex-1 flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
          <span className="text-lg font-bold text-terracotta-accent">
            OUR BEANS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-deep-chocolate">
            Grown with care, roasted with purpose.
          </h1>
          <p className="text-wrap text-base sm:text-lg lg:text-xl lg:pr-16">
            We work directly with growers in Ethiopia, Colombia, and Sumatra,
            paying above fair-trade prices for beans we'd be proud to serve
            ourselves. Every bag is roasted in-house, in small batches, so what
            you taste is always at its peak.
          </p>
          <Link to="/beans">
            <button className="btn2 hover:btn2:hover">Shop Our Beans</button>
          </Link>
        </div>
        <div className="flex-1 w-full h-auto">
          <img
            src={beans}
            alt="Beans.jpg"
            className="relative object-cover w-full h-56 sm:h-72 lg:h-100 rounded-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBeans;
