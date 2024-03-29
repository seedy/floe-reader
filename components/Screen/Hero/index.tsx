import ButtonLink from "components/Button/Link";
import Screen from "components/Screen";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import { CALENDLY } from "constants/links";
import Logo from "components/Logo";
import eidLabLogo from "public/eidlab-logo.webp";
import kinobaLogo from "public/kinoba-logo.svg";
import savoieProcessLogo from "public/savoie-process-logo.svg";

const ScreenHero = () => (
	<Screen className="h-svh flex flex-col">
		<div className="flex flex-col mt-6 mb-5 mx-5 justify-between grow">
			<div className="flex flex-col gap-10">
				<H2>Et si on commençait par se rencontrer ?</H2>
				<P>
					Toutes les grandes histoires commencent par une rencontre. Quelle est
					la tienne ?
					<br />
					Prenons le temps de parler de ton projet !
				</P>
				<H3>Ils m&apos;ont confié leur communication</H3>
				<div className="flex flex-col gap-5">
					<div className="gap-4 items-center">
						<Logo height={40} src={eidLabLogo} alt="Eid Lab" />
						<P className="font-bold">Eid Lab</P>
					</div>
					<Logo height={40} src={kinobaLogo} alt="Kinoba" />
					<Logo height={40} src={savoieProcessLogo} alt="Savoie Process" />
				</div>
			</div>
			<div className="flex flex-col gap-5 items-center">
				<ButtonLink variant="contained" href={CALENDLY}>
					Je prends rendez-vous
				</ButtonLink>
				<P className="text-textHint">Mon calendrier t&apos;est ouvert !</P>
			</div>
		</div>
	</Screen>
);

export default ScreenHero;
