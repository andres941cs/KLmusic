interface GridLayoutProps {
  rows: number;
  cols: number;
  className?:string;
  children: React.ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({ rows, cols, className="", children }) => {
  const gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
  const gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;

  return (
    <div className={"grid " + className} style={{ gridTemplateColumns, gridTemplateRows }}>
      {children}
    </div>
  );
};

export default GridLayout;