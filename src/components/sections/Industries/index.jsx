"use client";

import { FullWidthContent } from "@/components/Sections";
import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import AboutEachService from "@/components/sections/Service/AboutEachService";
import FetureEachService from "@/components/sections/Service/FeatureEachService";
import HeroSection from "@/components/sections/HeroSection";
import { DesignContext } from "@/context/design";
import { useContext, useMemo } from "react";
import { notFound } from "next/navigation";
import IndustryExamples from "./Example";

export default function Industry({ slug }) {
  const {
    data: { industriesServed },
  } = useContext(DesignContext);

  const industry = useMemo(() => {
    const getIndustry = () =>
      industriesServed.filter((item) => item.slug === slug);
    const data = getIndustry();
    console.log(data);
    if (data.length === 0) {
      notFound();
    }
    return data;
  }, [industriesServed, slug]);

  return (
    <div>
      <HeroSection bgImage="/images/industries/bg-automotive.jpg">
        <HeroContentBox
          title={"Automotive"}
          detail={"Coating Options For All Your Protective Needs."}
        />

        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <AboutEachService
        title={"Parylene Conformal Coating for Automotive"}
        subTitle={"RELIABILITY THAT LASTS"}
        detail={`Due to the advances in automotive technology, modern vehicles are relying more and more on sophisticated computers and electronic systems to function properly. Providing protective conformal coating for sensitive electronic assemblies and complex components in automobiles have become increasingly necessary. The automotive industry routinely turns to Parylene coatings to provide enhanced protection for all kinds of electronic circuitry. \n
          Parylene coating forms an ultra-thin polymer layer on almost any surface, penetrating every crevice and providing a uniform coat that is unequaled by any other coating material. Parylene creates a protective, nonconductive dielectric layer that’s added to a circuit board or electronic device. Parylene conformal coatings provide a superior pinhole-free, uniform barrier to protect against dust, moisture, corrosion, chemicals, solvents, fumes, extreme temperatures and more. \n
          Vehicles will continue to trend in a more computerized direction as the years go by. Therefore, automotive companies need high-tech electronics to perform for decades inside their vehicles. Parylene is well-suited for applications that may be used in harsh automotive environments.`}
        buttonText={"Contact Us Now"}
        image={"/images/industries/about-automotive.png"}
      />
      <FullWidthContent className="min-h-[400px] pt-10">
        <div className="bg-black p-20 rounded-xl">
        <h1 className="text-red text-[12px] md:text-[16px] text-center mb-1">
          BENEFITS
        </h1>
        <h1 className="text-[28px] text-secondary md:text-5xl text-center mb-3">
          Benefits of Parylene Coating
        </h1>
        <p className="text-secondary text-center mb-16">The benefits of parylene coating inclues the following.</p>
        <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10">
          <li className="text-secondary text-center max-w-[200px]">
            <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
              01
            </div>
            <p>Micro-encapsulation capabilities</p>
          </li>
          <li className="text-secondary text-center max-w-[200px]">
            <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
              02
            </div>
            <p>Micro-encapsulation capabilities</p>
          </li>
          <li className="text-secondary text-center max-w-[200px]">
            <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
              03
            </div>
            <p>Micro-encapsulation capabilities</p>
          </li>
          <li className="text-secondary text-center max-w-[200px]">
            <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
              04
            </div>
            <p>Micro-encapsulation capabilities</p>
          </li>
          <li className="text-secondary text-center max-w-[200px]">
            <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
              05
            </div>
            <p>Micro-encapsulation capabilities</p>
          </li>
        </ul>
        </div>
      </FullWidthContent>

      <IndustryExamples />
    </div>
  );
}
