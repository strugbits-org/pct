"use client";
import { useContext } from "react";

import { FullWidthContent } from "../../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton } from "../../Buttons";
import { cn } from "@/lib/utils";

const AboutEachIndustry = ({
  title,
  subTitle,
  subTitle2,
  detail,
  detail2,
  buttonText,
  image,
}) => {
  const {
    theme: { button },
  } = useContext(DesignContext);

  return (
    <section className="pt-8 lg:pt-14 bg-white">
      <FullWidthContent>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-x-11">
          <Image
            className="w-full h-auto mb-5 max-w-[565px] mx-auto lg:max-h-none lg:mb-0 lg:w-[46vw] lg:max-w-[665px] object-contain"
            src={image}
            alt={title}
            width={665}
            height={701}
          />
          <div className="flex-1 mt-auto mb-auto text-center lg:text-left py-0 lg:py-16">
            <h2 className="inline h-line text-xs md:text-sm mb-1 before:bg-red before:w-[30px] before:h-[2px] pl-[36px] text-red">
              {subTitle}
            </h2>
            <h1 className="mb-5 text-[28px] md:text-5xl">{title}</h1>
            <p className="mb-7 md:mb-8 text-[13px] md:text-[15px] whitespace-pre-line">{detail}</p>
            <h2 className="text-[28px] md:text-3xl">{subTitle2}</h2>
            <p className="mb-7 md:mb-8 text-[13px] md:text-[15px]">{detail2}</p>
            <AnimateButton
              className={`${button.red} shadow-[0_1px_8px_0px_rgba(0,0,0,0.0)] shadow-red32 hover:shadow-none before:bg-primary hover:bg-primary`}
            >
              {buttonText}
            </AnimateButton>
          </div>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default AboutEachIndustry;
