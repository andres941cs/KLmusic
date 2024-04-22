interface StackProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string;
  orientation?: 'row' | 'column';
  alignContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  gap?:number
  children: React.ReactNode;
}

export const StackLayout: React.FC<StackProps> = ({
  className,
  orientation = 'column',
  justifyContent = 'justify-center',
  alignItems = 'center',
  gap,
  children,
  ...props
}) => {
  const baseClasses = 'flex';
  const classNames = `${baseClasses}
    ${orientation === 'row' ? 'flex-row' : 'flex-col'}
    ${justifyContent ? `justify-${justifyContent}` : ''}
    ${alignItems ? `items-${alignItems}` : ''}
    ${gap ? `gap-${gap}` : ''}
    ${className || ''}`;

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
