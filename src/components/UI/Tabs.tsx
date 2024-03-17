import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTabIndex ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
