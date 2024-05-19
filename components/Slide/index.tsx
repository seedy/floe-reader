import Image, { type ImageProps } from "components/Image";
import type { ReactNode } from "react";

interface SlideProps extends ImageProps {
	heading: ReactNode;
	headingDesktop: ReactNode;
}
const Slide = ({ heading, headingDesktop, alt, ...rest }: SlideProps) => (
	<div className="relative flex size-full items-center">
		<div className="absolute inset-x-0 top-2 z-1 px-5 py-0 lg:max-w-[60%]">
			{heading}
		</div>
		<div className="absolute bottom-2 right-0 z-1 hidden max-w-[34%] px-5 py-0 lg:block">
			{headingDesktop}
		</div>
		<Image alt={alt} {...rest} />
	</div>
);

export default Slide;
