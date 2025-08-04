"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
<<<<<<< HEAD
=======
=======
function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
<<<<<<< HEAD
      ref={ref}
=======
<<<<<<< HEAD
      ref={ref}
=======
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
<<<<<<< HEAD
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
=======
<<<<<<< HEAD
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
=======
}
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9

export { ToggleGroup, ToggleGroupItem }
