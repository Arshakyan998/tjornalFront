import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
  value: string;
}

const TabOptions: React.FC<Props> = ({ children, value }) => {
  return <>{children}</>;
};

export default TabOptions;
