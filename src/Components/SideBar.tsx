import React from "react";
import { IProduct } from "../type";
import FilterItem from "./FilterItem";
import FilterItemTitle from "./FilterItemTitle";

interface IProps {
  color: string[];
  clothType: string[];
  setItem: (item: IProduct[]) => void;
  item: IProduct[];
}

export default function SideBar({ color, clothType, item, setItem }: IProps) {
  const [colors, setColors] = React.useState<string[]>([]);
  const [clothTypes, setClothTypes] = React.useState<string[]>([]);
  const [filterItemColor, setFilterItemColor] = React.useState<string[]>([]);
  const [filterItemGender, setFilterItemGender] = React.useState<string[]>([]);
  const [filterItemType, setFilterItemType] = React.useState<string[]>([]);
  const [filterItemPrice, setFilterItemPrice] = React.useState<string[]>([]);
  const [product, setProduct] = React.useState<IProduct[]>([]);


  React.useEffect(() => {
    // Get all the colors from the item and cloth types from the item and set them to the state 
    setProduct(item);
    setColors(color.filter((item, index) => color.indexOf(item) === index));
    setClothTypes(
      clothType.filter((item, index) => clothType.indexOf(item) === index)
    );
  }, [color]);

  //  This function is used to filter the item based on the color, type, price, and gender
  const handleFilter = async (itemToFilter: string, type?: string) => {
    let ff: string[] = [];
    if (type === "color") {
      if (filterItemColor.includes(itemToFilter)) {
        setFilterItemColor(
          filterItemColor.filter((item) => item !== itemToFilter)
        );
        ff = filterItemColor.filter((item) => item !== itemToFilter);
      } else {
        setFilterItemColor([...filterItemColor, itemToFilter]);
        ff = [...filterItemColor, itemToFilter];
      }
    } else if (type === "gender") {
      if (filterItemGender.includes(itemToFilter)) {
        setFilterItemGender(
          filterItemGender.filter((item) => item !== itemToFilter)
        );
        ff = filterItemGender.filter((item) => item !== itemToFilter);
      } else {
        setFilterItemGender([...filterItemGender, itemToFilter]);
        ff = [...filterItemGender, itemToFilter];
      }
    } else if (type === "type") {
      if (filterItemType.includes(itemToFilter)) {
        setFilterItemType(
          filterItemType.filter((item) => item !== itemToFilter)
        );
        ff = filterItemType.filter((item) => item !== itemToFilter);
      } else {
        setFilterItemType([...filterItemType, itemToFilter]);
        ff = [...filterItemType, itemToFilter];
      }
    } else if (type === "price") {
      if (filterItemPrice.includes(itemToFilter)) {
        setFilterItemPrice(
          filterItemPrice.filter((item) => item !== itemToFilter)
        );
        ff = filterItemPrice.filter((item) => item !== itemToFilter);
      } else {
        setFilterItemPrice([...filterItemPrice, itemToFilter]);
        ff = [...filterItemPrice, itemToFilter];
      }
    }

    filterColor(ff, product, type || "");
  };

  // This function is used to filter the item based on the color and then filtering others type as well as price and gender
  const filterColor = (
    itemToFilter: string[],
    products: IProduct[],
    type: string
  ) => {
    console.log("item to filter:", itemToFilter, "products", products);
    let a: IProduct[] = [];

    if (itemToFilter.length === 0 && type === "color") {
      console.log("item filter length inside color:", itemToFilter);
      filterGender(itemToFilter, products, type);
    } else if (type === "color") {
      for (let i of itemToFilter) {
        let c = products.filter((product) => {
          return product.color.includes(i);
        });
        a = [...a, ...c];
        // setItem(a);
        filterGender(itemToFilter, a, type);
      }
    } else if (filterItemColor.length > 0) {
      for (let i of filterItemColor) {
        let c = products.filter((product) => {
          return product.color.includes(i);
        });
        a = [...a, ...c];
        // setItem(a);
        filterGender(itemToFilter, a, type);
      }
    } else {
      filterGender(itemToFilter, products, type);
    }
  };

  // This function is used to filter the item based on the gender and then filtering others type as well as price and cloth type
  const filterGender = (
    itemToFilter: string[],
    products: IProduct[],
    type: string
  ) => {
    let a: IProduct[] = [];

    if (itemToFilter.length === 0 && type === "gender") {
      console.log("item filter length inside gender:", itemToFilter);
      filterType(itemToFilter, products, type);
    } else if (type === "gender") {
      for (let i of itemToFilter) {
        let c = products.filter((product) => {
          return product.gender.includes(i);
        });
        a = [...a, ...c];
        filterType(itemToFilter, a, type);
        // setItem(a);
      }
    } else if (filterItemGender.length > 0) {
      for (let i of filterItemGender) {
        let c = products.filter((product) => {
          return product.gender.includes(i);
        });
        a = [...a, ...c];
        filterType(itemToFilter, a, type);
        // setItem(a);
      }
    } else {
      filterType(itemToFilter, products, type);
    }

    // setFilteredItem(a);
  };

  // This function is used to filter the item based on the cloth type and then filtering others type as well as price
  const filterType = (
    itemToFilter: string[],
    products: IProduct[],
    type: string
  ) => {
    let a: IProduct[] = [];

    if (itemToFilter.length === 0 && type === "type") {
      console.log("item filter length inside color:", itemToFilter);
      // setItem(products);
      filterPrice(itemToFilter, products, type);
    } else if (type === "type") {
      for (let i of itemToFilter) {
        let c = products.filter((product) => {
          return product.type.includes(i);
        });
        a = [...a, ...c];
        // setItem(a);
        filterPrice(itemToFilter, a, type);
      }
    } else if (filterItemType.length > 0)
      for (let i of filterItemType) {
        let c = products.filter((product) => {
          return product.type.includes(i);
        });
        a = [...a, ...c];
        // setItem(a);
        filterPrice(itemToFilter, a, type);
      }
    else {
      // setItem(products);
      filterPrice(itemToFilter, products, type);
    }
  };

  // This function is used to filter the item based on the price and than setting the item to the filtered item 
  const filterPrice = (
    itemToFilter: string[],
    products: IProduct[],
    type: string
  ) => {
    let a: IProduct[] = [];

    if (itemToFilter.length === 0 && type === "price") {
      console.log("item filter length inside color:", itemToFilter);
      setItem(products);
    } else if (type === "price") {
      for (let i of itemToFilter) {
        let c = products.filter((product) => {
          console.log("product price:", product.price, "i:", i);

          if(i === "0-250"){
            return product.price < 250;
          }
          if(i === "250-500"){
            return product.price >= 250 && product.price < 500;
          }
          if(i === "500-1000"){
            return product.price >= 500 && product.price < 1000;
          }
        });
        a = [...a, ...c];
        setItem(a);
      }
    } else if (filterItemPrice.length > 0)
      for (let i of filterItemPrice) {
        let c = products.filter((product) => {
          console.log("product price:", product.price, "i:", i);
          if(i === "0-250"){
            return product.price < 250;
          }
          if(i === "250-500"){
            return product.price >= 250 && product.price < 500;
          }
          if(i === "500-1000"){
            return product.price >= 500 && product.price < 1000;
          }
        });
        a = [...a, ...c];
        setItem(a);
      }
    else {
      setItem(products);
    }
    console.log("a:", a,"produts", products);
  };

  return (
    <div className="bg-white w-full shadow-lg p-2 overflow-y overflow-scroll max-h-[75vh]">
      {/* Showing the colors which fetched from the api */}
      <FilterItemTitle label={"Color"} />
      {colors?.map((color, index) => {
        return (
          <FilterItem
            label={color}
            handleFilter={handleFilter}
            type={"color"}
            key={index}
          />
        );
      })}
      {/* Showing the gender men and women for filtering the item */}
      <FilterItemTitle label={"Gender"} />
      <FilterItem label={"Men"} handleFilter={handleFilter} type={"gender"} />
      <FilterItem label={"Women"} handleFilter={handleFilter} type={"gender"} />
      {/* Showing the price list for filtering the price */}
      <FilterItemTitle label={"Price"} />
      <FilterItem
        label={"0 - Rs 250"}
        handleFilter={handleFilter}
        type={"price"}
        price={"0-250"}
      />
      <FilterItem
        label={"250 - Rs 500"}
        handleFilter={handleFilter}
        type={"price"}
        price={"250-500"}
      />
      <FilterItem
        label={"500 - Rs 1000"}
        handleFilter={handleFilter}
        type={"price"}
        price={"500-1000"}
      />
      <FilterItemTitle label={"Type"} />
      {/* Showing the cloth type for filtering the item on the basis of cloth type */}
      {clothTypes?.map((clothType, index) => {
        return (
          <FilterItem
            label={clothType}
            handleFilter={handleFilter}
            key={index}
            type={"type"}
          />
        );
      })}
    </div>
  );
}
