import React from "react";
import roastery3 from "../../../assets/images/roastery3.jpg";

const WhereItBegan = () => {
  return (
    <div className="w-full h-auto mt-20 px-5 sm:px-12 lg:px-20 rounded-panel flex flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-16 items-center">
      <div className="flex-1 flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
        <span className="text-lg font-bold text-terracotta-accent">
          WHERE IT BEGAN
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-deep-chocolate">
          One roaster, one garage, one obsession.
        </h1>
        <p className="text-justify text-base sm:text-lg lg:text-xl lg:pr-16">
          Founder Mara Delgado started roasting beans on a secondhand drum
          roaster, selling bags at the local farmers market on weekends. What
          began as a hobby quickly became a mission — to bring specialty-grade
          coffee to people who'd never tasted it before.
          <br />
          <br />
          Ten years later, we still roast every batch by hand, in small
          quantities, sourced directly from farmers we know by name.
        </p>
      </div>
      <div className="flex-1 w-full h-auto">
        <img
          src={roastery3}
          alt="roastery.jpg"
          className="object-cover w-full h-64 sm:h-80 lg:h-110 rounded-image"
        />
      </div>
    </div>
  );
};

export default WhereItBegan;
