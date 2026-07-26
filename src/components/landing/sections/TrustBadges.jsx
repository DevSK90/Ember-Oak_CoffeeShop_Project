import { CircleCheck, Clock, Droplet } from "lucide-react";
import React from "react";

const TrustBadges = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 px-5 sm:gap-x-16 lg:gap-x-24 pt-12 pb-20">
        <div className="flex items-center gap-2">
          <CircleCheck className="text-terracotta-accent size-8 shrink-0" />
          <span className="font-bold text-deep-chocolate text-base sm:text-lg">
            Specialty Coffee
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Droplet className="text-terracotta-accent size-8 shrink-0" />
          <span className="font-bold text-deep-chocolate text-base sm:text-lg">
            100% Arabica
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-terracotta-accent size-8 shrink-0" />
          <span className="font-bold text-deep-chocolate text-base sm:text-lg">
            Made Fresh Daily
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
