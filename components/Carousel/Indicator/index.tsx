import { cva } from "class-variance-authority";
import cn from "helpers/cn";
import { ComponentProps, forwardRef } from "react";

const indicatorVariants = cva(
	"aspect-square h-auto w-indicator text-secondaryBackground",
	{
		variants: {
			active: {
				true: ["fill-secondaryBackground"],
			},
		},
	},
);

interface CarouselIndicatorProps extends ComponentProps<"button"> {
	active?: boolean;
}
const CarouselIndicator = forwardRef<HTMLButtonElement, CarouselIndicatorProps>(
	({ active, ...props }, forwardedRef) => {
		const indicatorVariantsClassName = indicatorVariants({ active });
		return (
			<button
				ref={forwardedRef}
				className={cn(
					"m-0 inline-flex items-center justify-center rounded-round border-none text-secondaryBackground focus-visible:outline-outlineSecondary",
					"hover:cursor-pointer",
					"p-2 sm:p-3 md:p-4 lg:p-3 xl:p-5 2xl:p-7",
				)}
				{...props}
			>
				<svg
					width="13"
					height="18"
					viewBox="0 0 13 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={indicatorVariantsClassName}
				>
					<path
						stroke="currentColor"
						d="M8.583 14.9612C8.00783 15.7404 7.41033 16.4332 6.62508 16.8777C6.60624 16.8765 6.58737 16.8748 6.56755 16.8723C6.50727 16.8336 6.44725 16.7965 6.39438 16.7637C6.35748 16.7409 6.32407 16.7202 6.29647 16.7027C6.19559 16.6385 6.12996 16.5909 6.08001 16.5433C3.98684 14.5492 2.60309 12.1005 1.67864 9.35244C1.51023 8.85181 1.39366 8.35035 1.27108 7.82301C1.21666 7.58887 1.16105 7.34963 1.09918 7.10309C1.09921 6.37999 1.10013 5.6654 1.13112 4.90009C1.59493 3.35576 2.60161 2.39488 4.03262 1.77986C4.34173 1.64701 4.64862 1.55583 4.98516 1.45584C5.12972 1.41289 5.27974 1.36832 5.43776 1.31812C6.15757 1.31816 6.86904 1.31936 7.63292 1.35184C7.77185 1.38796 7.89633 1.41273 8.00179 1.43359C8.12653 1.45826 8.21524 1.47582 8.29908 1.49991C9.85162 1.94587 11.0594 2.71243 11.7179 4.14334C11.8291 4.38501 11.9011 4.62157 11.9831 4.891C12.0186 5.00764 12.0559 5.13045 12.0992 5.26249C12.099 5.62329 12.0967 5.9721 12.0657 6.36854C11.9766 6.77084 11.9016 7.16868 11.8294 7.55133C11.8071 7.66919 11.7852 7.78561 11.7631 7.90027C11.6665 8.4037 11.5674 8.881 11.4351 9.34357C10.8519 11.3823 9.85123 13.2431 8.583 14.9612Z"
					/>
				</svg>
			</button>
		);
	},
);

CarouselIndicator.displayName = "CarouselIndicator";

export default CarouselIndicator;
