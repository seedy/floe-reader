'use server'

import { env } from 'env.mjs';
import { z } from 'zod';
import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Share from 'emails/Share';
import { render } from "@react-email/render"

const TRANSPORT: SMTPTransport.Options = {
    host: env.MAILER_HOST,
    port: Number(env.MAILER_PORT),
    secure: true,
    auth: {
        user: env.MAILER_USER,
        pass: env.MAILER_PASSWORD,
    },
}

const ShareHtml = render(Share())

const UNLOCK_INPUT_SCHEMA = z.object({
    password: z.string().min(1),
})

export const unlock = async (_prevState: any, formData: FormData) => {
    try {
        const { password } = UNLOCK_INPUT_SCHEMA.parse({ password: formData.get('password') });
        if (password !== env.SHARE_PASSWORD) {
            throw new Error();
        }
    } catch (e) {
        return {
            error: 'Mot de passe incorrect',
        }
    }
    return {
        success: 'Déverrouillé'
    }
}

const SHARE_INPUT_SCHEMA = z.object({
    email: z.string().email(),
});

export const share = async (formData: FormData) => {
    const { email } = SHARE_INPUT_SCHEMA.parse(formData);
    const transporter = await createTransport(TRANSPORT);
    const info = await transporter.sendMail({
        from: '"C\' ben Correc\'" <cbencorrec@gmail.com>',
        to: email,
        subject: "Suite à notre rencontre",
        html: ShareHtml,
    });
    return {
        success: 'Email envoyé à'
    };
}