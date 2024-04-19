import React from "react";
import HeroSection from "../HeroSection";
import { HeroContentBox } from "@/components/containers";
import ContactUs from "../ContactUs";
import { GuideForm } from "@/components/forms";

export default function Blogs() {
  return (
    <React.Fragment>
      <HeroSection
        bgImage="/images/blogs-bg.jpg"
        className={"min-h-0"}
        col={"flex-col"}
      >
        <HeroContentBox
          title={"Our Blogs"}
          detail={
            "Explore our diverse range of insightful blogs covering industry trends, tips, and expert advice. Stay informed and inspired with our engaging content."
          }
          buttonText={"Get In Touch"}
          buttonLink="#"
        />
        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>

      <ContactUs />
    </React.Fragment>
  );
}
