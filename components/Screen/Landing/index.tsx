import BannerTags from "components/Banner/Tags";
import ButtonLink from "components/Button/Link";
import Carousel from "components/Carousel";
import Image from "components/Image";
import Logo from "components/Logo";
import ParallaxLeave from "components/ParallaxLeave";
import Screen from "components/Screen";
import ResponsiveHeading from "components/Screen/Landing/ResponsiveHeading";
import ScrollHint from "components/ScrollHint";
import Slide from "components/Slide";
import Socials from "components/Socials";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import { CALENDLY, PORTFOLIO } from "constants/links";
import cn from "helpers/cn";
import floeDetouree from "public/Floe-tournage-detouree.png";
import landing1 from "public/landing-1.jpg";
import landing2 from "public/landing-2.jpg";
import landing3 from "public/landing-3.jpg";
import logoSide from "public/logo-side.svg";

const hintClassName = "animate-appear opacity-0 animation-delay-[2000ms]";

const TAGS = ["Montage", "Interview", "Podcast", "Photo", "Vidéo"];

const ScreenLanding = () => {
	return (
		<Screen className="lg:pt-6">
			<Carousel
				className="lg:mx-10"
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
								desktop="Des interviews qui feront résonner ton message"
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
								desktop="Des interviews qui feront résonner ton message"
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
						<H1 color="white">
							Des interviews qui feront résonner ton message
						</H1>
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
					<H2 align="left">Monteuse & Expérimentaliste</H2>
				</div>
				<div
					className={cn(
						"hidden lg:inline-flex",
						"left-1/2 -translate-x-1/2 lg:absolute",
					)}
				>
					<ParallaxLeave>
						<ScrollHint className={hintClassName} href="#" />
					</ParallaxLeave>
				</div>
				<Logo className="h-sideLogo w-auto" alt="" priority src={logoSide} />
			</div>
			<BannerTags className="lg:hidden" tags={TAGS} />

			<div className={cn("mx-4 my-0 flex flex-col items-center", "lg:hidden")}>
				<Socials />
				<ButtonLink
					variant="contained"
					href={CALENDLY}
					className={cn("mb-5 mt-6", "bottom-24 self-center lg:absolute")}
				>
					Je prends rendez-vous
				</ButtonLink>
				<ParallaxLeave className="self-end">
					<ScrollHint className={hintClassName} href="#" />
				</ParallaxLeave>
			</div>
			{/* Banner Tags + Image */}
			<BannerTags className="hidden lg:mt-10 lg:flex" tags={TAGS} />
			<div
				className={cn(
					"relative flex items-center justify-center gap-10",
					"mt-10 lg:-mt-4",
					"flex-col lg:flex-row",
					"bg-navbar from-navbar lg:bg-transparent lg:bg-gradient-to-t",
					"pt-5 lg:pt-0",
					"lg:mx-10 lg:rounded-quote",
				)}
			>
				<div className="flex flex-col gap-8">
					<H2>Tu souhaites voir mes réalisations ?</H2>
					<ButtonLink variant="contained" href={PORTFOLIO} target="_blank">
						J&apos;explore le portfolio
					</ButtonLink>
				</div>
				<Image placeholder="empty" height={393} src={floeDetouree} alt="" />
			</div>
		</Screen>
	);
};

export default ScreenLanding;
