import Logo from "components/Logo";
import Handwritten from "components/Typography/Handwritten";
import cbcLogo from "public/CBC_LOGO_48.svg";

const LogoFull = () => (
	<div className="flex items-center gap-2">
		<Logo src={cbcLogo} alt="" />
		<Handwritten>Floé Gaubert</Handwritten>
	</div>
);

export default LogoFull;
