import ContactUs from "@/components/sections/ContactUs";
import Service from "@/components/sections/Service";
import { Fragment } from "react";

export default function ServicePage({ params: { slug } }) {
  console.log(slug);
  return (
    <Fragment>
      <Service slug={slug} />
      <ContactUs />
    </Fragment>
  );
}
