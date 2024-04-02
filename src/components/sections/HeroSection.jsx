"use client"

import { HeroContentBox } from "../containers";
import { FullWidthContent } from "../Sections";
import { GuideForm } from "../forms";
import { useContext } from "react";
import { DesignContext } from "@/context/design";

const HeroSection = ({
  children,
  videoSrc,
}) => {
  const { theme:{button} } = useContext(DesignContext);

  return (
    <section className="min-h-[628px] flex relative py-10 items-center justify-center">
      <FullWidthContent className={"w-full"}>
        <div className="text-xl grid lg:grid-cols-5 gap-x-24 gap-y-6 place-content-center items-center text-center lg:text-left">
          {children}
        </div>
      </FullWidthContent>

      <div className="w-full h-full absolute top-0 -z-10">
        <video loop muted autoPlay className="w-full h-full object-cover">
          <source src={`${videoSrc}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-primary45 w-full h-full absolute top-0"></div>
      </div>
    </section>
  )
};

export default HeroSection;
