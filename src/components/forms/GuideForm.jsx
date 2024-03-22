
'use client'
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { DesignContext } from "@/context/design";

const GuideForm = ({ title, detail, className }) => {
  const { button } = useContext(DesignContext);
  return (
    <div
      className={cn(
        "lg:col-span-2 text-secondary mx-auto max-w-[496px] md:max-w-none",
        className && className
      )}
    >
      <h1 className="text-2xl lg:text-4xl mb-1">{title}</h1>
      <p className="font-pop400 text-xs lg:text-sm mb-3">{detail}</p>
      <form>
        <div class="mb-4">
          <input
            type="text"
            id="firstName"
            class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="First Name"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            id="lastName"
            class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Last Name"
          />
        </div>
        <div class="mb-4">
          <input
            type="email"
            id="email"
            class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Email*"
          />
        </div>
        <div class="mb-6 ">
          <input
            type="text"
            id="phoneNumber"
            class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Phone Number"
          />
        </div>

        <AnimateButton
          className={`${button.icon} ${button.red} w-full before:bg-secondary hover:bg-secondary hover:text-primary`}
        >
          Download Guide
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M9.5 12.75V2.25"
              className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8.25L9.5 12.75L14 8.25"
              className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.75 15.75H4.25"
              className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AnimateButton>
      </form>
    </div>
  );
};

export default GuideForm;
