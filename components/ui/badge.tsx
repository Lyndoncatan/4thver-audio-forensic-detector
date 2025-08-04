import * as React from "react"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { Slot } from "@radix-ui/react-slot"
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
<<<<<<< HEAD
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
=======
<<<<<<< HEAD
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
=======
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  {
    variants: {
      variant: {
        default:
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
<<<<<<< HEAD
=======
=======
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
<<<<<<< HEAD
=======
=======
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  )
}

export { Badge, badgeVariants }
