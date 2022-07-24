import React, { useContext, useEffect } from "react";
import Product from "../Components/Product";
import SideBar from "../Components/SideBar";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useStoreItem from "../Hooks/useStoreItem";
import { data } from "autoprefixer";
import { FilterContext } from "../App";
import Toast from "../Components/Toast";
import NotFound from "../Components/NotFound";
import { IProduct } from "../type";

export default function HomePage() {
  const { color, clothType, setItem, item, setShowFilter, showFilter } =
    useContext(FilterContext);
  const { handleGetItem, product } = useStoreItem();

  // getting the item from the tee rex store
  useEffect(() => {
    handleGetItem();
  }, []);

  return (
    <div className="w-full flex bg-slate-50 min-h-screen  pt-24 md:pt-14">
      {/*  if the device is sm size than showing the filter conditionally  */}
      {!showFilter ? (
        <>
          <div className="w-1/4 hidden md:block relative">
            <div className="w-1/4 fixed p-4">
              <SideBar
                setItem={setItem}
                item={item}
                color={color}
                clothType={clothType}
              />
            </div>
          </div>
          <div className="pr-4 w-full fixed flex justify-end md:hidden">
            {" "}
            <BsFillFilterSquareFill
              className="text-3xl text-blue-500"
              onClick={() => {
                setItem(product);
                setShowFilter(true);
              }}
            />
          </div>
          <div className="w-full md:w-4/5 p-4 flex flex-wrap">
            {item?.map((item, index) => (
              <Product product={item} key={index} />
            ))}

            {item?.length === 0 ? (
              <div className="w-full flex justify-center items-center">
                {/* This will render only if there is no filtered item is present or no item is present in the item list */}
                <NotFound />
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>
          <SideBar
            setItem={setItem}
            item={item}
            color={color}
            clothType={clothType}
          />

          {/* Added a footer to apply the filter when the user is using via mobile */}
          <div className="bg-blue-600 h-20 w-full left-0 bottom-0 fixed flex justify-center items-center text-white">
            {/* If user presses on Cancel button showfilter wll be false and no filter applied */}
            
            <button
              className="bg-blue-300 h-14 w-32 rounded-sm transition ease-in delay-150 hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                setItem(product);
                setShowFilter(false);
              }}
            >
              Cancel
            </button>
            {/* If user presses on Apply button showfilter wll be false and user will be able to see the applied filters on the product */}
            <button
              className="bg-[#FF5800] h-14 w-32 rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-5"
              onClick={() => {
                setShowFilter(false);
              }}
            >
              Apply
            </button>
          </div>
        </>
      )}
    </div>
  );
}
