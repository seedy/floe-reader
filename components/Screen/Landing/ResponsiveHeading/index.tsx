import { ReactNode } from "react";

interface ResponsiveHeadingProps {
	desktop: ReactNode;
	mobile: ReactNode;
}
const ResponsiveHeading = ({ desktop, mobile }: ResponsiveHeadingProps) => {
	return (
		<>
			<span className="hidden lg:inline">{desktop}</span>
			<span className="lg:hidden">{mobile}</span>
		</>
	);
};

export default ResponsiveHeading;
