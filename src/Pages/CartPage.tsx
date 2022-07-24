import React from "react";
import { FilterContext } from "../App";
import CartItem from "../Components/CartItem";
import NotFound from "../Components/NotFound";
import TotalPrice from "../Components/TotalPrice";

export default function CartPage() {
  const { cartItem, setCartItem } = React.useContext(FilterContext);
  React.useEffect(() => {
    setCartItem(
      cartItem.map((item) => {
        return { ...item, addedQuantity: 1 };
      })
    );
  }, []);

  return (
    <div>
      {cartItem?.length > 0 ? (
        <div className="pt-24 md:pt-14 grid grid-cols-1  md:grid-cols-12 p-2 md:p-24">
          <div className="col-span-8">
            {cartItem?.map((item) => {
              return <CartItem cartItems={item} />;
            })}
          </div>
          <div className="col-span-4 relative">
            <TotalPrice />
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <NotFound />
        </div>
      )}
    </div>
  );
}
