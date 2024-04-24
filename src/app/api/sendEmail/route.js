// import { NextResponse } from "next/server";
// // import sgMail from "@sendgrid/mail";
// const sgMail = require("@sendgrid/mail");

// export async function POST(req) {
//   //   const body = await req.json();
//   sgMail.setApiKey(
//   );
//   const msg = {
//     to: "muhammad.hamza.strugbits@gmail.com",
//     from: "leo.hudson210@gmail.com", // Use the email address or domain you verified above
//     subject: "Sending with Twilio SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   };

//   sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });

// //   ES8
//     // (async () => {
//     //     console.log("hamza");
//     //   try {
//     //     await sgMail.send(msg);
//     //     return NextResponse({ message: "Form Submitted Successfully" });
//     //   } catch (error) {
//     //     console.error(error);

//     //     if (error.response) {
//     //         return NextResponse({ message: error.response.body });
//     //     }
//     //     return NextResponse({ message: error });
//     //   }
//     // })();

//   //   try {

//   //     console.log(validated);
//   //     return NextResponse.json({ message: "Form Submitted Successfully" });
//   //   } catch (e) {
//   //     console.error(e);
//   //     return NextResponse.json({ message: "Form not Submitted" });
//   //   }
// }

// // const sgMail = require("@sendgrid/mail");
// // sgMail.setApiKey(
// //   "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"
// // );
// // const msg = {
// //   to: "test@example.com",
// //   from: "test@example.com", // Use the email address or domain you verified above
// //   subject: "Sending with Twilio SendGrid is Fun",
// //   text: "and easy to do anywhere, even with Node.js",
// //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// // };

// // //ES8
// // (async () => {
// //   try {
// //     await sgMail.send(msg);
// //   } catch (error) {
// //     console.error(error);

// //     if (error.response) {
// //       console.error(error.response.body);
// //     }
// //   }
// // })();
