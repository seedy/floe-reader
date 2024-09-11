import ButtonLink from "components/Button/Link";
import { MAIN_CONTENT } from "constants/links";

const SkipLink = () => (
	<ButtonLink
		className="absolute left-1/2 -translate-x-1/2 translate-y-[-200%] transition-transform focus:translate-y-0"
		href={MAIN_CONTENT}
		variant="outlined"
	>
		Sauter vers le contenu principal
	</ButtonLink>
);

export default SkipLink;
