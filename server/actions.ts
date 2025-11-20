"use server";

import { render } from "@react-email/render";
import Share from "emails/Share";
import { env } from "env.mjs";
import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { z } from "zod";

const TRANSPORT: SMTPTransport.Options = {
	host: env.MAILER_HOST,
	port: Number(env.MAILER_PORT),
	secure: true,
	auth: {
		user: env.MAILER_USER,
		pass: env.MAILER_PASSWORD,
	},
};

const UNLOCK_INPUT_SCHEMA = z.object({
	password: z.string().min(1),
});

export const unlock = async (_prevState: unknown, formData: FormData) => {
	try {
		const { password } = UNLOCK_INPUT_SCHEMA.parse({
			password: formData.get("password"),
		});
		if (password !== env.SHARE_PASSWORD) {
			throw new Error();
		}
	} catch {
		return {
			error: "Mot de passe incorrect",
		};
	}
	return {
		success: "Déverrouillé",
	};
};

const SHARE_INPUT_SCHEMA = z.object({
	email: z.string().email(),
	extra: z.string().optional(),
});

export const share = async (_prevState: unknown, formData: FormData) => {
	try {
		const ShareHtml = await render(Share());
		const { email, extra } = SHARE_INPUT_SCHEMA.parse({
			email: formData.get("email"),
			extra: formData.get("extra"),
		});
		const transporter = await createTransport(TRANSPORT);
		await transporter.sendMail({
			from: env.MAILER_USER,
			to: email,
			subject: "Suite à notre rencontre",
			html: ShareHtml,
		});
		await transporter.sendMail({
			from: env.MAILER_USER,
			to: env.MAILER_USER,
			subject: "Carte de visite envoyée !",
			text: `${email}\n${extra}`,
		});
	} catch (e) {
		return {
			error:
				e instanceof z.ZodError ? "Email invalide" : "Une erreur est survenue",
		};
	}
	return {
		success: "Email envoyé à",
	};
};
