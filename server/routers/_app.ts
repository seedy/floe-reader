import { z } from 'zod';
import { procedure, router } from 'server/trpc';
import { createTransport } from 'nodemailer';
import { TRPCError } from '@trpc/server';
import { env } from 'env.mjs';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const TRANSPORT: SMTPTransport.Options = {
    host: env.MAILER_HOST,
    port: Number(env.MAILER_PORT),
    secure: true,
    auth: {
        user: env.MAILER_USER,
        pass: env.MAILER_PASSWORD,
    },
}

export const appRouter = router({
    contact: procedure
        .input(
            z.object({
                email: z.string().email(),
            }),
        )
        .mutation(async ({ input: { email } }) => {
            try {
                const transporter = await createTransport(TRANSPORT);
                const info = await transporter.sendMail({
                    from: '"C\' ben Correc\'" <cbencorrec@gmail.com>',
                    to: email,
                    subject: "Hellooo ! Formulaire de prise de contact",
                    html: "<h1>Hello world</h1>",
                });
                return {
                    success: 'Email envoyé à'
                };
            } catch (e) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'An unexpected error occurred, please try again later.',
                    cause: e
                });
            }
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;