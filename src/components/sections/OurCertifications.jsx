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
const OurCertifications = () => {
  const {
    theme: { button },
    data: { ourCertifications },
  } = useContext(DesignContext);

  return (
    <section className="bg-white py-12 lg:py-20">
      <FullWidthContent>
        <div className="flex w-full flex-col gap-y-4 text-center justify-center items-center lg:text-left lg:flex-row lg:gap-x-4 lg:justify-between lg:items-center">
          <div className="w-full md:w-[80%] lg:min-w-[461px] lg:w-[32vw] space-y-3 md:space-y-5 mx-auto lg:ml-0">
            <h1 className="text-3xl md:text-5xl"><span className="text-red">Our</span> Certifications</h1>
            <p className="font-pop400 text-[13px] md:text-[15px]">
              Backed by a portfolio of industry-recognized certifications, we
              affirm our commitment to delivering conformal coating solutions of
              the highest standard, ensuring your trust in reliability and
              quality is well-placed.
            </p>
          </div>
          <div className="flex md:flex-wrap justify-start md:justify-center w-full gap-x-0 md:gap-6 overflow-x-auto p-2">
            {ourCertifications.map((item) => {
              return (
                <div
                  key={item.id}
                  className="grid ring-1 ring-gret28 shrink-0 place-content-center w-[114px] h-[114px] lg:w-[158px] lg:h-[158px] relative group"
                >
                  <Image
                    src={item.bgImage}
                    className="absolute w-8 h-8 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                    alt=""
                    width={212}
                    height={212}

                  />
                  <div className="w-[106px] h-[106px] grid place-content-center p-3 relative bg-white rounded-[4px]">
                    <Image src={item.logo} className="w-auto h-auto" alt="" width={75} height={75} unoptimized/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default OurCertifications;
