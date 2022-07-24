import React from "react";

interface IProps {
  label: string;
  handleFilter: (item: string, type: string) => void;
  type: string;
  price?: string;
}

export default function FilterItem({
  label,
  handleFilter,
  type,
  price,
}: IProps) {
  const handleClick = () => {
    // if the price is present than calling the handleFilter function with the price else calling the handleFilter function with the label
    if (price) {
      handleFilter(price, type);
    } else {
      handleFilter(label, type);
    }
  };

  return (
    // This component is used to render the flter item which take price type and label as props and handle the click event
    <div className="flex items-center px-7 py-2 m-2">
      <input type="checkbox" className="h-4 w-4" onClick={handleClick} />
      <p className="ml-4">{label}</p>
    </div>
  );
}
