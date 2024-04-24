"use client";
import React from "react";
import HeroSection from "../HeroSection";
import { HeroContentBox } from "@/components/containers";
import ContactUs from "../ContactUs";
import { GuideForm } from "@/components/forms";
import { FullWidthContent } from "@/components/Sections";
import { AllBlogs } from "../Blogs/AllBlogs";
import { AnimateButton, Button } from "@/components/Buttons";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";

export default function ReadBlog() {
  const {
    theme: { button },
  } = useContext(DesignContext);
  const route = useRouter();
  return (
    <React.Fragment>
      <HeroSection
        bgImage="/images/blogs-bg.jpg"
        className={"min-h-0"}
        col={"flex-col"}
      >
        <HeroContentBox
          title={
            "Conformal Coating for Extreme Environments: Challenges and Solutions"
          }
          detail={
            "Extreme environments pose unique challenges to electronic components. In this blog post, we delve into the world of conformal coating in extreme conditions, exploring the challenges faced, the significance of effective coating, and the role Parylene plays in providing robust solutions."
          }
          buttonText={"Get In Touch"}
          buttonLink=""
        />
        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <section className="py-20">
        <FullWidthContent className="flex flex-col items-center md:items-start lg:flex-row gap-x-10">
          <div className="pt-12 px-3 w-full md:w-[354px] mx-auto">
            <div className="text-center text-secondary bg-black rounded-2xl px-4 py-9 max-w-[424px] lg:max-w-[324px] mx-auto shadow-[0px_4px_29px_0px] shadow-gret28">
              <h2 className="font-rob700 md:text-3xl mb-3 mx-2">
                Stay <span className="text-red">Connected</span> With Us
              </h2>
              <p className="mb-9 text-xs">
                Join our community and receive exclusive updates, latest news,
                and exciting content straight to your inbox
              </p>
              <div className="rounded-[20px] bg-secondary w-full flex items-center mb-4">
                <Input
                  className="ring-0 text-primary h-[40px] border-none bg-transparent placeholder:text-gret"
                  type="email"
                  id={"email"}
                  name={"email"}
                  placeholder="demomail@gmail.com"
                />
                <Button
                  className={`w-[118px] h-[42px] text-xs bg-red ${button.icon} rounded-[20px]`}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </FullWidthContent>
      </section>

      <ContactUs />
    </React.Fragment>
  );
}
