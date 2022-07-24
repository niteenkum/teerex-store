import React from "react";
import { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Toast from "./Components/Toast";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import { IProduct } from "./type";

// Create a context for the filter
export const FilterContext = createContext<{
  showToast: { message: string; success: boolean; show: boolean };
  setShowToast: (showToast: {
    message: string;
    success: boolean;
    show: boolean;
  }) => void;
  color: string[];
  setColor: (color: string[]) => void;
  clothType: string[];
  setClothType: (clothType: string[]) => void;
  cartItem: IProduct[];
  setCartItem: (cartItem: IProduct[]) => void;
  setItem: (item: IProduct[]) => void;
  item: IProduct[];
  showFilter: boolean;
  setShowFilter: (showFilter: boolean) => void;
  tempItem: IProduct[];
  setTempItem: (tempItem: IProduct[]) => void;
}>({
  showToast: { message: "", success: false, show: false },
  setShowToast: () => {},
  color: [],
  setColor: () => {},
  clothType: [],
  setClothType: () => {},
  cartItem: [],
  setCartItem: () => {},
  setItem: () => {},
  item: [],
  showFilter: false,
  setShowFilter: () => {},
  tempItem: [],
  setTempItem: () => {},
});

function App() {
  const [color, setColor] = useState<string[]>([]);
  const [clothType, setClothType] = useState<string[]>([]);
  const [cartItem, setCartItem] = useState<IProduct[]>([]);
  const [showToast, setShowToast] = useState<{
    message: string;
    success: boolean;
    show: boolean;
  }>({ message: "", success: false, show: false });
  const [item, setItem] = useState<IProduct[]>([]);
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const [tempItem, setTempItem] = React.useState<IProduct[]>([]);

  // Hidding the toast after a while
  React.useEffect(() => {
    setTimeout(() => {
      setShowToast({ message: "", success: false, show: false });
    }, 10000);
  }, [showToast]);

  return (
    <BrowserRouter>
      <FilterContext.Provider
        value={{
          showToast,
          setShowToast,
          color,
          setColor,
          clothType,
          setClothType,
          cartItem,
          setCartItem,
          setItem,
          item,
          showFilter,
          setShowFilter,
          tempItem,
          setTempItem,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Routes>
      </FilterContext.Provider>
      {showToast.show ? (
        <div className="flex justify-end items-end m-4">
          <Toast message={showToast?.message} success={showToast?.success} />
        </div>
      ) : null}
    </BrowserRouter>
  );
}

export default App;
