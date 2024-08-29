import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Column } from "@react-email/column";
import { Container } from "@react-email/container";
import { Font } from "@react-email/font";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Row } from "@react-email/row";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import {
	EMAIL,
	INSTAGRAM,
	LINKEDIN,
	TEL,
	ZCAL_FIRST,
} from "../constants/links";

const colors = {
	white: "hsl(0, 0%, 100%)",
	blackAlpha26: "hsla(0, 0%, 0%, .26)",
	text: "hsl(0, 0%, 21%)",
	background: "hsl(225, 100%, 99%)",
	primary: "hsl(183, 87%, 24%)",
	outlinePrimary: "hsla(183, 87%, 24%, .3)",
	secondaryBackground: "hsl(22, 89%, 40%)",
	navbar: "hsla(158, 20%, 81%, .2)",
};

const radii = {
	round: "50%",
	rounded: ".375rem",
};

const fontSizes = {
	1: "1.75rem",
	2: "1.25rem",
	body: "1.125rem",
	button: "1rem",
};

const headings = {
	h1: {
		display: "block",
		color: colors.white,
		fontSize: fontSizes[1],
		lineHeight: 1.5,
		fontFamily: "inherit",
		fontWeight: 700,
		margin: 0,
	},
	h2: {
		display: "block",
		color: colors.text,
		fontSize: fontSizes[2],
		lineHeight: 1.5,
		fontFamily: "inherit",
		fontWeight: 700,
		margin: 0,
	},
	body: {
		display: "block",
		color: colors.text,
		fontSize: fontSizes.body,
		lineHeight: 1.5,
		fontFamily: "inherit",
		fontWeight: 400,
		margin: 0,
	},
};

const banner = {
	backgroundColor: colors.navbar,
	color: colors.text,
	padding: "0 1.25rem",
	textAlign: "center" as const,
};

const button = {
	contained: {
		display: "inline-block",
		boxSizing: "border-box" as const,
		paddingTop: "0.25rem !important",
		paddingBottom: "0.25rem !important",
		paddingLeft: "1.5rem !important",
		paddingRight: "1.5rem !important",
		minWidth: "5rem",
		maxWidth: "20rem",
		width: "100%",
		height: "2.125rem",
		borderRadius: radii.rounded,
		textTransform: "uppercase" as const,
		textDecoration: "none",
		textAlign: "center" as const,
		fontFamily: "inherit",
		fontSize: fontSizes.button,
		fontWeight: 700,
		border: "none",
		backgroundColor: colors.primary,
		margin: 0,
		color: colors.background,
		lineHeight: 1.5,
	},
	link: {
		display: "inline-block",
		boxSizing: "border-box" as const,
		padding: "0.25rem 1.5rem",
		minWidth: "5rem",
		maxWidth: "20rem",
		width: "100%",
		height: "2.125rem",
		borderRadius: radii.rounded,
		textDecoration: "none",
		textAlign: "center" as const,
		fontFamily: "inherit",
		fontSize: fontSizes.button,
		fontWeight: 700,
		border: "none",
		background: "none",
		margin: 0,
		color: colors.primary,
		lineHeight: 1.5,
	},
};

const iconButton = {
	display: "inline-block",
	textAlign: "start" as const,
	width: "3rem",
	height: "3rem",
	borderRadius: radii.round,
	color: colors.secondaryBackground,
};

const iconWrapper = {
	width: iconButton.width,
	height: iconButton.height,
};

const icon = {
	margin: "auto",
};

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "/static";

const Share = () => (
	<Html>
		<Head>
			<Font
				fontFamily="Lora"
				fallbackFontFamily="serif"
				fontWeight={400}
				fontStyle="normal"
				webFont={{
					url: "https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkq18ndeYxZ0.woff2",
					format: "woff2",
				}}
			/>
			<Font
				fontFamily="Lora"
				fallbackFontFamily="serif"
				fontWeight={700}
				fontStyle="normal"
				webFont={{
					url: "https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787z5vBJBkq18ndeYxZ0.woff2",
					format: "woff2",
				}}
			/>
			<style>
				{`
                    .title tbody {
                        vertical-align: top;
                    }
                
                `}
			</style>
		</Head>
		<Preview>[Floé Gaubert] Ma carte de visite</Preview>
		<Body style={{ backgroundColor: colors.background, color: colors.text }}>
			<Container style={{ width: 360, margin: "auto" }}>
				<Section
					style={{
						width: 360,
						height: 360,
						marginBottom: "1.25rem",
						backgroundImage: `url(${baseUrl}/landing-1-mask.webp)`,
					}}
				>
					<Heading
						style={{
							textAlign: "center",
							padding: "0 1.25rem",
							...headings.h1,
						}}
					>
						Réalisons les contenus qui feront parler de toi
					</Heading>
				</Section>
				<Section style={{ marginBottom: "1rem", paddingLeft: "1.25rem" }}>
					<Row>
						<Column>
							<Heading
								style={{ ...headings.h2, marginBottom: ".5rem" }}
								as="h2"
							>
								Floé Gaubert
							</Heading>
							<Heading style={headings.h2} as="h2">
								Monteuse & Expérimentaliste
							</Heading>
						</Column>
						<Column>
							<Img
								style={{ marginLeft: "auto" }}
								height={80}
								src={`${baseUrl}/logo-side.webp`}
								alt=""
							/>
						</Column>
					</Row>
				</Section>
				<Section style={{ ...banner, marginBottom: "1.5rem" }}>
					<Text style={headings.body}>
						Interview • Rédaction • Podcast • Photo • Vidéo
					</Text>
				</Section>
				<Section style={{ textAlign: "center", marginBottom: "4.25rem" }}>
					<Row style={{ width: 256, height: 64 }}>
						<Column>
							<Button
								aria-label="Instagram"
								style={iconButton}
								href={INSTAGRAM}
							>
								<Section style={iconWrapper}>
									<Row>
										<Img
											style={icon}
											src={`${baseUrl}/instagram-logo-icon.png`}
											alt=""
										/>
									</Row>
								</Section>
							</Button>
						</Column>
						<Column>
							<Button aria-label="LinkedIn" style={iconButton} href={LINKEDIN}>
								<Section style={iconWrapper}>
									<Row>
										<Img
											style={icon}
											src={`${baseUrl}/linkedin-logo-icon.png`}
											alt=""
										/>
									</Row>
								</Section>
							</Button>
						</Column>
						<Column>
							<Button aria-label="Email" style={iconButton} href={EMAIL}>
								<Section style={iconWrapper}>
									<Row>
										<Img
											style={icon}
											src={`${baseUrl}/envelope-closed-icon.png`}
											alt=""
										/>
									</Row>
								</Section>
							</Button>
						</Column>
						<Column>
							<Button aria-label="Téléphone" style={iconButton} href={TEL}>
								<Section style={iconWrapper}>
									<Row>
										<Img
											style={icon}
											src={`${baseUrl}/mobile-icon.png`}
											alt=""
										/>
									</Row>
								</Section>
							</Button>
						</Column>
					</Row>
				</Section>
				<Section style={{ textAlign: "center", marginBottom: "1.25rem" }}>
					<Row style={{ marginBottom: "1.25rem" }}>
						<Link style={button.link} href={baseUrl}>
							Je visite le site de Floé
						</Link>
					</Row>
					<Row>
						<Link style={button.contained} href={ZCAL_FIRST}>
							Je prends rendez-vous
						</Link>
					</Row>
				</Section>
			</Container>
		</Body>
	</Html>
);

export default Share;
