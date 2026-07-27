import React from "react";
import SectionHeading from "../../ui/SectionHeading.jsx";
import WaveDivider from "../../ui/WaveDivider.jsx";
import { WAVES } from "../../../data/waves.js";

const AboutHero = () => {
  return (
    <div className="bg-dark-chocolate relative px-5 sm:px-12 lg:px-20 pt-20 pb-32 sm:pt-28 sm:pb-40 lg:pt-32 lg:pb-44">
      <div className="text-center flex flex-col gap-3">
        <span className="font-bold text-lighttext-04">OUR STORY</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-cream-base">
          Born from a love of slow mornings
        </h1>
        <p className="text-lighttext-02 max-w-2xl mx-auto text-base sm:text-lg">
          Ember & Oak started in 2016 as a single roaster in a garage. Today,
          we're a neighborhood café built on the same belief: coffee is better
          when it's unhurried.
        </p>
      </div>
      <WaveDivider
        d={WAVES.heroBottom}
        viewBoxHeight={90}
        fill="var(--color-cream-base)"
        className="absolute -bottom-px left-0"
      />
    </div>
  );
};

export default AboutHero;
