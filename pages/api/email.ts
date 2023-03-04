// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer';
export type Data = { error: string } | { success: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const transporter = await createTransport({
        host: process.env.MAILER_HOST,
        port: process.env.MAILER_PORT,
        secure: true,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASSWORD,
        },
      });
      const info = await transporter.sendMail({
        from: '"C\' ben Correc\'" <cbencorrec@gmail.com>',
        to: req.body.email,
        subject: "Hellooo ! Formulaire de prise de contact",
        html: "<h1>Hello world</h1>",
      });

      res.status(200).json({ success: "Email envoyé à" });
    } catch (e) {
      res.status(500).json({ error: e as string })
    }
  }


}
