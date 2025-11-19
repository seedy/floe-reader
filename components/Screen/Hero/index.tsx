import Avatar from "components/Avatar";
import ButtonLink from "components/Button/Link";
import Image from "components/Image";
import BgParallax from "components/Quote/BgParallax";
import Screen from "components/Screen";
import QuoteHero from "components/Screen/Hero/Quote";
import SlotTrack from "components/Slot/Track";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import { SERVICES, ZCAL_FIRST } from "constants/links";
import cn from "helpers/cn";
import hero from "public/hero.webp";
import quoteBgParallax from "public/quote-bg-parallax.webp";

const ScreenHero = () => {
	return (
		<div className="flex flex-col">
			<Screen
				className={cn(
					"flex flex-col bg-primary",
					"pt-6 lg:pt-32",
					"px-5 lg:px-0",
					"items-center lg:items-start",
					"gap-10 lg:gap-32",
				)}
			>
				<div
					className={cn(
						"flex",
						"gap-10 lg:gap-32",
						"flex-col lg:flex-row",
						"items-center",
						"lg:relative lg:mb-32 lg:w-full lg:justify-center lg:pl-10",
					)}
				>
					<H2
						variant="h1"
						color="white"
						className={cn("absolute top-0 hidden self-center", "lg:block")}
					>
						Et si on commençait par se rencontrer ?
					</H2>
					<div
						className={cn(
							"flex shrink-0 flex-col items-center",
							"gap-12 lg:gap-20",
							"lg:grow",
						)}
					>
						<H2 variant="h1" color="white" className="lg:hidden">
							Et si on commençait par se rencontrer ?
						</H2>
						<div className={cn("flex flex-col items-center", "gap-2 lg:gap-4")}>
							<div className="flex flex-col items-center">
								<P className="text-center" color="white">
									Toutes les grandes histoires commencent par une rencontre.
								</P>
								<P color="white">Quelle est la tienne ?</P>
							</div>
							<P color="white">Prenons le temps de parler de ton projet !</P>
						</div>
						<div
							className={cn("hidden flex-col items-center gap-8", "lg:flex")}
						>
							<SlotTrack name="click hero cta first">
								<ButtonLink
									variant="contained"
									color="secondary"
									href={ZCAL_FIRST}
								>
									Je prends rendez-vous
								</ButtonLink>
							</SlotTrack>
							<P className="text-white/80">
								Mon calendrier t&apos;est ouvert !
							</P>
						</div>
					</div>
					<div
						className={cn(
							"flex rounded-avatar bg-transparent",
							"lg:grow lg:rounded-r-none lg:bg-black/70",
						)}
					>
						<Avatar
							src={hero}
							alt=""
							className={cn(
								"aspect-social",
								"w-80 lg:h-128 lg:w-auto",
								"lg:rounded-r-none",
							)}
						/>
					</div>
				</div>
				<div
					className={cn("mb-10 flex flex-col items-center gap-8", "lg:hidden")}
				>
					<SlotTrack name="click hero cta first">
						<ButtonLink
							full
							variant="contained"
							color="secondary"
							href={ZCAL_FIRST}
						>
							Je prends rendez-vous
						</ButtonLink>
					</SlotTrack>
					<P className="text-white/80">Mon calendrier t&apos;est ouvert !</P>
				</div>
			</Screen>
			<Screen
				className="lg:pb-8 flex flex-col gap-48"
				id={SERVICES.replace("#", "")}
			>
				<BgParallax className="h-svh relative">
					<Image src={quoteBgParallax} fill alt="" />
				</BgParallax>
				<QuoteHero />
			</Screen>
		</div>
	);
};

export default ScreenHero;
