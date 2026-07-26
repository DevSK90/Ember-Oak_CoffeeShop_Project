import React from "react";
import hero_cup from "../../assets/images/hero_cup.jpg";
import WaveDivider from "../ui/WaveDivider";
import { WAVES } from "../../data/waves";
// import { hero_cup } from "../../assets/images/hero_cup.jpg";

const Hero = () => {
  return (
    <div className="bg-dark-chocolate relative pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-38.5">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 px-5 sm:px-8 lg:px-12">
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
          <span className="text-sm font-semibold font-body text-lighttext-04 px-4 py-1.5 rounded-full bg-terracotta-accent/20">
            SMALL-BATCH ROASTERY & CAFE
          </span>
          <h1 className="font-heading font-extrabold text-lighttext-01 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-wrap-pretty">
            A premium coffee experience, poured with intention
          </h1>
          <p className="text-lighttext-02 text-base sm:text-lg max-w-md">
            Ethically-sourced arabica, roasted in small batches and crafted by
            hand. Every cup is an invitation to slow down.
          </p>
          <button className="btn">Explore the Menu</button>
        </div>
        <div className="flex-1 w-full max-w-sm lg:max-w-none">
          <img
            src={hero_cup}
            alt="Hero Image"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-115 object-cover rounded-[28px] shadow-hero animate-floaty"
          />
        </div>
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

export default Hero;
