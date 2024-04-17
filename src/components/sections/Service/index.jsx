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

export default function Service({ slug }) {
  const {
    data: { ourServices },
  } = useContext(DesignContext);

  const service = useMemo(() => {
    const getService = () => ourServices.filter((item) => item.slug === slug);
    const data = getService()
    console.log(data);
    if (data.length === 0) {
      notFound();
    }
    return data;
  }, [ourServices, slug]);

  return (
    <div>
      <HeroSection bgImage="/images/services/bg-parylene.jpg">
        <HeroContentBox
          title={"Parylene Conformal Coating"}
          detail={
            "We are specialists in parylene coating. Our Parylene coating services offer unparalleled protection for your components. Parylene coatings provide a thin, uniform, and pinhole-free layer of protection, ensuring excellent barrier properties against moisture, chemicals, and other environmental factors."
          }
        />

        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <AboutEachService
        title={"Parylene (Type XY)"}
        subTitle={"PARYLENE COATING"}
        detail={
          "Our Parylene N has been tested to and is certified to USP Class VI for implantable devices.Our Parylene Dimer is more than 99% pure and is MIL-I-46058C Certified and IPC-CC-830 Approved"
        }
        subTitle2={"What is Parylene?"}
        detail2={`Parylene is a common generic name for a unique series of polymers based on paraxylene. The Parylenes are formed by the pyrolysis of a di-p-xylene (dimer) in a vacuum environment which is then deposited on the cooler, room temperature substrate within the vacuum chamber. Parylene is applied in a vacuum as a gas that disperses evenly throughout the chamber to target surfaces the material forms as a clear polymer (plastic) film.
          Conformal coatings are generally applied in a liquid phase by spraying, dipping, or brushing. Parylene materials form linear, highly-crystalline polymers can be usefully produced only as coatings and films. The resulting film is thin and highly conformal, has no pinholes, can completely encapsulate a substrate to protect it from many conditions such as environmental attack, moisture, chemicals, fungus, dirt and dust
          The applications for Parylene coatings are far-reaching and include military devices, automotive parts, circuit boards, elastomers, O-rings and medical implants. (Parylene is biocompatible and FDA approved). In addition, Parylene is electrically insulating, make it perfect for LED signage, which requires lightweight coating that will protect electrical components from the elements. The defect-free coating, once solidified, is as invisible to the eye and is up to 100 times thinner than a human hair. Parylene typically ranges in thickness from 0.25-1 mil.`}
        buttonText={"Contact Us Now"}
        image={"/images/services/about-parylene.jpg"}
      />
      <FetureEachService />
    </div>
  );
}
