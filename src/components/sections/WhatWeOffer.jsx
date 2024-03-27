"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FullWidthContent } from "../Sections";
import Image from "next/image";
import { ourServices } from "@/lib/data";
import { SlideColorButton } from "../Buttons";
import { DesignContext } from "@/context/design";
import { useContext } from "react";
import { HorizontalGuidForm, HorizontalGuideForm } from "../forms";
const WhatWeOffer = () => {
  const { button } = useContext(DesignContext);

  return (
    <section className="bg-white py-16">
      <FullWidthContent>
        <div className="text-center max-w-[1082px] mx-auto">
          <h2 className="text-red text-xs md:text-[16px] mb-1 tracking-widest">
            OUR SERVICES
          </h2>
          <h1 className="text-3xl md:text-5xl mb-2 md:mb-4">What We Offer</h1>
          <p className="text-black-content text-[13px] md:text-sm">
            Explore our comprehensive range of specialized coatings—meticulously
            applied for optimal protection, ensuring your electronic components
            thrive in any environment.
          </p>
        </div>
        <div>
          <Splide
            aria-label="What We Offers"
            tag="div"
            options={{
              gap: 40,
              fixedHeight: "auto",
              pagination: false,
              perPage: 4.2,
              perMove: 1,
              autoplay: true,
              arrows: false,
              breakpoints: {
                768: {
                  gap: 24,
                  perMove: 1,
                  perPage: 2,
                },
                640: {
                  gap: 18,
                  perMove: 1,
                  perPage: 1,
                  focus: "center",
                },
              },
            }}
          >
            {ourServices.map((item) => {
              return (
                <SplideSlide
                  key={item.id}
                  className="min-w-[280px] bg-transparent py-10 max-w-[280px] md:max-w-none"
                >
                  <div className="bg-white shadow-card h-full-20 relative mt-5 flex flex-col">
                    <div className="relative -translate-y-5 px-5 mb-2">
                      <Image
                        src={item.mainImage}
                        alt=""
                        className="w-full"
                        width={234}
                        height={144}
                      />
                      <Image
                        src={item.image}
                        alt=""
                        className="absolute -bottom-[33px] right-10"
                        width={75}
                        height={75}
                      />
                    </div>
                    <div className="px-5 mb-[20px]">
                      <h5 className="text-lg mb-3">{item.title}</h5>
                      <p className="font-pop400 text-sm text-gret">
                        {item.shortDetail}
                      </p>
                    </div>
                    <SlideColorButton
                      className={`${button.icon} mb-0 mt-auto bg-white before:bg-red text-red hover:text-secondary justify-start`}
                    >
                      READ MORE{" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 8L22 12L18 16"
                          className="stroke-red group-hover:stroke-secondary transition-all duration-300"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12H22"
                          className="stroke-red group-hover:stroke-secondary transition-all duration-300"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </SlideColorButton>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className="bg-red relative py-[72px] px-6 rounded-[20px] text-center" >
          <h1 className="text-5xl text-secondary"><span className="text-shadow">Download</span> Our Guide</h1>
          <p className="text-[16px] font-pop text-secondary mb-12 md:mb-20">{"Unlock valuable insights and expertise by downloading our guide for free – your gateway to knowledge awaits!"}</p>
          <HorizontalGuideForm />
          <Image src="/images/shapes.svg" className="w-auto h-full absolute top-0 right-0 max-w-[663px]" alt="" width={663} height={377} />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default WhatWeOffer;
