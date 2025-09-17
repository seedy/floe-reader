"use client";

import Socials from "components/Socials";
import { useSearchParams } from "next/navigation";
import { ComponentProps } from "react";

interface SocialsEmailOrAppProps extends ComponentProps<typeof Socials> {}
const SocialsEmailOrApp = ({
	sources = {
		instagram: true,
		linkedin: true,
		portfolio: true,
		youtube: true,
		email: false,
		tel: false,
	},
}: SocialsEmailOrAppProps) => {
	const searchParams = useSearchParams();
	const source = searchParams.get("source");

	if (source === "email") {
		return <Socials sources={{ ...sources, email: true, tel: true }} />;
	}

	return <Socials sources={sources} />;
};

export default SocialsEmailOrApp;
