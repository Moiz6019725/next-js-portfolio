"use server";
import emailSender from "nodemailer-email-sender";

export const sendMessage = async (e) => {
  const email = e.get("email");
  const subject = e.get("subject");
  const message = e.get("message");

   emailSender({
      mailService: 'gmail',
      senderUser: 'moizurrehman01', // YOUR Gmail username
      senderEmail: 'moizurrehman01@gmail.com', // YOUR Gmail
      senderPassword: process.env.GMAIL_APP_PASSWORD, // from .env
      receiverEmail: 'moizurrehman01@gmail.com', // YOUR Gmail
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New message from contact form</h3>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
  console.log("done");
};
