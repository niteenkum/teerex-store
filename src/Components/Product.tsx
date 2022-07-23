import React from "react";

export default function Product() {
const color = "pink";
  return (
    <div className="w-36 md:w-44 bg-white border-2 shadow-3xl p-2 px-4 m-3"> 
     <p className="text-base text-black font-semibold text-center">Polo T-Shirt</p>
    
      <img
        src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
        alt="image"
        className="rounded-sm m-2"
     />
     <div className="w-full flex justify-end pb-2">
     <span className={`h-3 w-3 rounded-full bg-red-500 border border-slate-50`}></span>
     </div>
     <div className="flex justify-between">
         <p className="text-base font-normal">Rs. {"250"}</p>
        <button className="bg-blue-400 hover:bg-blue-600 text-white p-1 text-xs">Add to cart</button>
     </div>
    </div>
  );
}
