import { cn } from "@/lib/utils"

export const FullWidth = ({classes, children}) => {
    return (
        <div className={cn(
            "max-w-[1920px] mx-auto px-[20px]",
            classes
        )}>
            {children}
        </div>
    )
}