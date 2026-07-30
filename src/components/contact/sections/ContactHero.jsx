import React from "react";
import SectionHeading from "../../ui/SectionHeading";

const ContactHero = () => {
  return (
    <div>
      <div className="mt-10 px-5 sm:px-10">
        <SectionHeading
          subheading="GET IN TOUCH"
          heading="We'd love to hear from you"
        />
        <p className="text-center mt-2 text-base sm:text-lg max-w-xl mx-auto">
          Questions, catering requests, or just want to say hi — drop us a line.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
