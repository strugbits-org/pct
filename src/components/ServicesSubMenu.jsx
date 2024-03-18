import { ourServices } from "@/lib/data";
import Image from "next/image";
import { FullWidth } from "./Sections";
import Link from "next/link";

export const SubMenu = () => {
  return (
    <div class="absolute z-10 mt-6 left-0 w-full mx-auto overflow-hidden bg-primary px-6 py-8">
      <FullWidth>
        <h2 className="text-secondary text-lg mb-8">OUR SERVICES</h2>
        <div className="flex gap-4 flex-wrap">
          {ourServices.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative w-[30vw] max-w-[440px] flex items-center justify-center ring-1 ring-red gap-x-6 rounded-s p-6 text-sm hover:bg-red"
              >
                <div className="flex-auto text-white max-w-[234px]">
                  <h4 className="text-base">{item.title}</h4>
                  <p className="mt-[16px]">{item.shortDetail}</p>
                </div>
                <div>
                  <Image
                    src={item.image}
                    alt=""
                    className="w-[75px] h-[75px] max-w-none"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </FullWidth>
    </div>
  );
};

export const MobServicesSubMenu = () => {
  return (
    <div class="w-full flex gap-1 flex-col overflow-hidden mt-3">
      {ourServices.map((item) => {
        return (
          <Link
            href="#"
            className="block text-sm font-rob300 leading-6 text-white"
            key={item.id}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
