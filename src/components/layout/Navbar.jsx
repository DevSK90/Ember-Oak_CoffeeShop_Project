import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-10">
      <h1 className="text-3xl font-heading text-textdark-01">Ember & Oak</h1>

      <ul className="flex space-x-6">
        <li className=" text-deep-chocolate font-semibold text-md">Home</li>
        <li className=" text-deep-chocolate font-semibold text-md">Menu</li>
        <li className=" text-deep-chocolate font-semibold text-md">About</li>
        <li className=" text-deep-chocolate font-semibold text-md">Blog</li>
        <li className=" text-deep-chocolate font-semibold text-md">Contact</li>
      </ul>
      {/* <button className="bg-terracotta-accent hover:bg-terracotta-hover text-cream-white font-bold py-2 px-4 rounded-3xl shadow-button"> */}
      <button className="btn">Order Now</button>
    </div>
  );
};

export default Navbar;
