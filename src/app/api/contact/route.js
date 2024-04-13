import zod from "zod";
import stripIndent from "strip-indent";
import { Resend } from "resend";
import EmailTemplate from "@/email-templates/EmailTemplate";
const contactFormValidator = zod.object({
  name: zod
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be less than 50 characters long" }),
  email: zod.string().email({ message: "Invalid email" }),
  message: zod
    .string()
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

export const POST = async (req, res) => {
  const data = await req.json();

  try {
    const parseResult = contactFormValidator.safeParse(data);
    if (!parseResult.success) {
      return res.status(400).json(parseResult.error.flatten());
    } else {
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
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const OPTIONS = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return res.status(200).end();
};
