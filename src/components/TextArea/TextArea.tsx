import React from "react";

interface Props {
  title: string;
  placeholder: string;
  className?: string;
  row?: number;
  onFocus?: (e?: React.FocusEvent<HTMLTextAreaElement>) => void;
  onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

type refType = HTMLTextAreaElement;
const Input = React.forwardRef<refType, Props>(
  ({ placeholder, title, className, row = 4, ...props }, ref) => {
    return (
      <>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          <h1> {title}</h1>
        </label>
        <textarea
          id="message"
          rows={row}
          className={`block
         p-2.5 w-full 
         text-sm outline-none
          text-gray-900
           bg-gray-50 
           rounded-lg border
           
           border-gray-300
            focus:ring-blue-500
             focus:border-blue-500
              dark:bg-gray-700
               dark:border-gray-600
                dark:placeholder-gray-400
                 dark:text-white
                  dark:focus:ring-blue-500
         
                   dark:focus:border-blue-500 ${className}`}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);

export default Input;
