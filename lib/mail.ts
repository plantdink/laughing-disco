import { createTransport, getTestMessageUrl } from "nodemailer";

const transport = createTransport({
  host: String(process.env.MAIL_HOST),
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function emailTemplate(text: string) {
  return `
  <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <h2>Password Reset</h2>
    <p>${text}</p>
    <p>Admin team</p>
    </div>
  `;
}

export interface Envelope {
  from: string;
  to?: string[] | null;
}

export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  const info = (await transport.sendMail({
    to,
    from: "Admin@agentfieldmanual.com",
    subject: "Your password reset token",
    html: emailTemplate(`Here is your password reset token
    <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click here to reset your admin account password</a>
    `),
  })) as MailResponse;
  if (process.env.MAIL_USER.includes("ethereal.email")) {
    console.log(`Message Sent. Preview it at ${getTestMessageUrl(info)}`);
  }
}
