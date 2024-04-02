import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import HeroSection from "@/components/sections/HeroSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import AboutPCT from "@/components/sections/AboutPCT";
import OurAchievements from "@/components/sections/OurAchievements";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection videoSrc={"/videos/hero-video-home.mp4"}>
        <HeroContentBox
          customH1={
            <h1 className="text-3xl md:text-6xl mb-3">
              Unveiling Excellence in{" "}
              <span className="text-red">Conformal Coating</span> Solutions
              <span className="text-red">.</span>
            </h1>
          }
          detail={
            "At PCT Conformal Coating, we bring precision and innovation to the forefront, ensuring your electronic components are shielded with the highest standard of protection. Our exclusive focus lies in the specialization of Parylene coating."
          }
        />

        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <WhatWeOffer />
      <AboutPCT />
      <OurAchievements />
    </main>
  );
}
