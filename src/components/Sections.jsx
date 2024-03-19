import { cn } from "@/lib/utils"

export const FullWidthContent = ({className, children}) => {
    return (
        <div className={cn(
            "max-w-[1920px] mx-auto px-5",
            className
        )}>
            {children}
        </div>
    )
}