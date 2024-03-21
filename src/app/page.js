"use client";
import { AnimateButton } from "@/components/Buttons";
import { FullWidthContent } from "@/components/Sections";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
export default function Home() {
  const { button } = useContext(DesignContext);
  return (
    <main className="min-h-screen">
      <section className="min-h-[43vw] relative py-10">
        <FullWidthContent>
          <div className="h-full text-xl grid lg:grid-cols-5 gap-x-24 gap-y-6 place-items-center place-content-center text-center lg:text-left">
            <div className="lg:col-span-3 text-secondary">
              <h1 className="text-3xl md:text-6xl mb-3">
                Unveiling Excellence in{" "}
                <span className="text-red">Conformal Coating</span> Solutions
                <span className="text-red">.</span>
              </h1>
              <p className="font-pop400 text-xs md:text-sm mb-10">
                At PCT Conformal Coating, we bring precision and innovation to
                the forefront, ensuring your electronic components are shielded
                with the highest standard of protection. Our exclusive focus
                lies in the specialization of Parylene coating.
              </p>
              <AnimateButton
                className={`${button.red} before:bg-secondary hover:bg-secondary hover:text-primary`}
              >
                Get in Touch
              </AnimateButton>
            </div>
            <div className="lg:col-span-2 text-secondary">
              <h1 className="text-2xl lg:text-4xl mb-1">Download Our Guide</h1>
              <p className="font-pop400 text-xs lg:text-sm mb-3">
                Fill the form to unlock valuable insights and expertise by
                downloading our guide for free.
              </p>
              <form>
                <div class="mb-4">
                  <input
                    type="text"
                    id="firstName"
                    class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="lastName"
                    class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
                    placeholder="Last Name"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="email"
                    id="email"
                    class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
                    placeholder="Email*"
                  />
                </div>
                <div class="mb-6 ">
                  <input
                    type="text"
                    id="phoneNumber"
                    class="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
                    placeholder="Phone Number"
                  />
                </div>
                
                <AnimateButton
                  className={`${button.icon} ${button.red} w-full before:bg-secondary hover:bg-secondary hover:text-primary`}
                >
                  Download Guide
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M9.5 12.75V2.25"
                      className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 8.25L9.5 12.75L14 8.25"
                      className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.75 15.75H4.25"
                      className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AnimateButton>
              </form>
            </div>
          </div>
        </FullWidthContent>

        <div className="w-full h-full absolute top-0 -z-10">
          <video loop muted className="w-full h-full object-cover">
            <source src="/videos/hero-video-home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="bg-primary/45 w-full h-full absolute top-0"></div>
        </div>
      </section>
    </main>
  );
}
