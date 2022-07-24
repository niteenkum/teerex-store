import React from "react";

interface IProps {
  label: string;
}

export default function FiterItemTitle({ label }: IProps) {
  return (
    // This function take label as props and return the filter item title
    <div className="flex items-center m-3 p-3">
      <p className="text-sm font-semibold text-blue-600">{label}</p>
      <div className="flex-1 h-[1.5px] bg-blue-600 mx-3"></div>
    </div>
  );
}
