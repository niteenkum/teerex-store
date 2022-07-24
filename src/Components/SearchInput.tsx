import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FilterContext } from "../App";
import { ImCross } from "react-icons/im";

interface IProps {
  classes: string;
}

export default function SearchInput({ classes }: IProps) {
  const { item, setItem, tempItem } = useContext(FilterContext);
  const [search, setSearch] = React.useState<string>("");

  // This handleSearch function is used to search the item based on the search input and set the item to the state
  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
    let allItem = tempItem;
    const lowercasedInput = e?.target?.value.toLowerCase();

    // This variable filteredData is used to store the filtered item based on the search input using object.keys and filter method
    const filteredData = allItem.filter((item: any) => {
      return Object.keys(item).some(
        (key) =>
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(lowercasedInput)
      );
    });

    setItem(filteredData);
  };

  return (
    <React.Fragment>
      <div className={`flex justify-end items-center ${classes}`}>
        <input
          className="h-10 w-48 md:w-80 bg-white shadow-lg outline-none p-2"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        {/*  Showing search icon untill user enter inputs inside input box  */}
       { !search?<AiOutlineSearch
          className="text-2xl text-[#2874f0] absolute -ml-2 cursor-pointer"
        />:
        // If user enter the input then it will show the cross icon to clear the input
        <ImCross className="text-base text-[#2874f0] absolute mr-3 cursor-pointer" 
        onClick={() => {
            setSearch("");
            setItem(tempItem);
        }}
        />
        }
      </div>
    </React.Fragment>
  );
}
