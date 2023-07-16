import React, { InputHTMLAttributes } from "react";
import {
  FieldValues,
  RegisterOptions,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface Props<T, K extends FieldValues> extends InputHTMLAttributes<T> {
  title: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegister<K>;
  name: Path<K>;
  rules: RegisterOptions<K, Path<K>>;
}

const Input = <K extends FieldValues>({
  title,
  placeholder,
  className,
  register,
  rules,
  name,
  ...props
}: Props<HTMLElement, K>) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <h1> {title}</h1>
      </label>
      <input
        id={name}
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
        placeholder={placeholder || ""}
        {...register(name, rules)}
        {...props}
      />
    </>
  );
};

export default Input;
