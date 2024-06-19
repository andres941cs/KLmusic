import { createContext, useState } from 'react';

interface IFilterContext {
  data: any;
  setData: (data: any) => void;

}

export const FilterContext = createContext<IFilterContext>({
  data: [],
  setData: () => {},
});

interface IFiltersProvider {
  children: React.ReactNode;
}

export function FilterProvider({ children }: IFiltersProvider) {
  const [data, setData] = useState<any>([]);

  return (
    <FilterContext.Provider value={{ data, setData }}>
      {children}
    </FilterContext.Provider>
  );
}
