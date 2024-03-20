// import { createContext, useState } from 'react'

// // Este es el que tenemos que consumir
// export const FiltersContext = createContext()

// // Este es el que nos provee de acceso al contexto
// export function FiltersProvider ({ children }) {
//   const [filters, setFilters] = useState('')

//   return (
//     <FiltersContext.Provider value={{
//       filters,
//       setFilters
//     }}
//     >
//       {children}
//     </FiltersContext.Provider>
//   )
// }
import { createContext, useState } from 'react';

interface FiltersContextType {
  filters: string;
  setFilters: React.Dispatch<React.SetStateAction<string>>;
}

export const FiltersContext = createContext<FiltersContextType>({
  filters: '',
  setFilters: () => {},
});

interface FiltersProviderProps {
  children: React.ReactNode;
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState<string>('');

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
