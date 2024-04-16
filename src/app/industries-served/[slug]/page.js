import ContactUs from "@/components/sections/ContactUs";
import Industry from "@/components/sections/Industries";
import { Fragment } from "react";

export default function IndustriesServed({params: {slug}}) {
  return (
    <Fragment>
      <Industry slug={slug} />
      <ContactUs />
    </Fragment>
    
  );
}


