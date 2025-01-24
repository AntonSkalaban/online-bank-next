"use client";
import { FC, useState } from "react";

import { ITabs } from "types/index";

import "./style.scss";

export interface TabsProps {
  tabs: ITabs[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: number) => () => {
    setSelectedTab(index);
  };

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(({ title }, index) => (
          <li className="tabs__item" key={title}>
            <button
              className={`nav-button ${selectedTab === index ? "nav-button_active" : ""}`}
              onClick={handleTabClick(index)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">{tabs[selectedTab].content}</div>
    </div>
  );
};
