import { downloadGuideSchema } from "@/lib/forms/downloadGuideSchema";
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
// const sgMail = require("@sendgrid/mail");

export async function POST(req) {
  const body = await req.json();

  try {
    // const validated = downloadGuideSchema.parse(body);


    return NextResponse.json({ message: "Form Submitted Successfully" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: e });
  }
}
