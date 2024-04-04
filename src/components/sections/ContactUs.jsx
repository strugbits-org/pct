import "@splidejs/react-splide/css";
import { FullWidthContent } from "../Sections";
import Image from "next/image";
import { GetInTouchForm } from "../forms";
const ContactUs = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <FullWidthContent className="flex flex-col-reverse  gap-10 md:gap-16 md:flex-row">
        <div className="flex-1 bg-gret">
          <Image
            src={"/images/map.jpg"}
            className="w-full h-auto md:h-full object-cover"
            alt=""
            width={698}
            height={600}
          />
        </div>
        <div className="flex-1 mb-auto mt-auto">
          <GetInTouchForm
            title={"Contact Us"}
            detail={
              "For any inquiries, questions, or commendations, please call: (814) 254 - 4376 or fill out the following form."
            }
          />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default ContactUs;
