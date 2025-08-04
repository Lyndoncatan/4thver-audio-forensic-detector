import { cn } from "@/lib/utils"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
<<<<<<< HEAD
=======
=======
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      {...props}
    />
  )
}

export { Skeleton }
