import { Fragment } from "react";
import { HeroContentBox } from "@/components/containers";
import DimerProperties from "@/components/sections/DimerProperties";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";
import ParyleneDimer from "@/components/sections/ParyleneDimer";

export default function DimerAndMachineSales() {
  return (
    <Fragment>
      <HeroSection
        bgImage="/images/dimer-bg.jpg"
        className={"min-h-0"}
        col={"flex-col"}
      >
        <HeroContentBox
          title={"Dimer & Conformal Machine Sales"}
          detail={"Coating Options For All Your Protective Needs."}
          buttonText={"Buy Now"}
          buttonLink="#"
          guide={"Contact us directly to complete your purchase."}
        />
        <div className="lg:col-span-2 text-secondary mx-auto max-w-[496px] md:max-w-none">
          <Image
            src={"/images/dimer-type-c.png"}
            alt=""
            className="mt-auto -mb-10"
            width={532}
            height={538}
          />
        </div>
      </HeroSection>
      <DimerProperties />
      <ParyleneDimer />
    </Fragment>
  );
}
