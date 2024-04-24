import { Button } from "@/components/Buttons";
import Image from "next/image";
import Link from "next/link";

export const BlogSection = () => {
  return (
    <div className="w-full">
      <h1 className="font-rob700 text-4xl mb-2">
        Conformal Coating for Extreme Environments: Challenges and Solutions
      </h1>
      <p className="font-pop500 text-[15px] mb-7">
        {"By "}
        <span className="text-red">Mjubas</span> | mar 01, 2023 | 01 min read
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-rob500 mb-3">Table of Content</h2>
        <ul className="list-disc space-y-1 ml-5">
          <li>
            <Link href={"#Introduction"}>Introduction</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="mb-6">
          <Image
            src={"/images/white-concrete-building-1838640.jpg"}
            alt=""
            className="w-auto max-h-[375px] object-cover mb-8 "
            width={782}
            height={375}
          />
          <h2 className="text-2xl font-rob500 mb-3">Introduction</h2>
          <p className="text-[13px] md:text-[15px]">
            Extreme environments pose unique challenges to electronic
            components. In this blog post, we delve into the world of conformal
            coating in extreme conditions, exploring the challenges faced, the
            significance of effective coating, and the role Parylene plays in
            providing robust solutions.{" "}
          </p>

          <div id="Introduction mb-7">
            <h2>Introduction</h2>
            <p>
              Extreme environments pose unique challenges to electronic
              components. In this blog post, we delve into the world of
              conformal coating in extreme conditions, exploring the challenges
              faced, the significance of effective coating, and the role
              Parylene plays in providing robust solutions.{" "}
            </p>
            <Image
              src={"/images/white-concrete-building-1838640.jpg"}
              alt=""
              className="w-auto max-h-[375px] object-cover my-8 "
              width={782}
              height={375}
            />
          </div>
          <div id="Introduction mb-7">
            <h2>Introduction</h2>
            <p>
              Extreme environments pose unique challenges to electronic
              components. In this blog post, we delve into the world of
              conformal coating in extreme conditions, exploring the challenges
              faced, the significance of effective coating, and the role
              Parylene plays in providing robust solutions.{" "}
            </p>
          </div>
          <div id="Introduction mb-7">
            <h2>Introduction</h2>
            <p>
              Extreme environments pose unique challenges to electronic
              components. In this blog post, we delve into the world of
              conformal coating in extreme conditions, exploring the challenges
              faced, the significance of effective coating, and the role
              Parylene plays in providing robust solutions.{" "}
            </p>
          </div>
          <div id="Introduction mb-7">
            <h2>Introduction</h2>
            <p>
              Extreme environments pose unique challenges to electronic
              components. In this blog post, we delve into the world of
              conformal coating in extreme conditions, exploring the challenges
              faced, the significance of effective coating, and the role
              Parylene plays in providing robust solutions.{" "}
            </p>
          </div>
          <div id="Introduction mb-7">
            <h2>Introduction</h2>
            <p>
              Extreme environments pose unique challenges to electronic
              components. In this blog post, we delve into the world of
              conformal coating in extreme conditions, exploring the challenges
              faced, the significance of effective coating, and the role
              Parylene plays in providing robust solutions.{" "}
            </p>
          </div>
        </div>
        {/* Line */}
        <div className="h-[1px] bg-gret28 w-full mb-6"></div>
        {/* Share Button */}
        <div className="flex justify-between gap-6 items-center flex-wrap">
          <div className="flex gap-3 items-center">
            <p>Share</p>
            <Button className="w-9 h-9 grid place-content-center rounded-md ring-red ring-1">
              <Image
                src={"/images/icons/facebook-red.svg"}
                className="w-[18px] h-auto"
                alt="Facebook"
                width={18}
                height={20}
              />
            </Button>
            <Button className="w-9 h-9 grid place-content-center rounded-md ring-red ring-1">
              <Image
                src={"/images/icons/twitter-red.svg"}
                className="w-[17px] h-auto"
                alt="Twitter"
                width={18}
                height={20}
              />
            </Button>
            <Button className="w-9 h-9 grid place-content-center rounded-md ring-red ring-1">
              <Image
                src={"/images/icons/mail-red.svg"}
                className="w-[18px] h-auto"
                alt="Mail"
                width={18}
                height={16}
              />
            </Button>
          </div>

          <p className="w-full md:w-auto text-right">02 Views</p>
        </div>
      </div>
    </div>
  );
};
