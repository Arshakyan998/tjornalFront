import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({
  children,
  onClick,
  type,
  disabled,
  ...props
}) => {
  return (
    <button
      style={
        disabled
          ? {
              background: "gray",
            }
          : {}
      }
      disabled={disabled}
      type={type || "button"}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
