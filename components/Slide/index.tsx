import Image, { type ImageProps } from "components/Image";
import cn from "helpers/cn";
import type { ReactNode } from "react";

interface SlideProps extends Omit<ImageProps, "fill" | "sizes"> {
	heading: ReactNode;
	headingDesktop?: ReactNode;
}
const Slide = ({ heading, headingDesktop, alt, ...rest }: SlideProps) => (
	<div className="relative flex size-full items-center">
		<div
			className={cn(
				"absolute inset-x-0 top-0 z-1 bg-gradient-to-b from-blackAlpha7 px-5 py-2",
			)}
		>
			<div className="w-full lg:max-w-[60%]">{heading}</div>
		</div>
		{headingDesktop && (
			<div
				className={cn(
					"absolute inset-x-0 bottom-0 z-1 hidden justify-end bg-gradient-to-t from-blackAlpha7 px-5 py-2 lg:flex",
				)}
			>
				<div className="max-w-[34%]">{headingDesktop}</div>
			</div>
		)}
		<div className="relative size-full">
			<Image sizes="100vw" fill alt={alt} {...rest} />
		</div>
	</div>
);

export default Slide;
