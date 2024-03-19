import { AnimateButton } from "@/components/Buttons";
import { FullWidthContent } from "@/components/Sections";
import { buttonTheme } from "@/lib/constant";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="min-h-[43vw] relative">
        <FullWidthContent>
          <div className="grid-cols-[2]">
            <div className="text-secondary">
              <h1>
                Unveiling Excellence in{" "}
                <span className="text-red">Conformal Coating</span> Solutions
                <span className="text-red">.</span>
              </h1>
              <p>
                At PCT Conformal Coating, we bring precision and innovation to
                the forefront, ensuring your electronic components are shielded
                with the highest standard of protection. Our exclusive focus
                lies in the specialization of Parylene coating.
              </p>
            </div>
            <div>
              <h1>Download Our Guide</h1>
              <p>
                Fill the form to unlock valuable insights and expertise by
                downloading our guide for free.
              </p>
              <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <AnimateButton
                  className={`${buttonTheme.red} ${buttonTheme.icon}`}
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
