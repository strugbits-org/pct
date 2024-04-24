import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";
const sgMail = require("@sendgrid/mail");

export async function POST(req) {
  //   const body = await req.json();
  const msg = {
    to: "muhammad.hamza.strugbits@gmail.com",
    from: "leo.hudson210@gmail.com", // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail.send(msg).then(
    () => {
    //   return NextResponse({ message: "Email send successfully" });
    console.log("Email sent successfully");
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
        // return NextResponse({ message: error.response.body });
      }
    }
  );
}

