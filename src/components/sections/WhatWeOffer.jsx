import { FullWidthContent } from "../Sections";

const WhatWeOffer = () => {
  return (
    <section className="bg-white py-16">
      <FullWidthContent>
        <div className="text-center max-w-[1082px] mx-auto">
          <h2 className="text-red text-xs md:text-[16px] mb-1 tracking-widest">
            OUR SERVICES
          </h2>
          <h1 className="text-3x1 md:text-5xl mb-4">What We Offer</h1>
          <p className="text-black-content text-xs md:text-sm">
            Explore our comprehensive range of specialized coatings—meticulously
            applied for optimal protection, ensuring your electronic components
            thrive in any environment.
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="w-6 flex items-center">
            <button>{"<"}</button>
          </div>
          <div className="w-full flex flex-nowrap space-x-[40px] overflow-x-auto justify-left">
            <div className="bg-white min-w-[280px] h-[334px] shadow-md shadow-red"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
            <div className="bg-white min-w-[280px] h-[334px] shadow-md"></div>
          </div>
          <div className="w-6 flex items-center">
            <button>{">"}</button>
          </div>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default WhatWeOffer;
