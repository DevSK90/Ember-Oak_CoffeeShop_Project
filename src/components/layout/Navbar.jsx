import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

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
    name: "Beans",
    link: "/beans",
  },
  {
    name: "About",
    link: "/about",
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
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-heading text-textdark-01">
            Ember & Oak
          </h1>
        </Link>

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

        <Link to="/menu">
          <button className="btn hidden md:inline-block">Order Now</button>
        </Link>

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
          <Link to="/menu">
            <button onClick={() => setIsOpen(false)} className="btn self-start">
              Order Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
