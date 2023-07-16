import React from "react";
import TabOptions from "./TabOptions";

interface Props {
  value: string;
  setActiveTab: (activeTab: string, value: string) => void;
  setActiveTabPosition: React.Dispatch<React.SetStateAction<number>>;
  setActiveTabWith: React.Dispatch<React.SetStateAction<number>>;
  activeTab: string;
  Tag?: React.ElementType;
  activeValue: string;
}

const Tab: React.FC<Props> = ({
  value,
  setActiveTab,
  activeTab,
  setActiveTabPosition,
  setActiveTabWith,
  Tag = "div",
  activeValue,
}) => {
  return (
    <li>
      <Tag
        onClick={() => setActiveTab(value, activeValue)}
        className={`${activeTab === value ? "active" : ""} cursor-pointer`}
        style={{
          marginLeft: "20px",
          color: activeTab === value ? "green" : "red",
        }}
        ref={(el: HTMLElement) => {
          if (activeTab === value) {
            setActiveTabPosition(
              Number(
                el?.getBoundingClientRect().x -
                  (el?.parentElement!.parentElement?.getBoundingClientRect()
                    .left || 0)
              )
            );

            setActiveTabWith(Number(el?.getBoundingClientRect().width));
          }
        }}
      >
        {value}{" "}
      </Tag>
    </li>
  );
};

export default Tab;
