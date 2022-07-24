import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FilterContext } from "../App";

interface IProps {
  cartItems: any;
}

export default function CartItem({ cartItems }: IProps) {
  const { setCartItem, cartItem, setShowToast } =
    React.useContext(FilterContext);

  const handleDecreaseQuantityByOne = () => {
    // This will decrease the quantity by one
    setCartItem(
      cartItem.map((item: any) => {
        if (item.id === cartItems.id) {
          return { ...item, addedQuantity: item.addedQuantity - 1 };
        }
        return item;
      })
    );
  };

  // This will increase the quantity by one if the user click on the plus icon
  //  and if the quantity is less than the available quantity then it will increase
  //  the quantity by one else it will display the toast message to the user with error message
  const handleIncreaseQuantityByOne = () => {
    if (cartItems?.addedQuantity < cartItems?.quantity) {
      setCartItem(
        cartItem.map((item: any) => {
          if (item.id === cartItems.id) {
            return { ...item, addedQuantity: item.addedQuantity + 1 };
          }
          return item;
        })
      );
      setShowToast({
        message: `${cartItems.name} is added to cart`,
        success: true,
        show: true,
      });
    } else {
      setShowToast({
        message: `We're sorry! Only ${cartItems?.quantity} unit(s) allowed in this order`,
        success: false,
        show: true,
      });
    }
  };

  const handleRemoveItem = () => {
    setCartItem(
      cartItem.filter((item: any) => {
        return item.id !== cartItems.id;
      })
    );
  };

  return (
    // This component is used to render the cart item which take cartItems as props and handle the click event to remove the item from cart
    <div className="bg-white shadow-2xl mt-10 m-10 p-5">
      <div>
        <div className="flex">
          <img
            src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
            alt=""
            className="rounded-sm m-2 h-32 w-32"
          />

          <div className="pl-10">
            <p className="text-base text-black font-semibold">
              {cartItems?.name}
            </p>
            <p className="text-base font-normal text-black mt-2">Color: Red </p>
            <p className="text-base font-normal text-black mt-2">
              Price: Rs. {cartItems?.price}
            </p>
            <p className="text-base font-normal text-black mt-2">
              Gender: {cartItems?.gender}
            </p>
          </div>
        </div>

        <div className="flex mt-5 items-center">
          <div className="h-5 flex gap-2 items-center">
            {
              <button
                disabled={cartItems?.addedQuantity === 1 ? true : false}
                onClick={handleDecreaseQuantityByOne}
              >
                <AiOutlineMinusCircle
                  className={`${
                    cartItems?.addedQuantity === 1
                      ? "text-slate-400"
                      : "text-blue-400"
                  } text-xl`}
                />
              </button>
            }
            <div className=" h-7 w-10 flex justify-center items-center border border-slate-200 outline-none">
              {cartItems?.addedQuantity}
            </div>
            <button onClick={handleIncreaseQuantityByOne}>
              <AiOutlinePlusCircle
                className={`${
                  cartItems?.addedQuantity < cartItems?.quantity
                    ? "text-blue-400"
                    : "text-slate-400"
                } text-xl`}
              />
            </button>
          </div>

          <button
            className="border-2 bg-blue-600 border-slate-200 hover:bg-blue-600 text-white p-1 text-xs ml-5"
            onClick={handleRemoveItem}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
