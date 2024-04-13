import zod from "zod";
import stripIndent from "strip-indent";
import { Resend } from "resend";
import EmailTemplate from "@/email-templates/EmailTemplate";

const contactFormValidator = zod.object({
  name: zod
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be less than 50 characters long" }),
  email: zod
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid Email",
    })
    .email({ message: "Invalid email" }),
  message: zod
    .string({
      required_error: "Message is required",
      invalid_type_error: "Invalid message",
    })
    .min(3, { message: "Message must be at least 3 characters long" })
    .max(500, { message: "Message must be less than 500 characters long" }),
});

async function sendContactFormEmail(name, email, message) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return await resend.emails.send({
    from: "Website Contact <contact@itsamaan.me>",
    to: "Amaan <amaan14999@gmail.com>",
    subject: "Website Contact Form Submission",
    text: stripIndent(`
      Message from ${name}
      ${email}
      ${message}
    `),
    react: EmailTemplate({ name, email, message }),
    reply_to: email,
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await req.json();

    const parseResult = contactFormValidator.safeParse(data);
    if (!parseResult.success) {
      return res.status(400).json(parseResult.error.flatten());
    }

    try {
      const emailResponse = await sendContactFormEmail(
        parseResult.data.name,
        parseResult.data.email,
        parseResult.data.message
      );
      if (emailResponse.error) {
        return res.status(500).json({ message: emailResponse.error.message });
      } else {
        return res.status(200).json({ message: "Email sent successfully" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "OPTIONS") {
    // Support for CORS
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    res.headers(headers);
    return res.status(200).end();
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
