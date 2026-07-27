import React from "react";
import SectionHeading from "../../ui/SectionHeading";

const MenuHeading = () => {
  return (
    <div>
      <div className="mt-10">
        <SectionHeading
          subheading="OUR MENU"
          heading="Everything, made fresh"
        />
        <p className="text-center mt-2 text-lg">
          Coffee, tea, and pastries — hand-crafted daily from beans we roast
          ourselves.
        </p>
      </div>
    </div>
  );
};

export default MenuHeading;
