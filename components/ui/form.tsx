"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
<<<<<<< HEAD
=======
=======
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
=======
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
=======
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
<<<<<<< HEAD
  const { getFieldState, formState } = useFormContext()

=======
<<<<<<< HEAD
  const { getFieldState, formState } = useFormContext()

=======
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
=======
function FormItem({ className, ...props }: React.ComponentProps<"div">) {
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
=======
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  const { error, formItemId } = useFormField()

  return (
    <Label
<<<<<<< HEAD
      ref={ref}
      className={cn(error && "text-destructive", className)}
=======
<<<<<<< HEAD
      ref={ref}
      className={cn(error && "text-destructive", className)}
=======
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      htmlFor={formItemId}
      {...props}
    />
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
<<<<<<< HEAD
=======
=======
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
<<<<<<< HEAD
      ref={ref}
=======
<<<<<<< HEAD
      ref={ref}
=======
      data-slot="form-control"
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
=======
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
  const { formDescriptionId } = useFormField()

  return (
    <p
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children
<<<<<<< HEAD
=======
=======
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9

  if (!body) {
    return null
  }

  return (
    <p
<<<<<<< HEAD
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
=======
<<<<<<< HEAD
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
=======
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9
      {...props}
    >
      {body}
    </p>
  )
<<<<<<< HEAD
})
FormMessage.displayName = "FormMessage"
=======
<<<<<<< HEAD
})
FormMessage.displayName = "FormMessage"
=======
}
>>>>>>> 4c304cd8d7064ac4dcfb8ef37328bd47af89ad1a
>>>>>>> e150a908479b82c1b4a3f5390a8e10fb330295b9

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
