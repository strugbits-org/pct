"use client";
import { useContext } from "react";

import { FullWidthContent } from "../../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton } from "../../Buttons";

const FetureEachService = ({
  title,
  subTitle,
  subTitle2,
  detail,
  detail2,
  buttonText,
  image,
}) => {
  const {
    theme: { button },
  } = useContext(DesignContext);

  return (
    <section className="bg-white py-24">
      <FullWidthContent>
        <h1 className="text-red text-[12px] md:text-[16px] text-center mb-1">
          FEATURES
        </h1>
        <h1 className="text-[28px] md:text-5xl text-center mb-10">
          Parylene Coating Properties
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <ul className="flex flex-col gap-5">
            <li>
              <div className="flex gap-1 mb-3">
                <Image
                  src={"/images/icons/check-circle.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                <h5 className="text-[16px] md:text-lg">Fully Bio-compatible</h5>
              </div>
              <p className="text-[13px] md:text-[15px]">
                Parylene has been FDA-approved (with USP XXII Class VI
                biocompatibility rating) and is safe for use within the human
                body. Parylene coatings protect a wide array of devices and
                components, including stents, pacemakers, defibrillators,
                hearing aids, tubes, elastomers, and more
              </p>
            </li>
            <li>
              <div className="flex gap-1 mb-3">
                <Image
                  src={"/images/icons/check-circle.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                <h5 className="text-lg">Fully Bio-compatible</h5>
              </div>
              <p className="text-[15px]">
                Parylene has been FDA-approved (with USP XXII Class VI
                biocompatibility rating) and is safe for use within the human
                body. Parylene coatings protect a wide array of devices and
                components, including stents, pacemakers, defibrillators,
                hearing aids, tubes, elastomers, and more
              </p>
            </li>
            <li>
              <div className="flex gap-1 mb-3">
                <Image
                  src={"/images/icons/check-circle.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                <h5 className="text-lg">Chemically inert</h5>
              </div>
              <p className="text-[15px]">
                Parylene is chemically and biologically inert and stable, does
                not readily react with any other substance or chemical, and make
                excellent barrier materials.
              </p>
            </li>
          </ul>
          <Image src={"/images/services/bg-parylene.jpg"} className="max-w-[424px] h-full mx-auto" alt="" width={424} height={678}/>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default FetureEachService;
