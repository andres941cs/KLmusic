
const badgeVariants = {
  base:"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
      default:
        "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground",
    },
  defaultVariants: {
    variants: "default",
  },
}
function cn(...classes:string[]) {
  return classes.join(" ");
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string; // Made optional (can be omitted)
  variant: keyof typeof badgeVariants.variants; // Ensures valid variant name
}

function Badge({ className, variant, ...props }: BadgeProps) {
  const variantClass = badgeVariants.variants?.[variant]; // Optional chaining
  return (
    <div className={cn(badgeVariants.base,variantClass, className||"")} {...props} />
  );
}

export { Badge };
