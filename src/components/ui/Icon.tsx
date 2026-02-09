import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

interface IconProps {
    icon: LucideIcon;
    size?: IconSize;
    className?: string;
    opacity?: number;
    strokeWidth?: number;
}

const sizeClasses: Record<IconSize, string> = {
    xs: "w-3.5 h-3.5 md:w-4 md:h-4",
    sm: "w-4 h-4 md:w-5 md:h-5",
    base: "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7",
    lg: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8",
    xl: "w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9",
    "2xl": "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12",
};

/**
 * Reusable Icon component with consistent sizing and visual weight
 * 
 * @param icon - Lucide icon component
 * @param size - Predefined size scale (xs, sm, base, lg, xl, 2xl)
 * @param opacity - Visual weight (0.4 - 1.0, default 0.9)
 * @param strokeWidth - Line thickness (default 1.5 for elegance)
 * 
 * @example
 * <Icon icon={Heart} size="base" opacity={0.9} className="text-brand" />
 */
export function Icon({
    icon: IconComponent,
    size = "base",
    className,
    opacity = 0.9,
    strokeWidth = 1.5,
}: IconProps) {
    return (
        <IconComponent
            className={cn(sizeClasses[size], className)}
            style={{ opacity }}
            strokeWidth={strokeWidth}
        />
    );
}
