import { FullWidthContent } from "@/components/Sections";
import Image from "next/image";

export default function RecentBlogs() {
  return (
    <FullWidthContent className={"pt-12 pb-8"}>
      <h1 className="text-xl md:text-2xl mb-2">Recent Blogs</h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-[420px] md:max-w-none mx-auto">
        <div className="bg-white rounded-[18px] p-5 shadow-primary05 shadow-[0px_4px_6px_0px]">
          <Image
            src={""}
            alt=""
            className="object-cover w-full mb-5"
            width={288}
            height={167}
          />
          <p className="text-xs mb-3">12 min read</p>
          <h5 className="text-lg mb-2">
            The Science Behind Parylene: Unraveling its Mysteries
          </h5>
          <p className="text-sm mb-5">
            Learn why these pillar page examples stand out. And get tips for
            your own pillar page creation efforts.
          </p>
          <p className="text-red text-sm">
            <span>Mjubas</span>
            <span>Jun 22, 2022</span>
          </p>
        </div>
        <div className="bg-white rounded-[18px] p-5 shadow-primary05 shadow-[0px_4px_6px_0px]">
          <Image
            src={""}
            alt=""
            className="object-cover w-full mb-5"
            width={288}
            height={167}
          />
          <p className="text-xs mb-3">12 min read</p>
          <h5 className="text-lg mb-2">
            The Science Behind Parylene: Unraveling its Mysteries
          </h5>
          <p className="text-sm mb-5">
            Learn why these pillar page examples stand out. And get tips for
            your own pillar page creation efforts.
          </p>
          <p className="text-red text-sm">
            <span>Mjubas</span>
            <span>Jun 22, 2022</span>
          </p>
        </div>
        <div className="bg-white rounded-[18px] p-5 shadow-primary05 shadow-[0px_4px_6px_0px]">
          <Image
            src={""}
            alt=""
            className="object-cover w-full mb-5"
            width={288}
            height={167}
          />
          <p className="text-xs mb-3">12 min read</p>
          <h5 className="text-lg mb-2">
            The Science Behind Parylene: Unraveling its Mysteries
          </h5>
          <p className="text-sm mb-5">
            Learn why these pillar page examples stand out. And get tips for
            your own pillar page creation efforts.
          </p>
          <p className="text-red text-sm">
            <span>Mjubas</span>
            <span>Jun 22, 2022</span>
          </p>
        </div>
        <div className="bg-white rounded-[18px] p-5 shadow-primary05 shadow-[0px_4px_6px_0px]">
          <Image
            src={""}
            alt=""
            className="object-cover w-full mb-5"
            width={288}
            height={167}
          />
          <p className="text-xs mb-3">12 min read</p>
          <h5 className="text-lg mb-2">
            The Science Behind Parylene: Unraveling its Mysteries
          </h5>
          <p className="text-sm mb-5">
            Learn why these pillar page examples stand out. And get tips for
            your own pillar page creation efforts.
          </p>
          <p className="text-red text-sm">
            <span>Mjubas</span>
            <span>Jun 22, 2022</span>
          </p>
        </div>
      </div>
    </FullWidthContent>
  );
}
