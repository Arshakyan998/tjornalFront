import React from "react";
import Tab from "./Tab";

interface Props {
  children: JSX.Element | JSX.Element[];
  onChange: (activeValue: string) => void;
}

const Tabs: React.FC<Props> = ({ children, onChange }) => {
  const firstElement = React.Children.toArray(children)[0] as JSX.Element;

  const [activeTab, setActiveTab] = React.useState<string>(
    firstElement.props.children
  );

  const [activeTabPosition, setActiveTabPosition] = React.useState<number>(0);
  const [activeTabWith, setActiveTabWith] = React.useState<number>(50);

  const setActiveTabAndValue = (tab: string, value: string) => {
    setActiveTab(tab);
    onChange(value);
  };

  React.useEffect(() => {
    onChange(firstElement.props.value);
  }, []);

  const childrens = React.Children.map(children, (el) => {
    return (
      <Tab
        activeValue={el.props.value}
        value={el.props.children}
        setActiveTab={setActiveTabAndValue}
        activeTab={activeTab}
        setActiveTabPosition={setActiveTabPosition}
        setActiveTabWith={setActiveTabWith}
      />
    );
  });

  return (
    <nav className="relative">
      <ul className="flex">{childrens}</ul>
      <div
        className={`w-[20px] border-b-2 border-cyan-600 transition-all duration-[0.5s] absolute`}
        style={{
          width: activeTabWith,
          left: activeTabPosition,
        }}
      />
    </nav>
  );
};

export default Tabs;
