import { FC, ReactNode, useContext, useState } from 'react';
import { Badge } from '@components/UI/Badge';
import { StackLayout } from '@components/Layouts/StackLayout';
import { FilterContext } from '@context/Filter';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  setFilter: (newFilter: string) => void;
}

const Tabs: FC<TabsProps> = ({ tabs,setFilter }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const { setData } = useContext(FilterContext);
  const handleTab = (index: number) => {
    setActiveTabIndex(index);
    setData([]);
    switch(index){
      case 0: {
        setFilter('karaoke');
        break;
      }
      case 1: { 
        setFilter('artist');
        break; 
     }
      case 2: { 
        setFilter('song');
        break;
    }
      case 3: { 
        setFilter('album');
        break; 
      }
    }
  };

  return (
    // TAB COMPONENT
    <StackLayout className='w-full h-full overflow-hidden'>
      {/* TAB HEADER */}
      <StackLayout orientation="row" className="gap-2 my-3">
        {tabs.map((tab, index) => (
          <Badge variant='outline'
            key={index}
            onClick={() => handleTab(index)}
            className={index === activeTabIndex ? ' text-primary underline' : ''}
          >
            {tab.label}
          </Badge>
        ))}
      </StackLayout>
      {/* TAB CONTENT */}
      <StackLayout className='w-full h-full overflow-auto'>
        {tabs[activeTabIndex].content}
      </StackLayout>
    </StackLayout>
  );
};

export default Tabs;
