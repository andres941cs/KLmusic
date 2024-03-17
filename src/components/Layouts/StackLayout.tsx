interface StackProps {
  className?: string;
  orientation?: 'row' | 'column';
  children: React.ReactNode;
}

export const StackLayout: React.FC<StackProps> = ({
  className,
  orientation = 'column',
  children,
}) => {
  const baseClasses = 'flex items-center justify-center'; // Common base styles

  const classNames = `${baseClasses}
  ${orientation === 'row' ? 'flex-row' : 'flex-col'}
  ${className || ''}`;

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};
