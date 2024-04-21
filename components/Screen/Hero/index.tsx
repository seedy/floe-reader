import ButtonLink from "components/Button/Link";
import Logo from "components/Logo";
import Screen from "components/Screen";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import { CALENDLY } from "constants/links";
import cn from "helpers/cn";
import eidLabLogo from "public/eidlab-logo.webp";
import kinobaLogo from "public/kinoba-logo.svg";
import savoieProcessLogo from "public/savoie-process-logo.svg";

const ScreenHero = () => (
	<>
		<Screen className="flex h-svh flex-col">
			<div
				className={cn(
					"mx-5 mb-5 mt-6 flex grow flex-col gap-20",
					"lg:items-center",
				)}
			>
				<div className={cn("flex flex-col gap-16", "lg:gap-[7.5rem]")}>
					<div className={cn("flex flex-col gap-10", "lg:gap-20")}>
						<H2>
							Et si on commençait par se{" "}
							<SpanUnderline variant="primary">rencontrer ?</SpanUnderline>
						</H2>
						<div>
							<P>Toutes les grandes histoires commencent par une rencontre.</P>
							<P>Quelle est la tienne ?</P>
							<P className="lg:mt-6">
								Prenons le temps de parler de ton projet !
							</P>
						</div>
					</div>
					<div className={cn("flex flex-col gap-10", "lg:gap-20")}>
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
							<Logo height={40} src={savoieProcessLogo} alt="Savoie Process" />
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
		</Screen>
		<Screen></Screen>
	</>
);

export default ScreenHero;
