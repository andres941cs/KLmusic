import { forwardRef } from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:string}
     
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, variant, children, ...props }, ref) => {
    // Define base classes for button
    // let baseClasses = "px-4 py-2 rounded";
    let baseClasses = "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    /* COLORS => Backgroun - Hover - Focus Text  */
    switch (variant) {
      case "primary":
        baseClasses += " bg-background text-white";
        break;
      case "secondary":
        baseClasses += " bg-gray-500 text-white";
        break;
      case "success":
        baseClasses += " bg-green-500 text-white";
        break;
      case "danger":
        baseClasses += " bg-red-500 text-white";
        break;
      default:
        baseClasses += " bg-black dark:bg-white hover:bg-[hsl(240,3.7%,15.9%)] dark:hover:opacity-90 focus-visible:outline-black text-white dark:text-black";
        break;
    }
    
    return (
        <button {...props} ref={ref} className={baseClasses}>
            {children}
        </button>
    );
  }
)
