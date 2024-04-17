"use client";

import "@splidejs/react-splide/css";
import { FullWidthContent } from "@/components/Sections";
import Image from "next/image";
import { DesignContext } from "@/context/design";
import { useContext } from "react";
const IndustryExamples = () => {
  const {
    data: { ourCertifications },
  } = useContext(DesignContext);

  return (
    <section className="bg-white py-12 lg:py-20">
      <FullWidthContent>
        <div className="flex w-full flex-col gap-y-4 text-center justify-center items-center lg:text-left lg:flex-row lg:gap-x-4 lg:justify-between lg:items-center">
          <div className="w-full md:w-[80%] lg:min-w-[461px] lg:w-[32vw] md:space-y-5 mx-auto lg:ml-0">
            <h2 className="text-sm text-red tracking-widest mb-1">EXAMPLES</h2>
            <h1 className="text-3xl md:text-5xl mb-2">Elastomer Applications</h1>
            <p className="font-pop400 text-[13px] md:text-[15px]">
              These are the example of applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center w-full gap-5 overflow-x-auto p-2">
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
                    <Image
                      src={item.logo}
                      className="w-auto h-auto"
                      alt=""
                      width={75}
                      height={75}
                      unoptimized
                    />
                  </div>
                </div>
              );
            })}
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
                    <Image
                      src={item.logo}
                      className="w-auto h-auto"
                      alt=""
                      width={75}
                      height={75}
                      unoptimized
                    />
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

export default IndustryExamples;
