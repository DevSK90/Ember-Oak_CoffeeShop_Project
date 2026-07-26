import React from "react";
import { data } from "../../data/chooseUsData";
import WaveDivider from "../ui/WaveDivider";
import { WAVES } from "../../data/waves";

const WhyChooseUs = () => {
  return (
    <div className="relative bg-deep-chocolate pt-16 pb-20 mt-20 sm:pt-20 sm:pb-24 sm:mt-24 lg:pt-25 lg:pb-30 lg:mt-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center flex flex-col gap-3 mb-14">
          <span className="font-bold text-lighttext-04">WHY CHOOSE US</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cream-white">
            The Ember & Oak difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-cream-white/5 border border-cream-white/12 rounded-[20px] px-6.5 py-8"
            >
              <div className="font-heading font-extrabold text-sm text-terracotta-accent mb-4.5">
                {item.id}
              </div>
              <h3 className="font-heading text-lg text-lighttext-01 mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-lighttext-03 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider
        d={WAVES.sectionBottom}
        viewBoxHeight={60}
        fill="var(--color-cream-base)"
        className="absolute -bottom-px left-0"
      />
    </div>
  );
};

export default WhyChooseUs;
