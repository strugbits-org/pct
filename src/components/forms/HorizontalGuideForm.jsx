"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { DesignContext } from "@/context/design";

const HorizontalGuideForm = ({ className }) => {
  const { button } = useContext(DesignContext);
  return (
    <div className="w-full">
      <form className="flex gap-x-4 items-center">
        <div className="w-full">
          <input
            type="text"
            id="name"
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Name"
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            id="email"
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Email*"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            id="phoneNumber"
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Phone Number"
          />
        </div>

        <AnimateButton
          className={`${button.icon} ${button.black} w-full ml-4 p-4 before:bg-gret hover:bg-gret`}
        >
          Download
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
              className="stroke-secondary transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8.25L9.5 12.75L14 8.25"
              className="stroke-secondary transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.75 15.75H4.25"
              className="stroke-secondary transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AnimateButton>
      </form>
    </div>
  );
};

export default HorizontalGuideForm;
