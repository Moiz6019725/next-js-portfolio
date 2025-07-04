"use server";
import {Resend} from "resend"

export const sendMessage = async (e) => {
  const email = e.get("email");
  const subject = e.get("subject");
  const message = e.get("message");
  const resend= new Resend("re_NDwuv96F_PLgLrEQoH6Qzmq8bm9n6qRfm");

  resend.emails.send({
    from: email,
    to: "moizurrehman01@gmail.com",
    subject: subject,
    html: `<p>${message}</p>`,    
  }).then((data) => {
    console.log("Email sent successfully:", data);
  }).catch((error) => {
    console.error("Error sending email:", error);
  });
};
