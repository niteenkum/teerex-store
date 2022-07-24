import React, { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../App";

export default function Cart() {
  let navigate = useNavigate();
  const { cartItem } = useContext(FilterContext);
  return (
    // This componet is used inside header page to display the cart icon and the cart item count
    <div className="flex justify-center items-center cursor-pointer"
     onClick={() =>  navigate("/cart-page", {replace: true} ) } 
    >
      <div className="relative">
        <div className=" absolute h-5 w-5 bg-red-400 rounded-md text-sm font-normal text-white border-2 border-white flex items-center justify-center">
          {cartItem.length}
        </div>{" "}
        <BiCart className="text-white text-5xl" />{" "}
      </div>
      <p className="text-md font-bold text-white">Cart</p>
    </div>
  );
}
