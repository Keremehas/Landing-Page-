import { cn } from "@/lib/utils";

interface SectionLabelProps {
    number: string;
    label: string;
    className?: string;
}

export default function SectionLabel({ number, label, className }: SectionLabelProps) {
    return (
        <div className={cn("flex items-center gap-2 md:gap-3 mb-4 md:mb-6", className)}>
            <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm font-bold text-accent-yellow bg-brand-dark px-2.5 py-1 md:px-3 md:py-1 rounded-full">
                    {number}
                </span>
                <div className="h-px w-8 md:w-12 bg-brand-soft/30" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-text-muted uppercase tracking-wider">
                {label}
            </span>
        </div>
    );
}
