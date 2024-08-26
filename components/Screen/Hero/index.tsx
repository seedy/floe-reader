import Avatar from "components/Avatar";
import ButtonLink from "components/Button/Link";
import Screen from "components/Screen";
import TabAndTitle from "components/Screen/Hero/TabAndTitle";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import { CALENDLY, SERVICES } from "constants/links";
import cn from "helpers/cn";

const ScreenHero = () => {
	return (
		<>
			<Screen
				className={cn(
					"flex flex-col bg-primary",
					"pt-6 lg:pt-32",
					"px-5 lg:px-0",
					"gap-10 lg:gap-32",
				)}
			>
				<div className={cn("flex flex-col gap-16")}>
					<H2 variant="h1" color="white">
						Et si on commençait par se rencontrer ?
					</H2>
					<div>
						<P color="white">
							Toutes les grandes histoires commencent par une rencontre.
						</P>
						<P color="white">Quelle est la tienne ?</P>
						<P color="white">Prenons le temps de parler de ton projet !</P>
					</div>
				</div>
				<Avatar src={""} alt="" className="size-80" />
				<div className="flex flex-col gap-8">
					<ButtonLink variant="contained" color="secondary" href={CALENDLY}>
						Je prends rendez-vous
					</ButtonLink>
					<P className="text-whiteHint">Mon calendrier t&apos;est ouvert !</P>
				</div>
				<div className={cn("")}>
					<H3>Ils m&apos;ont confié leur communication</H3>
				</div>
				{/* <div
					className={cn(
						"mx-5 mb-5 mt-6 flex grow flex-col gap-20",
						"lg:items-center",
					)}
				>
					<div className={cn("flex flex-col gap-16", "lg:gap-[7.5rem]")}>
						<div className={cn("flex flex-col gap-10", "lg:gap-20")}>
							<H2 variant="h1">Et si on commençait par se rencontrer ?</H2>
							<div>
								<P>
									Toutes les grandes histoires commencent par une rencontre.
								</P>
								<P>Quelle est la tienne ?</P>
								<P className="lg:mt-6">
									Prenons le temps de parler de ton projet !
								</P>
							</div>
						</div>
						<div
							className={cn("flex flex-col items-center", "gap-10 lg:gap-20")}
						>
							<H3>Ils m&apos;ont confié leur communication</H3>
							<div
								className={cn(
									"flex flex-col gap-5",
									"lg:flex-row lg:gap-10 lg:px-5",
								)}
							>
								<div className="flex items-center gap-4">
									<Logo height={40} src={eidLabLogo} alt="Eid Lab" />
									<P className="font-bold">Eid Lab</P>
								</div>
								<Logo height={40} src={kinobaLogo} alt="Kinoba" />
								<Logo
									height={40}
									src={savoieProcessLogo}
									alt="Savoie Process"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center gap-5">
						<ButtonLink variant="contained" href={CALENDLY}>
							Je prends rendez-vous
						</ButtonLink>
						<P className="text-textHint">Mon calendrier t&apos;est ouvert !</P>
					</div>
				</div>
				*/}
			</Screen>
			<Screen id={SERVICES.replace("#", "")}>
				<TabAndTitle />
			</Screen>
		</>
	);
};

export default ScreenHero;
