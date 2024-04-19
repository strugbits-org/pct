import { cn } from "@/lib/utils"

export const FullWidthContent = ({className, children}) => {
    return (
        <div className={cn(
            "max-w-[1400px] mx-auto px-5 block",
            className 
        )}>
            {children}
        </div>
    )
}