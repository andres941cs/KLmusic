// // TODO: SE PUEDE MEJORAR
// interface GridProps {
//     columns?: number;
//     gap?: number;
//     className?:string;
//     children: React.ReactNode;
//   }


  
//   export const GridLayout: React.FC<GridProps> = ({ columns = 2, gap = 10,className, children }) => {
//     const classNames = [
//       'grid',
//       `grid-cols-${columns}`, // Tailwind class for number of columns
//       `gap-${gap}`, // Tailwind class for gap between items
//       className && className
//     ];
    
//     return (
//       <div className={classNames.join(' ')}>
//         {children}
//       </div>
//     );
//   };

interface GridLayoutProps {
  rows: number;
  cols: number;
  className:string;
  children: React.ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({ rows, cols, className, children }) => {
  const gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
  const gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;

  return (
    <div className={"grid "+className} style={{ gridTemplateColumns, gridTemplateRows }}>
      {children}
    </div>
  );
};

export default GridLayout;