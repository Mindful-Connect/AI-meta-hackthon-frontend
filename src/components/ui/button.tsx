import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "items-center px-4 py-2 gap-x-2 justify-center whitespace-nowrap rounded-lg text-sm transition-colors select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none font-bold",
  {
    variants: {
      variant: {
        default:
          "flex bg-primaryColor text-primaryColorText border border-primaryColor hover:brightness-90 hover:contrast-125 active:brightness-75 active:contrast-[1.75] disabled:invert disabled:contrast-[1.75] disabled:grayscale disabled:opacity-[0.15]",
        secondary:
          "flex bg-secondaryColor border border-secondaryColor text-secondaryColorText hover:brightness-90 hover:contrast-125 active:brightness-75 hover:border-secondaryColor active:contrast-[1.75] disabled:invert disabled:grayscale disabled:opacity-[0.15]",
        tertiary:
          "flex bg-secondaryColorText text-secondaryColor border border-secondaryColor/ hover:bg-primaryColor hover:text-primaryColorText hover:border-primaryColor active:brightness-90 active:contrast-125 disabled:opacity-50",
        outlined:
          "flex bg-primaryColorText text-primaryColor border border-primaryColor hover:bg-primaryColor hover:text-primaryColorText hover:border-primaryColor active:brightness-90 active:contrast-125 disabled:grayscale disabled:opacity-50",
        warning:
          "flex bg-[#E9A91E] text-white hover:brightness-90 hover:contrast-125 active:brightness-75 active:contrast-[1.75] disabled:grayscale disabled:opacity-10",
        danger:
          "flex bg-[#E30147] text-white hover:brightness-90 hover:contrast-125 active:brightness-75 active:contrast-[1.75] disabled:grayscale disabled:opacity-10",
        dangerOutlined:
          "flex text-[#E30147] border border-secondaryColor/ hover:border-[#E30147] hover:brightness-75 hover:contrast-125 active:brightness-75 active:contrast-[1.75] disabled:grayscale disabled:opacity-10",
        text: "flex text-secondaryColor hover:text-primaryColor active:brightness-90 active:contrast-125 disabled:opacity-50",
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }