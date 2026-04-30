import { Resend } from "resend";

const resend = new Resend("re_RGpedsnp_KzcNCMdqFKgRMRBytkv4rDY1");

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "your-email@gmail.com",
    subject: "New STEMSAGE Lead 🚀",
    html: `
      <h3>New Lead</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  });

  return Response.json({ success: true });
}