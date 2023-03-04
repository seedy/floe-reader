import { z } from 'zod';
import { procedure, router } from 'server/trpc';
import { createTransport } from 'nodemailer';
import { TRPCError } from '@trpc/server';

export const appRouter = router({
    contact: procedure
        .input(
            z.object({
                email: z.string(),
            }),
        )
        .mutation(async ({ input: { email } }) => {
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