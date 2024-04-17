"use client";
import { useContext } from "react";

import { FullWidthContent } from "../../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton, Button } from "../../Buttons";

const AboutEachIndustry2 = ({ title, detail, buttonText, details, image }) => {
  const {
    theme: { button },
  } = useContext(DesignContext);

  return (
    <section className="py-8 lg:py-12 bg-white">
      <FullWidthContent>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-x-11">
          <div className="flex-1 mt-auto mb-auto text-center lg:text-left">
            <h1 className="mb-5 text-[28px] md:text-5xl">{title}</h1>
            {/* If section have multiple details */}
            {details?.length && (
              <>
                <div className="flex gap-x-3">
                  <Button className="px-4 py-3 bg-white ring-1 ring-black font-pop400 text-sm">
                    Parylene’s Dry-Film Lubricity
                  </Button>
                  <Button className="px-4 py-3 bg-white ring-1 ring-black font-pop400 text-sm">
                    Parylene’s Barrier and Elasticity
                  </Button>
                </div>
                <p className="mb-7 md:mb-8 text-[13px] md:text-[15px]">{}</p>
              </>
            )}
            {/* If section have multiple details */}
            {detail && <p className="mb-7 md:mb-8 text-[13px] md:text-[15px]">{detail}</p>}
            <AnimateButton
              className={`${button.red} shadow-[0_1px_8px_0px_rgba(0,0,0,0.0)] shadow-red32 hover:shadow-none before:bg-primary hover:bg-primary`}
            >
              {buttonText}
            </AnimateButton>
          </div>
          <Image
            className="w-full h-auto mb-5 max-w-[674px] mx-auto lg:max-h-none lg:mb-0 lg:w-[46vw] lg:max-w-[674px] object-contain"
            src={image}
            alt={title}
            width={665}
            height={701}
          />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default AboutEachIndustry2;
