import { cn } from "@/lib/utils"

<<<<<<< HEAD
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
=======
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
      {...props}
    />
  )
}

export { Skeleton }
