import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-cream-base border-b border-deep-chocolate/8 ">
      <div className="flex justify-between items-center py-4 px-5 sm:px-10 ">
        <h1 className="text-2xl sm:text-3xl font-heading text-textdark-01">
          Ember & Oak
        </h1>

        <ul className="hidden md:flex space-x-6">
          {NAV_LINKS.map((nav) => (
            <NavLink
              to={nav.link}
              key={nav.link}
              className={({ isActive }) =>
                `text-md transition-colors duration-200 ${isActive ? "font-bold text-terracotta-accent" : "font-semibold text-deep-chocolate"}`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </ul>

        <button className="btn hidden md:inline-block">Order Now</button>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden text-deep-chocolate cursor-pointer"
        >
          {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-5 sm:px-10 pb-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((nav) => (
              <NavLink
                to={nav.link}
                key={nav.name}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-md transition-colors duration-200 ${isActive ? "font-bold text-terracotta-accent" : "font-semibold text-deep-chocolate"}`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </ul>
          <button onClick={() => setIsOpen(false)} className="btn self-start">
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
