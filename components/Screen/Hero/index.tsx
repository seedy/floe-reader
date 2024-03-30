import ButtonLink from "components/Button/Link";
import Logo from "components/Logo";
import Screen from "components/Screen";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import { CALENDLY } from "constants/links";
import eidLabLogo from "public/eidlab-logo.webp";
import kinobaLogo from "public/kinoba-logo.svg";
import savoieProcessLogo from "public/savoie-process-logo.svg";

const ScreenHero = () => (
	<Screen className="flex h-svh flex-col">
		<div className="mx-5 mb-5 mt-6 flex grow flex-col justify-between">
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
					<div className="items-center gap-4">
						<Logo height={40} src={eidLabLogo} alt="Eid Lab" />
						<P className="font-bold">Eid Lab</P>
					</div>
					<Logo height={40} src={kinobaLogo} alt="Kinoba" />
					<Logo height={40} src={savoieProcessLogo} alt="Savoie Process" />
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
);

export default ScreenHero;
