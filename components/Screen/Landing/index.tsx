import Banner from "components/Banner";
import ButtonLink from "components/Button/Link";
import Carousel from "components/Carousel";
import Logo from "components/Logo";
import Screen from "components/Screen";
import ResponsiveHeading from "components/Screen/Landing/ResponsiveHeading";
import ScrollHint from "components/ScrollHint";
import Slide from "components/Slide";
import Socials from "components/Socials";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import { CALENDLY } from "constants/links";
import cn from "helpers/cn";
import landing1 from "public/landing-1.jpg";
import landing2 from "public/landing-2.jpg";
import landing3 from "public/landing-3.jpg";
import logoSide from "public/logo-side.svg";

const hintClassName =
	"animate-appear self-end opacity-0 animation-delay-[2000ms] lg:absolute left-1/2 -translate-x-1/2";

const ScreenLanding = () => {
	return (
		<Screen>
			<Carousel
				className="lg:mx-10 lg:mt-[5.5rem]"
				headingDesktop={
					<div className="flex grow flex-col items-center gap-2.5 text-center">
						<H2 color="secondary">
							Réalisons les contenus qui feront parler de toi
						</H2>
						<Socials />
					</div>
				}
			>
				<Slide
					headingDesktop={
						<H2 color="white">
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={
						<H1 color="white">
							<ResponsiveHeading
								desktop="Des podcasts qui feront résonner ton message"
								mobile="Réalisons les contenus qui feront parler de toi"
							/>
						</H1>
					}
					src={landing1}
					priority
					fill
					alt=""
				/>
				<Slide
					headingDesktop={
						<H2 color="white">
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={
						<H1 color="white">
							<ResponsiveHeading
								desktop="Des podcasts qui feront résonner ton message"
								mobile="Je crée une expérience unique avec du contenu percutant et chaleureux"
							/>
						</H1>
					}
					src={landing2}
					priority
					fill
					alt=""
				/>
				<Slide
					headingDesktop={
						<H2 color="white">
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={
						<H1 color="white">Des podcasts qui feront résonner ton message</H1>
					}
					src={landing3}
					priority
					fill
					alt=""
				/>
			</Carousel>
			<div
				className={cn(
					"relative flex w-full flex-row justify-between py-5 pl-5 pr-0",
					"lg:pb-3 lg:pl-10 lg:pt-8",
				)}
			>
				<div className="flex flex-col gap-authorBlock">
					<H2 align="left">Floé Gaubert</H2>
					<H2 align="left">Rédactrice & Podcasteuse</H2>
				</div>
				<ScrollHint
					className={cn("hidden lg:inline-flex", hintClassName)}
					href="#"
				/>
				<Logo className="h-sideLogo w-auto" alt="" priority src={logoSide} />
			</div>
			<Banner
				className="lg:hidden"
				tags={["Interview", "Rédaction", "Podcast", "Photo", "Vidéo"]}
			/>

			<div className={cn("mx-4 my-0 flex flex-col items-center", "lg:hidden")}>
				<Socials />
				<ButtonLink
					variant="contained"
					href={CALENDLY}
					className={cn("mb-5 mt-6", "bottom-24 self-center lg:absolute")}
				>
					Je prends rendez-vous
				</ButtonLink>
				<ScrollHint className={hintClassName} href="#" />
			</div>
			<Banner
				className="hidden lg:mt-10 lg:flex"
				tags={["Interview", "Rédaction", "Podcast", "Photo", "Vidéo"]}
			/>
		</Screen>
	);
};

export default ScreenLanding;
