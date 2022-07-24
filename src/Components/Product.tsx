import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../App";
import { IProduct } from "../type";
import Toast from "./Toast";

interface IProps {
  product: IProduct;
}

export default function Product({ product }: IProps) {
  const navigate = useNavigate();
  const { cartItem, setCartItem } = React.useContext(FilterContext);
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = () => {
    setCartItem([...cartItem, product]);
    setIsAdded(true);
  };

  React.useEffect(() => {

    // this will map the cartItem to check if the product is already added to the cart and if it is then it will set the isAdded state to true
    cartItem.map((item) => {
      if (item.id === product.id) {
        setIsAdded(true);
      }
    })
  }, [])

  return (
    // This component is used to render the product which take product as props and handle the click event to add the product to cart
    <div className="w-36 h-fit md:w-44 bg-white border-2 shadow-3xl p-2 px-4 m-3">
      <p className="text-base text-black font-semibold text-center">
        {product?.name}
      </p>

      <img src={product?.imageURL} alt="image" className="rounded-sm m-2 h-32 w-44" />
      <div className="w-full flex justify-end pb-2"></div>
      <div className="flex justify-between">
        <p className="text-base font-normal">
          {product?.currency} {product?.price}
        </p>
        {/* If the product is not addded the button add to cart will be displayed  */}
        {!isAdded ? (
          <button
            className="bg-blue-400 hover:bg-blue-600 text-white p-1 text-xs"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        ) :
        // If the user already added the product then the go to cart button will be displayed
        (
          <button
            className="bg-blue-400 hover:bg-blue-600 text-white p-1 text-xs"
            onClick={() => {
              navigate("/cart-page");
            }}
          >
            Go to cart
          </button>
        )}
      </div>
    </div>
  );
}
