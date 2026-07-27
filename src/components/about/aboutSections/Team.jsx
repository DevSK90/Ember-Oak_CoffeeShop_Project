import React from "react";
import SectionHeading from "../../ui/SectionHeading";
import { team } from "../../../data/team";

const Team = () => {
  return (
    <div className="mt-10 px-5">
      <SectionHeading
        subheading="MEET THE TEAM"
        heading="The people behind the counter"
      />
      <div className="grid grid-cols-4 gap-6.5 px-20 mt-13">
        {team.map((team) => (
          <div key={team.id} className="text-center">
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-55 object-cover rounded-image"
            />
            <h3 className="font-heading text-[17px] text-deep-chocolate mt-4 mb-1">
              {team.name}
            </h3>
            <span className="text-[13px] text-textdark-03">
              {team.designation}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
