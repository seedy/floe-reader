import { ExternalLinkIcon } from "@radix-ui/react-icons";
import styles from "components/Banner/Magnifier/Magnifier.module.scss";
import Image from "components/Image";
import SwipeHint from "components/SwipeHint";
import P from "components/Typography/P";
import cn from "helpers/cn";
import { ComponentProps } from "react";

interface BannerMagnifierProps {
	items: {
		src: ComponentProps<typeof Image>["src"];
		label: string;
		href: string;
	}[];
}

const BannerMagnifier = ({ items }: BannerMagnifierProps) => {
	return (
		<div className="flex w-full flex-col gap-10">
			<div
				className={cn(
					"m-0 flex w-full items-center bg-navbar lg:justify-center",
					"py-5 lg:p-10",
					"overflow-hidden lg:overflow-visible",
					"motion-reduce:overflow-auto motion-reduce:px-5",
				)}
			>
				<ul className={cn("m-0 flex", styles.root)}>
					{items.map(({ src, label, href }) => (
						<li className="lg:has-[:hover]:px-16" key={label}>
							<a
								className="group flex flex-col gap-6"
								href={href}
								target="_blank"
							>
								<Image
									placeholder="empty"
									className="max-w-fit lg:transition-transform lg:group-hover:scale-150"
									height={120}
									src={src}
									alt={label}
								/>
								<P className="inline-flex items-center justify-center gap-2 text-center">
									{label}
									<ExternalLinkIcon />
								</P>
							</a>
						</li>
					))}
					{items.map(({ src, label, href }) => (
						<li key={label} className="motion-reduce:hidden lg:hidden">
							<a className="flex flex-col gap-6" href={href} target="_blank">
								<Image
									className="max-w-fit"
									height={120}
									src={src}
									alt={label}
									aria-hidden={true}
								/>
								<P className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-center">
									{label}
									<ExternalLinkIcon />
								</P>
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="motion-safe:hidden lg:hidden">
				<SwipeHint />
			</div>
		</div>
	);
};

export default BannerMagnifier;
