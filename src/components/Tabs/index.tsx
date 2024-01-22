import { Fragment, ReactNode } from "react";
import { tabButton, tabsContainer } from "./style.css";

interface TabsProps {
  tabs: {
    name: string;
    content: ReactNode;
  }[];
  activeTabIndex: number;
  handleChangeActiveTab: (index: number) => void;
  className?: string;
}

export function Tabs({
  tabs,
  activeTabIndex,
  handleChangeActiveTab,
  className,
}: TabsProps) {
  return (
    <div className={`${tabsContainer} ${className}`}>
      {tabs?.map(({ name, content }, index) => {
        return (
          <div key={index}>
            <div key={index}>
              <button
                className={
                  tabButton[activeTabIndex === index ? "active" : "default"]
                }
                onClick={() => handleChangeActiveTab(index)}
              >
                {name}
              </button>
            </div>
            {activeTabIndex === index && (
              <div className={`tab-content tab-content-${index}`}>
                {content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
