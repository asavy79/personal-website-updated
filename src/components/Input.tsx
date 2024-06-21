import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
  const { ...rest } = props;

  return (
    <input
      className="p-3 text-left rounded-xl shadow-md border border-gray-500 w-[350px]"
      {...rest}
      type="text"
    />
  );
};
