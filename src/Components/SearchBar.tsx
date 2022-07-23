import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface IProps {
  classes: string;
}

export default function SearchBar({classes}: IProps) {
  const [active, setActive] = React.useState(false);
  const changed = () => {
    setActive(true);
  };
  const change = () => {
    setActive(false);
  };
  return (
    <React.Fragment>
      <div className={`flex justify-end items-center ${classes}`}>
        <input
          className="h-10 w-64 bg-white shadow-lg outline-none p-2"
          type="text"
          onFocus={changed}
          onBlur={change}
        />
        <AiOutlineSearch className="text-2xl text-[#2874f0] absolute -ml-2" />
      </div>
    </React.Fragment>
  );
}
