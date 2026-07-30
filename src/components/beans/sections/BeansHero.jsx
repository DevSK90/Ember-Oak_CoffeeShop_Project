import React from "react";
import SectionHeading from "../../ui/SectionHeading";

const BeansHero = () => {
  return (
    <div>
      <div className="mt-10 px-5 sm:px-10">
        <SectionHeading
          subheading="SHOP OUR BEANS"
          heading="Take the roastery home"
        />
        <p className="text-center mt-2 text-base sm:text-lg max-w-xl mx-auto">
          Single-origin and signature blends, roasted in small batches and
          shipped within 48 hours of roasting.
        </p>
      </div>
    </div>
  );
};

export default BeansHero;
