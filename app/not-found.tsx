import ButtonLinkNext from "components/Button/Link/Next";
import Screen from "components/Screen";
import H1 from "components/Typography/H1";

const NotFound = () => (
	<Screen className="flex flex-col items-center gap-16">
		<H1>Page introuvable</H1>
		<p>Cette page n&apos;existe pas.</p>
		<ButtonLinkNext className="my-auto" href="/">
			Retour à l&apos;accueil
		</ButtonLinkNext>
	</Screen>
);

export default NotFound;
