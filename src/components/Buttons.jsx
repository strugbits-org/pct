import { cn } from "@/lib/utils";

export const AnimateButton = ({ children, className }) => {
  return (
    <button
      className={cn(
        className,
        "px-12 py-3 rounded-md transition-all duration-500 relative z-[1] overflow-hidden block",
        "before:absolute before:rounded-full before:w-[2px] before:h-[2px] before:bottom-[-2px] before:left-[50%] before:transition-all before:duration-500 before:-z-[1]"
        // "hover:before:scale-[100]",
      )}
    >
      {children}
    </button>
  );
};

// export const NavigationButton = ({ children, className, handle, svgRight, svgLeft, iconRight , iconLeft, text }) => {
//   return (
//     <button
//       type="button"
//       className="flex w-full items-center justify-between text-base font-rob400 leading-6 text-white ring-white"
//       onClick={handle}
//     >
//       {svgLeft ? svg : ""}
//       {iconLeft ? <Image src={iconLeft} alt=""/> : ""}

//       Services
//       {}
//     </button>
//   );
// };
