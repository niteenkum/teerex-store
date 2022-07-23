import React from "react";
import { BiCart } from "react-icons/bi";

export default function Cart() {
  return (
    <div className="flex justify-center items-center cursor-pointer">
        <div className="relative">
      <div className=" absolute h-5 w-5 bg-red-400 rounded-md text-sm font-normal text-white border-2 border-white flex items-center justify-center">
        3
      </div>{" "}
      <BiCart className="text-white text-5xl" />{" "}
    </div>
    <p className="text-md font-bold text-white">Cart</p>
    </div>
  );
}
