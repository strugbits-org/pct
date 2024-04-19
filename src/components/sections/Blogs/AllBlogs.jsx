"use client";
import { Button } from "@/components/Buttons";
import Image from "next/image";
import { useContext } from "react";
import { DesignContext } from "@/context/design";

export function AllBlogs() {
  const {
    theme: { button },
    data: { whyJoinTeams },
  } = useContext(DesignContext);
  return (
    <div className="flex-1">
      <h2 className="inline h-line text-xs md:text-sm mb-1 before:bg-red before:w-[30px] before:h-[2px] pl-[36px] text-red">
        READ BLOGS
      </h2>
      <h1 className="text-[28px] md:text-5xl mb-9">All Blogs</h1>
      <div className="flex flex-col w-full gap-y-6 mb-7">
        {whyJoinTeams.map((item) => {
          return (
            <div
              key={item.id}
              className="flex max-w-[440px] md:max-w-none flex-col md:flex-row rounded-xl shadow-[1px_2px_15px_0px] shadow-gray "
            >
              <Image
                src="/images/blog-1.png"
                alt=""
                className="w-full md:w-[32vw] h-full max-width-[467px] object-cover rounded-t-lg"
                width={467}
                height={332}
              />
              <div className="px-3 py-5  md:py-7 md:px-8">
                <h4 className="font-rob700 text-[16px] md:text-[20px] mb-2">
                  Conformal Coating for Extreme Environments: Challenges and
                  Solutions
                </h4>
                <p className="text-xs md:text-gret mb-11">
                  Extreme environments pose unique challenges to electronic
                  components. In this blog post, we delve into the world of
                  conformal coating in extreme conditions, exploring the
                  challenges faced, the significance of effective coating, and
                  the role Parylene plays in providing robust solutions.
                </p>
                <Button
                  className={`${button.red} py-3 px-5 text-[10px] rounded-md mb-2`}
                >
                  READ MORE
                </Button>
                <div className="flex gap-2 items-center text-xs md:text-sm">
                  <p className="">January 16, 2024</p>
                  <ul className="list-disc pl-8">
                    <li>1 min read</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        className={`${button.red} block py-3 px-8 lg:px-12 text-[10px] rounded-md ring-1 ring-red bg-transparent text-red mb-2 mx-auto`}
      >
        Load More
      </Button>
    </div>
  );
}
