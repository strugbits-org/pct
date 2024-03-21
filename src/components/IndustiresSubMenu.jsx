import { industriesServed } from "@/lib/data";
import { FullWidthContent } from "./Sections";
import Link from "next/link";

export const IndustriesSubMenu = () => {
  return (
    <div className="absolute z-10 mt-6 left-0 w-full mx-auto overflow-hidden bg-primary px-6 py-8">
      <FullWidthContent>
        <h2 className="text-secondary text-lg mb-8">Industries Served</h2>
        <div className="flex gap-4 flex-wrap">
          {industriesServed.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative w-[23vw] max-w-[324px] flex items-center justify-center ring-1 ring-red gap-x-6 rounded-s p-6 text-sm hover:bg-red"
              >
                <div className="flex-auto text-white">
                  <h4 className="text-base">{item.title}</h4>
                  <p className="mt-[16px]">{item.shortDetail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </FullWidthContent>
    </div>
  );
};

export const MobIndustriesSubMenu = () => {
  return (
    <div className="w-full flex gap-1 flex-col overflow-hidden mt-3">
        {industriesServed.map((item) => {
          return (
            <Link
              href="#"
              className="block text-sm font-rob300 text-white"
              key={item.id}
            >
              {item.title}
            </Link>
          );
        })}
    </div>
  );
};
