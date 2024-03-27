import { cn } from "@/lib/utils";

const Input = ({ type, placeholder, id, className, ...props }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-1 text-left">
        {props.label && (
          <label className="text-secondary" forHtml={props.id}>
            {props.label}
          </label>
        )}
        <input
          className={cn(
            "ring-1 rounded-[4px] outline-none bg-white200 text-sm ring-white py-2 px-3 md:p-3 placeholder:text-secondary text-white",
            className && className
          )}
          type={type}
          placeholder={placeholder}
          id={id}
          {...props}
        />
        {props.errorMessage && (
          <small className="text-secondary w-full">{props.errorMessage}</small>
        )}
      </div>
    </div>
  );
};

export default Input;
