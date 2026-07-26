import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { pastries } from "../../data/menu";
import PastriesCard from "../ui/PastriesCard";

const Pastries = () => {
  return (
    <div className="px-20 mt-24">
      <SectionHeading
        subheading="FROM THE CASE"
        heading="Fresh-baked pastries"
      />
      <div className="grid grid-cols-3 gap-7.5 mt-14">
        {pastries.map((pastri) => (
          <PastriesCard key={pastri.name} {...pastri} />
        ))}
      </div>
    </div>
  );
};

export default Pastries;
