import React from "react";

interface Props {
  fullWith?: boolean;
  children: JSX.Element | JSX.Element[];
}

const MaynLayout: React.FC<Props> = ({ fullWith, children }) => {
  let layoutWidth: string = "w-[680px]";
  if (fullWith) {
    layoutWidth = "w-[1064px]";
  }

  return (
    <div className={"bg-white m-[30px] p-[30px]"}>
      <div className={`m-auto  ${layoutWidth}`}>{children}</div>
    </div>
  );
};

export default MaynLayout;
