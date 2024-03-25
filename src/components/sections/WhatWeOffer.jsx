"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FullWidthContent } from "../Sections";
import Image from "next/image";
import { ourServices } from "@/lib/data";
import { SlideColorButton } from "../Buttons";
import { DesignContext } from "@/context/design";
import { useContext } from "react";
const WhatWeOffer = () => {
  const { button } = useContext(DesignContext);

  return (
    <section className="bg-white py-16">
      <FullWidthContent>
        <div className="text-center max-w-[1082px] mx-auto">
          <h2 className="text-red text-xs md:text-[16px] mb-1 tracking-widest">
            OUR SERVICES
          </h2>
          <h1 className="text-3x1 md:text-5xl mb-4">What We Offer</h1>
          <p className="text-black-content text-xs md:text-sm">
            Explore our comprehensive range of specialized coatings—meticulously
            applied for optimal protection, ensuring your electronic components
            thrive in any environment.
          </p>
        </div>
        <Splide
          aria-label="What We Offers"
          tag="div"
          options={{
            gap: "16px",
            perMove: 4,
            perPage: 4,
            breakpoints:{
              768:{
                perMove: 2,
                perPage: 2,
              },
              640:{
                perMove: 1,
                perPage: 1,
              },
            }
            // pagination: false,
            // arrows:false,
          }}
        >
          {ourServices.map((item) => {
            return (
              <SplideSlide
                key={item.id}
                className="min-w-[280px] bg-transparent shadow-md h-full pt-5"
              >
                <div className="px-5 mb-5">
                  <div className="relative mb-7">
                    <Image
                      src={item.mainImage}
                      alt=""
                      className="w-full"
                      width={280}
                      height={280}
                    />
                    <Image
                      className="absolute -bottom-[30px] right-4"
                      src={item.image}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <h1 className="mb-4" >
                    {item.title}
                  </h1>
                  <p>{item.shortDetail}</p>
                </div>
                <SlideColorButton
                  className={`${button.icon} bg-white before:bg-red text-primary hover:text-secondary justify-start`}
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
              </SplideSlide>
            );
          })}
        </Splide>
        {/* <div className="flex space-x-4">
          <div className="w-6 flex items-center">
            <button>{"<"}</button>
          </div>
          <div className="w-full flex flex-nowrap space-x-[40px] overflow-x-auto justify-left">
            <div className="bg-white min-w-[280px] h-[334px] shadow-md shadow-red"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
          </div>
          <div className="w-6 flex items-center">
            <button>{">"}</button>
          </div>
        </div> */}
      </FullWidthContent>
    </section>
  );
};

export default WhatWeOffer;
