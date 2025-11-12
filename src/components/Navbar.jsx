import React from "react";
import GlassTimer from "./GlassTimer";
import logo from "../assets/sditlogo.jpg";

const Navbar = () => {
  return (
    <div
      className="
        fixed top-0 left-0 w-full
        h-16 sm:h-20 lg:h-24
        px-4 sm:px-6 md:px-10
        flex items-center justify-between
        transition-all duration-300
        z-9999
      "
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img
          src={logo}
          alt="Logo"
          className="
            w-8 h-8
            sm:w-10 sm:h-10
            md:w-12 md:h-12
            lg:w-14 lg:h-14
            object-contain
            drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]
            transition-all duration-300
          "
        />
        <h1 className="text-white font-semibold text-lg sm:text-xl md:text-2xl tracking-wide">
          ECHELON 2025
        </h1>
      </div>

      {/* Timer Section */}
      <div className="flex items-center">
        <GlassTimer targetDate="2025-11-30T23:59:59" />
      </div>
    </div>
  );
};

export default Navbar;
