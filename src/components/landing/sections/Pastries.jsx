import React from "react";
// import SectionHeading from "../ui/SectionHeading";
import SectionHeading from "../../ui/SectionHeading.jsx";
import { pastries } from "../../../data/menu.js";
import PastriesCard from "../../ui/PastriesCard";

const Pastries = () => {
  return (
    <div className="px-5 sm:px-10 lg:px-20 mt-24">
      <SectionHeading
        subheading="FROM THE CASE"
        heading="Fresh-baked pastries"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-14">
        {pastries.map((pastri) => (
          <PastriesCard key={pastri.name} {...pastri} />
        ))}
      </div>
    </div>
  );
};

export default Pastries;
