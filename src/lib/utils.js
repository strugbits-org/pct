import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs){
    console.log(inputs);
    return twMerge(clsx(inputs))    
}