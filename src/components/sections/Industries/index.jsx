"use client";

import { FullWidthContent } from "@/components/Sections";
import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import FetureEachService from "@/components/sections/Service/FeatureEachService";
import HeroSection from "@/components/sections/HeroSection";
import { DesignContext } from "@/context/design";
import { useContext, useMemo } from "react";
import { notFound } from "next/navigation";
import IndustryExamples from "./Example";
import AboutEachIndustry from "./AboutEachIndustry";
import AboutEachIndustry2 from "./AboutEachIndustry2";
import IndustryBenefits from "./IndustryBenefits";

export default function Industry({ slug }) {
  const {
    data: { industriesServed },
  } = useContext(DesignContext);

  const industry = useMemo(() => {
    const getIndustry = () =>
      industriesServed.filter((item) => item.slug === slug);
    const data = getIndustry();
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
      <AboutEachIndustry
        title={"Parylene Conformal Coating for Automotive"}
        subTitle={"RELIABILITY THAT LASTS"}
        detail={`Due to the advances in automotive technology, modern vehicles are relying more and more on sophisticated computers and electronic systems to function properly. Providing protective conformal coating for sensitive electronic assemblies and complex components in automobiles have become increasingly necessary. The automotive industry routinely turns to Parylene coatings to provide enhanced protection for all kinds of electronic circuitry. \n
          Parylene coating forms an ultra-thin polymer layer on almost any surface, penetrating every crevice and providing a uniform coat that is unequaled by any other coating material. Parylene creates a protective, nonconductive dielectric layer that’s added to a circuit board or electronic device. Parylene conformal coatings provide a superior pinhole-free, uniform barrier to protect against dust, moisture, corrosion, chemicals, solvents, fumes, extreme temperatures and more. \n
          Vehicles will continue to trend in a more computerized direction as the years go by. Therefore, automotive companies need high-tech electronics to perform for decades inside their vehicles. Parylene is well-suited for applications that may be used in harsh automotive environments.`}
        buttonText={"Contact Us Now"}
        image={"/images/industries/about-automotive.png"}
      />
      <AboutEachIndustry2
        title={"Parylene Conformal Coating for Automotive"}
        subTitle={"RELIABILITY THAT LASTS"}
        detail={`Due to the advances in automotive technology, modern vehicles are relying more and more on sophisticated computers and electronic systems to function properly. Providing protective conformal coating for sensitive electronic assemblies and complex components in automobiles have become increasingly necessary. The automotive industry routinely turns to Parylene coatings to provide enhanced protection for all kinds of electronic circuitry. \n
          Parylene coating forms an ultra-thin polymer layer on almost any surface, penetrating every crevice and providing a uniform coat that is unequaled by any other coating material. Parylene creates a protective, nonconductive dielectric layer that’s added to a circuit board or electronic device. Parylene conformal coatings provide a superior pinhole-free, uniform barrier to protect against dust, moisture, corrosion, chemicals, solvents, fumes, extreme temperatures and more. \n
          Vehicles will continue to trend in a more computerized direction as the years go by. Therefore, automotive companies need high-tech electronics to perform for decades inside their vehicles. Parylene is well-suited for applications that may be used in harsh automotive environments.`}
        buttonText={"Contact Us Now"}
        image={"/images/industries/spray.jpg"}
      />
      <IndustryBenefits />

      <IndustryExamples />
    </div>
  );
}
