import React from "react";

const SectionHeading = ({ subheading, heading }) => {
  return (
    <div>
      <div className="text-center flex flex-col gap-3">
        <span className="font-bold text-terracotta-accent">{subheading}</span>
        <h1 className="text-5xl text-deep-chocolate">{heading}</h1>
      </div>
    </div>
  );
};

export default SectionHeading;
