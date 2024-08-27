import Logo from "components/Logo";
import LogoType from "components/Typography/LogoType";
import cbcLogo from "public/CBC_LOGO_48.svg";

const LogoFull = () => (
	<div className="flex items-center gap-2">
		<Logo src={cbcLogo} alt="" />
		<LogoType>Floé Gaubert</LogoType>
	</div>
);

export default LogoFull;
