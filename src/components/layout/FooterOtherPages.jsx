import React from "react";

const FooterOtherPages = () => {
  return (
    <div className="bg-dark-chocolate w-full flex justify-center items-center py-8 mt-16">
      <span className="text-cream-white/50 text-sm">
        © {new Date().getFullYear()} Ember & Oak Coffee Co. All rights reserved.
      </span>
    </div>
  );
};

export default FooterOtherPages;
