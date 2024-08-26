import ButtonLink from "components/Button/Link";
import LogoFull from "components/Logo/Full";
import Socials from "components/Socials";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import cn from "helpers/cn";
import Link from "next/link";

const Footer = () => (
	<div
		className={cn(
			"flex gap-4 bg-navbar p-5",
			"items-center lg:items-start",
			"flex-col lg:flex-row",
			"lg:justify-between",
		)}
	>
		<div className="flex flex-col items-center gap-4">
			<div className="flex flex-col gap-2">
				<H2 align="left">Floé Gaubert</H2>
				<H2 align="left">Monteuse & Expérimentaliste</H2>
				<P className="hidden lg:mt-2 lg:block">
					Tes vidéos sur-mesure pour captiver ton audience
				</P>
			</div>
			<Socials />
			<div
				className={cn(
					"flex items-start self-start",
					"flex-col lg:flex-row",
					"lg:gap-5",
				)}
			>
				<Link href="/legal" passHref legacyBehavior>
					<ButtonLink variant="link">Mentions légales</ButtonLink>
				</Link>
				<Link href="/privacy" passHref legacyBehavior>
					<ButtonLink variant="link">Confidentialité</ButtonLink>
				</Link>
				<Link href="/sitemap" passHref legacyBehavior>
					<ButtonLink variant="link">Plan du site</ButtonLink>
				</Link>
			</div>
		</div>

		<LogoFull />
	</div>
);

export default Footer;
