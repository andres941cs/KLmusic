
// interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
// export const Button = ({children,...props}:Props) => {
//     return (
//         <button {...props} className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                 {children}
//         </button>
//     );
// }

// export default Button

import { forwardRef } from "react";

    // interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:string}
    // export const Button = ({variant,children,...props}:Props) => {
      export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:string}
     
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, variant, children, ...props }, ref) => {
    // Define base classes for button
    // let baseClasses = "px-4 py-2 rounded";
    let baseClasses = "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
  
// Usage
//   <Button variant="primary">Primary Button</Button>
