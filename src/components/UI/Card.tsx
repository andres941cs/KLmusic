import { forwardRef } from "react"


  
const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div {...props}
    ref={ref}
    className={`rounded-md h-full m-5 p-5 border dark:border-none dark:bg-[#1C1917] text-card-foreground shadow ${className}`}
    {...props}
  />
))
Card.displayName = "Card"

// export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
export { Card}