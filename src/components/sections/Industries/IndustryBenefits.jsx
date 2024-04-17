import "@splidejs/react-splide/css";
import { FullWidthContent } from "@/components/Sections";

const IndustryBenefits = () => {
  return (
    <section className="bg-white lg:pt-10">
      <FullWidthContent className="min-h-[400px] lg:pt-10">
        <div className="bg-black px-3 py-8 md:p-10 lg:p-20 rounded-xl">
          <h1 className="text-red text-[12px] md:text-[16px] text-center tracking-widest mb-1">
            BENEFITS
          </h1>
          <h1 className="text-[28px] text-secondary md:text-5xl text-center mb-3">
            Benefits of Parylene Coating
          </h1>
          <p className="text-secondary text-center mb-16">
            The benefits of parylene coating inclues the following.
          </p>
          <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10">
            <li className="text-secondary text-center max-w-[200px]">
              <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
                01
              </div>
              <p>Micro-encapsulation capabilities</p>
            </li>
            <li className="text-secondary text-center max-w-[200px]">
              <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
                02
              </div>
              <p>Micro-encapsulation capabilities</p>
            </li>
            <li className="text-secondary text-center max-w-[200px]">
              <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
                03
              </div>
              <p>Micro-encapsulation capabilities</p>
            </li>
            <li className="text-secondary text-center max-w-[200px]">
              <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
                04
              </div>
              <p>Micro-encapsulation capabilities</p>
            </li>
            <li className="text-secondary text-center max-w-[200px]">
              <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
                05
              </div>
              <p>Micro-encapsulation capabilities</p>
            </li>
          </ul>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default IndustryBenefits;
