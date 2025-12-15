"use client";

import Socials from "components/Socials";
import { useSearchParams } from "next/navigation";
import type { ComponentProps } from "react";

const SocialsEmailOrApp = ({
  sources = {
    email: false,
    instagram: true,
    linkedin: true,
    portfolio: true,
    tel: false,
    youtube: true,
  },
}: ComponentProps<typeof Socials>) => {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  if (source === "email") {
    return <Socials sources={{ ...sources, email: true, tel: true }} />;
  }

  return <Socials sources={sources} />;
};

export default SocialsEmailOrApp;
