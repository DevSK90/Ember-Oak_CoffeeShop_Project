import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-20 bg-dark-chocolate">
      <div className="py-10 px-5 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-8 sm:gap-6 lg:gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-[22px] font-heading font-extrabold text-lighttext-01">
            Ember & Oak
          </h1>
          <p className="text-lighttext-02">
            A small-batch roastery and neighborhood café, pouring premium coffee
            with intention since 2016.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-lighttext-01">Visit Us</span>
          <p className="text-lighttext-03 text-sm leading-relaxed">
            214 Maple Street
            <br />
            Portland, OR 97205
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-lighttext-01">Hours</span>
          <p className="text-lighttext-03 text-sm leading-relaxed">
            Mon-Fri: 7am - 6pm
            <br />
            Sat-Sun:8am - 5pm
            <br />
            (503) 555-0148
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-lighttext-01">
            Stay in the loop
          </span>
          <div className="flex justify-center gap-3">
            <input
              type="text"
              placeholder="Your Email"
              name="Email"
              className="bg-lighttext-01/6 border border-lighttext-01/15 text-lighttext-01 placeholder:text-lighttext-01/50 rounded-full px-4 py-2.5 text-sm flex-1"
            />
            <button className="btn text-sm px-5">Join</button>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaFacebook className="w-9 h-9 flex items-center justify-center rounded-full bg-lighttext-01/8 text-lighttext-01 text-lg hover:bg-terracotta-accent transition-colors p-2" />
            <AiFillInstagram className="w-9 h-9 flex items-center justify-center rounded-full bg-lighttext-01/8 text-lighttext-01 text-lg hover:bg-terracotta-accent transition-colors p-2" />
            <FaSquareXTwitter className="w-9 h-9 flex items-center justify-center rounded-full bg-lighttext-01/8 text-lighttext-01 text-lg hover:bg-terracotta-accent transition-colors p-2" />
          </div>
        </div>
      </div>
      <div className="max-w-340 border-t border-cream-base/20 mx-auto px-5 sm:px-10 lg:px-20 py-6 flex flex-wrap justify-center sm:justify-between gap-3">
        <span className="text-xs text-textdark-03">
          © {new Date().getFullYear()} Ember &amp; Oak Coffee Co. All rights
          reserved.
        </span>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs text-textdark-03 hover:text-terracotta-accent"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-textdark-03 hover:text-terracotta-accent"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
