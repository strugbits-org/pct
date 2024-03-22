import { cn } from "@/lib/utils"
import { useMemo } from "react"

export const FullWidthContent = ({className, children}) => {
    const _class = useMemo(() => {
        console.log(className);
        if(className) return className
        return ""
    }, [className])
    return (
        <div className={cn(
            "max-w-[1920px] mx-auto px-5 block",
            className 
        )}>
            {children}
        </div>
    )
}