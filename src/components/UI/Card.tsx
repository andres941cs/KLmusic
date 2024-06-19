import { forwardRef } from "react"
// m-5 p-5 
const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div {...props}
    ref={ref}
    className={`${className||''} rounded-md h-full border dark:border-none dark:bg-[#1C1917] text-card-foreground shadow overflow-auto`}
    {...props}
  />
))
Card.displayName = "Card"

export { Card}