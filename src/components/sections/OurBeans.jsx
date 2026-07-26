import React from "react";
import beans from "../../assets/images/beans.jpg";

const OurBeans = () => {
  return (
    <div className="mt-32 px-20">
      <div className="w-full h-auto p-20 rounded-panel flex justify-between gap-3 items-center bg-card-surface">
        <div className="flex-1 flex flex-col gap-5 items-start">
          <span className="text-lg font-bold text-terracotta-accent">
            OUR BEANS
          </span>
          <h1 className="text-5xl text-deep-chocolate">
            Grown with care, roasted with purpose.
          </h1>
          <p className=" text-wrap text-xl pr-16">
            We work directly with growers in Ethiopia, Colombia, and Sumatra,
            paying above fair-trade prices for beans we'd be proud to serve
            ourselves. Every bag is roasted in-house, in small batches, so what
            you taste is always at its peak.
          </p>
          <button className="btn2 hover:btn2:hover">Shop Our Beans</button>
        </div>
        <div className="flex-1 w-full h-auto">
          <img
            src={beans}
            alt="Beans.jpg"
            className="relative object-cover w-full h-100 rounded-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBeans;
