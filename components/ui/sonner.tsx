"use client"

import { useTheme } from "next-themes"
<<<<<<< HEAD
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>
=======
import { Toaster as Sonner, ToasterProps } from "sonner"
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
<<<<<<< HEAD
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
=======
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
      {...props}
    />
  )
}

export { Toaster }
