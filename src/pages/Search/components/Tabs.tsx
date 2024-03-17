import React, { useState } from 'react';
import { Badge } from '../../../components/UI/Badge';
import { StackLayout } from '../../../components/Layouts/StackLayout';

// TabsList
// TabsContent

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
    <StackLayout className='w-full h-full'>
      <StackLayout orientation="row" className="gap-2">
        {tabs.map((tab, index) => (
          <Badge variant='outline'
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTabIndex ? 'active' : ''}
          >
            {tab.label}
          </Badge>
        ))}
      </StackLayout>
      <StackLayout className='w-full h-full'>
        {tabs[activeTabIndex].content}
      </StackLayout>
    </StackLayout>
  );
};

export default Tabs;
