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

interface GridProps {
  columns?: number;
  gap?: number;
  className?: string;
  children: React.ReactNode;
}

// export const GridLayout: React.FC<GridProps> = ({ columns = 2, gap = 2, className, children }) => {
  export const GridLayout: React.FC<GridProps> = ({
    columns, gap, className, children
  }) => {
  const baseClasses = 'grid';
  // const classNames = ;

  return (
    <div className={`${baseClasses} ${columns ? `grid-cols-${columns}` : ''} ${gap ? `gap-${gap}` : ''} ${className|| ''}` }>
      {children}
    </div>
  );
};

