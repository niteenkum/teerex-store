import React from "react";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

export default function Header() {
  const logo = require("../Assets/Images/logo.png");
  return (
    <div className=" w-full bg-[#2874f0] fixed">
      <div className="flex justify-center md:hidden">
        <img src={logo} alt="" className="w-1/4   " />
      </div>
      <div className="flex justify-evenly items-center">
        <img src={logo} alt="" className="w-1/6 h-14 hidden md:block" />
        <SearchBar classes="" />
        <Cart />
      </div>
    </div>
  );
}
