import React from "react";
import GlassTimer from "./GlassTimer";
import logo from "../assets/sditlogo.jpg";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-20 px-6 md:px-10 
      flex items-center justify-between z-50
      bg-[rgba(15,15,25,0.6)] backdrop-blur-2xl 
      border-b border-[rgba(255,255,255,0.1)]
      shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    >
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        />
      </div>
      <div className="flex items-center">
        <GlassTimer targetDate="2025-11-31T23:59:59" />
      </div>
    </div>
  );
};

export default Navbar;
