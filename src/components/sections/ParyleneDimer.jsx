"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FullWidthContent } from "../Sections";
import Image from "next/image";
import PCTDimerCard from "./PCTDimerCard";
import { AnimateButton } from "../Buttons";
import { DesignContext } from "@/context/design";
import { useContext } from "react";

const ParyleneDimer = () => {
  const {
    theme: { button },
    data: {testinmonials}
  } = useContext(DesignContext);
  return (
    <section className="bg-white pt-[72px]">
      <FullWidthContent>
        <div className="flex flex-col lg:flex-row lg:gap-x-16">
          <div className="flex-1">
            <Image
              className="w-full h-auto mb-5 max-w-[696px] mx-auto lg:max-h-none lg:mb-0 lg:w-[48vw] lg:max-w-[696px] object-cover"
              src={"/images/parylene-dimer.png"}
              alt={"parylene-dimer"}
              width={696}
              height={632}
            />
          </div>
          <div className="flex-1 mt-auto mb-auto mx-auto text-center lg:text-left py-0 lg:py-16 max-w-[652px]  lg:mx-0">
            <h2 className="inline h-line text-xs md:text-sm mb-1 before:bg-red before:w-[30px] before:h-[2px] pl-[36px] text-red">
              PARYLENE DIMER{" "}
            </h2>
            <h1 className="mb-4 text-[28px] md:text-5xl">{"Type | N"}</h1>
            <p className="mb-5 md:mb-8 text-[13px] md:text-[15px]">
              The base structure of the parylene group. Parylene N offers the
              highest dielectric control that does not vary with changes in
              frequency.
            </p>
            <ul className="inline-block space-y-2 mb-5 pl-2 list-image-[url(/images/icons/list-check.svg)]">
              <li className="relative bg-red">
                <p className="top-1 absolute w-[max-content]">
                  Crevice Penetration
                </p>
              </li>
              <li className="relative">
                <p className="top-1 absolute w-[max-content]">Dry Lubricity</p>
              </li>
              <li className="relative">
                <p className="top-1 absolute w-[max-content]">
                  High Dielectric Strength{" "}
                </p>
              </li>
            </ul>
            <br />
            <AnimateButton
              className={`${button.red} mb-2 shadow-[1px_1px_8px_0px] shadow-red32 hover:shadow-none before:bg-primary hover:bg-primary`}
            >
              {"Purchase Now"}
            </AnimateButton>
            <p className="mb-7 md:mb-8 text-[13px] md:text-[15px]">
              {"Contact us directly to complete your purchase."}
            </p>
          </div>
        </div>
      </FullWidthContent>
      <div className="pt-36 pb-12 bg-clip-path-1 text-secondary bg-black">
        <FullWidthContent className="max-w-[1400px] flex items-center justify-between flex-col md:flex-row gap-x-44">
          <div className="space-y-2 text-center md:text-left pt-10 pb-6 md:pt-16 md:pb-8 gap-y-4">
            <h2 className="text-xs md:text-sm mb-1 tracking-widest text-red">
              TESTIMONIALS
            </h2>
            <h1 className="text-3xl lg:text-4xl">What Our Client Says</h1>
            <p className="text-xs lg:text-[16px]">
              Read testimonials from our satisfied clients, sharing their
              experiences and satisfaction with our product. Find out why they
              trust us for their needs.
            </p>
          </div>
          <div className="">
            <Splide
              aria-label="What We Offers"
              tag="div"
              className="max-w-[627px] bg-transparent"
              options={{
                arrows:false
            }}
            >
              {testinmonials.map((item) => {
                return (
                  <SplideSlide
                    key={item.id}
                    className="flex flex-col justify-center text-center pb-12"
                  >
                    <Image src={item.image} alt="" className="rounded-full mb-4 mx-auto" width={100} height={100} />
                    <p className="text-secondary text-[16px]">{item.quote}</p>
                    <h5 className="font-pop500 text-red text-lg">{item.name}</h5>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </FullWidthContent>
      </div>
    </section>
  );
};

export default ParyleneDimer;
