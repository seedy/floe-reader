// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
type Data = { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      console.log('req.body', req.body);
      const testAccount = createTestAccount()
      const transporter = createTransport({
        host: "smtp.ethereal.email",
        port: process.env.MAILER_PORT,
        secure: true,
        auth: testAccount,
        // {
        // user: process.env.MAILER_USER,
        // pass: process.env.MAILER_PASSWORD,
        // }
      });
      const info = await transporter.sendMail({
        from: '"Seedy" <foo@example.com>',
        to: req.body.email,
        subject: "Hello",
        html: "<h1>Hello world</h1>",
      });

      console.log("Preview URL: %s", getTestMessageUrl(info));

      res.status(200);
    } catch (e) {
      res.status(500).json({ error: e as string })
    }
  }


}
