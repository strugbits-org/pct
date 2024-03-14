import { cn } from "@/lib/utils";

export const ButtonRed = ({ children, className }) => {
  return (
    <button
      className={cn(
        "px-12 py-3 bg-red text-secondary rounded-md transition-all relative before:absolute before:w-6 before:bg-transparent before:h-6 before:rounded-md before:bottom-[0px] before:left-[50%] hover:before:bg-white"
      )}
    >
      {children}
    </button>
  );
};
