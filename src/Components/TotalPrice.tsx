import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../App";

export default function TotalPrice() {
  const { cartItem, setCartItem } = useContext(FilterContext);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Calculatuing the total price of the items which is present in the cartItem state using reduce function
    const totalPric = cartItem.reduce((acc, item: any) => {
      return acc + item.price * item.addedQuantity;
    }, 0);
    setTotalPrice(totalPric);
  }, [cartItem]);

  return (
    <div className="shadow-2xl h-44 mt-10 p-5 static md:fixed w-full">
      <h2>Price Details</h2>
      <div className="h-[1px] bg-slate-400"></div>
      {/* This will display the total price by the selected user */}
      <p className="text-slate-500 text-2xl mt-5">Total Price: {totalPrice}</p>

      {/* if user click on buy now button it will just redirect user to again on to the homepage and set the cart item to empty*/}
      <button
        className="bg-[#FF5800] mt-6 text-white h-12 w-32 rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-5"
        onClick={() => {
          setCartItem([]);
          navigate("/");
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
