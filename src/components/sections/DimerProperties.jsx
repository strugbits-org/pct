"use client";
import { useContext } from "react";

import { FullWidthContent } from "../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton } from "../Buttons";
import { motion } from "framer-motion";

const DimerProperties = () => {
  const {
    data: { ourAchievements },
  } = useContext(DesignContext);

  return (
    <section className="bg-white pt-[72px]">
      <FullWidthContent className="text-center mb-6">
        <h2 className="text-xs md:text-sm mb-1 text-red font-rob500">
          properties
        </h2>
        <h1 className="mb-11 text-[28px] md:text-5xl">Why Buy PCT’s dimer</h1>

        <div className="flex flex-col md:flex-row max-w-[1300px] items-center justify-between mx-auto gap-[52px]">
          <div className="space-y-4">
            <div className="w-[81px] h-[81px] mx-auto grid place-content-center bg-red rounded-2xl shadow-[7px_7px_0px_0px] shadow-darkRed">
              <Image
                src={"/images/icons/setting.svg"}
                alt=""
                width={52}
                height={52}
              />
            </div>
            <h1 className="font-playFair700 text-6xl">{"Compatibility"}</h1>
            <h2 className="text-[16px] lg:text-[20px]">{"PCT dimer works flawlessly with any parylene deposition equipment."}</h2>
          </div>
          <div className="space-y-4">
            <div className="w-[81px] h-[81px] mx-auto grid place-content-center bg-red rounded-2xl shadow-[7px_7px_0px_0px] shadow-darkRed">
              <Image
                src={"/images/icons/setting.svg"}
                alt=""
                width={52}
                height={52}
              />
            </div>
            <h1 className="font-playFair700 text-6xl">{"Purity"}</h1>
            <h2 className="text-[16px] lg:text-[20px]">{"PCT'S dimer is more than 99.9% pure. The purest available on the market."}</h2>
          </div>
          <div className="space-y-4">
            <div className="w-[81px] h-[81px] mx-auto grid place-content-center bg-red rounded-2xl shadow-[7px_7px_0px_0px] shadow-darkRed">
              <Image
                src={"/images/icons/setting.svg"}
                alt=""
                width={52}
                height={52}
              />
            </div>
            <h1 className="font-playFair700 text-6xl">{"Competitive Price"}</h1>
            <h2 className="text-[16px] lg:text-[20px]">{"Great quality product, made affordable for you. "}</h2>
          </div>
        </div>
      </FullWidthContent>
      <div className="min-h-[354px] bg-clip-path-1 text-secondary bg-[url('/images/bg_our_achievements.jpg')] bg-no-repeat bg-cover bg-bottom">
        <FullWidthContent className="max-w-[1202px] flex items-end justify-between flex-col md:flex-row pt-10 pb-6 md:pt-24 md:pb-6 gap-y-4 gap-x-44 mt-auto mb-auto">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl lg:text-4xl">Reliability That Lasts.</h4>
            <p className="text-xs lg:text-[16px]">
              Coatings and Dimers produced by PCT are certified biocompatible
              per USP Class VI.
            </p>
          </div>
          <div className="">
            <Image
              src={"/images/usp.png"}
              alt="USP"
              className="mr-0 mt-auto mb-auto"
              width={206}
              height={177}
            />
          </div>
        </FullWidthContent>
      </div>
    </section>
  );
};

export default DimerProperties;
