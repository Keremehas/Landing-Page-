import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                // Primary CTA: Hope Yellow background with Deep Navy text
                default: "bg-accent-yellow text-brand-dark hover:bg-brand hover:text-white font-semibold shadow-sm",
                // Secondary: Brand outline with soft hover
                secondary: "border-2 border-brand text-brand bg-transparent hover:bg-brand-soft hover:text-brand-dark font-semibold",
                // Destructive: Compassion Red (limited use)
                destructive: "bg-accent-red text-white hover:bg-accent-red/90",
                // Outline: Neutral outline
                outline: "border border-brand-soft bg-background hover:bg-surface hover:text-brand",
                // Ghost: Minimal
                ghost: "hover:bg-surface hover:text-brand",
                // Link: Brand colored link
                link: "text-brand underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
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
