import React from "react";

const Navbar = () => {
  return (
    <nav className="flex md:flex-row flex-col md:justify-between
    md:space-y-0 space-y-2 md:px-4 items-center bg-[#fc86c7]
    py-4">
      <h1 className="text-slate-100
      font-[GreatVibesReg] text-2xl
      ">Elena Joy</h1>
        <ul className="flex md:space-x-6 space-x-24
        text-slate-100 font-semibold">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
    </nav>
  );
};

export default Navbar;
