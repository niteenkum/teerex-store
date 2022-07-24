import React, { useContext } from "react";
import { FilterContext } from "../App";
import Cart from "./Cart";
import SearchInput from "./SearchInput";
import { AiFillHome} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const logo = require("../Assets/Images/logo.png");
  const { showFilter, setItem, item} = useContext(FilterContext);
  const navigate = useNavigate();
 
  return (
    <div className=" w-full bg-[#2874f0] fixed">
      <div className="flex justify-center md:hidden">
        <img src={logo} alt="" className="w-1/4   " />
      </div>
      <div className="flex justify-evenly items-center">
        <img src={logo} alt="" className="w-1/6 h-14 hidden md:block" />
       { !showFilter ?
       <>
        <SearchInput classes="" />
        <Cart /> 
        <AiFillHome className="text-4xl text-white cursor-pointer" onClick={() => navigate("/")}/>
       </>
      :
        <></>
      }
      </div>
    </div>
  );
}
