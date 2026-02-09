import { cn } from "@/lib/utils";

interface DividerProps {
    className?: string;
    variant?: "default" | "accent";
}

export default function Divider({ className, variant = "default" }: DividerProps) {
    return (
        <div className={cn("flex items-center justify-center my-16", className)}>
            <div className="flex items-center gap-3">
                <div className={cn(
                    "h-px w-16",
                    variant === "accent" ? "bg-accent-yellow" : "bg-brand-soft/30"
                )} />
                <div className={cn(
                    "w-2 h-2 rounded-full",
                    variant === "accent" ? "bg-accent-yellow" : "bg-brand-soft"
                )} />
                <div className={cn(
                    "h-px w-16",
                    variant === "accent" ? "bg-accent-yellow" : "bg-brand-soft/30"
                )} />
            </div>
        </div>
    );
}
