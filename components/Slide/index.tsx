import Image, { type ImageProps } from "components/Image";
import H1 from "components/Typography/H1";
import cn from "helpers/cn";
import { type ReactNode, useId } from "react";

type SlideHeadings =
	| {
			headingTop: {
				mobile: string;
				desktop?: never;
			};
			headingBottom: ReactNode;
	  }
	| {
			headingTop: {
				mobile: string;
				desktop: string;
			};
			headingBottom?: never;
	  };

type SlideProps = Omit<ImageProps, "fill" | "sizes"> & SlideHeadings;

const Slide = ({ headingTop, headingBottom, alt, ...rest }: SlideProps) => {
	const headingId = useId();

	return (
		<div
			className="relative flex size-full items-center"
			aria-describedby={headingId}
		>
			{headingTop.mobile && (
				<div
					className={cn(
						"absolute inset-x-0 top-0 z-1 bg-gradient-to-b from-blackAlpha7 px-5 py-2 lg:hidden",
					)}
				>
					<div className="w-full lg:max-w-[60%]">
						<H1 id={headingId} color="white">
							{headingTop.mobile}
						</H1>
					</div>
				</div>
			)}
			{headingTop.desktop && (
				<div
					className={cn(
						"absolute inset-x-0 top-0 z-1 hidden bg-gradient-to-b from-blackAlpha7 px-5 py-2 lg:block",
					)}
				>
					<div className="w-full lg:max-w-[60%]">
						<H1 id={headingId} color="white">
							{headingTop.desktop}
						</H1>
					</div>
				</div>
			)}
			{headingBottom && (
				<div
					className={cn(
						"absolute inset-x-0 bottom-0 z-1 hidden justify-end bg-gradient-to-t from-blackAlpha7 px-5 py-2 lg:flex",
					)}
				>
					<div className="max-w-[34%]">{headingBottom}</div>
				</div>
			)}
			<div className="relative size-full">
				<Image sizes="100vw" fill alt={alt} {...rest} />
			</div>
		</div>
	);
};

export default Slide;
