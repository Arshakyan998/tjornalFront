import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
  value: string;
}

const TabOptions: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default TabOptions;
