import { VariantProps, cva } from "class-variance-authority";
import styles from "components/SwipeHint/SwipeHint.module.scss";
import P from "components/Typography/P";
import SwipeWheel from "components/icons/SwipeWheel";
import cn from "helpers/cn";

// VARIANTS
const swipeHintVariants = cva(
	"relative inline-flex h-8 w-20 items-center rounded-pill outline outline-[0.125rem]",
	{
		variants: {
			color: {
				primary: ["outline-primary"],
				white: ["outline-white"],
			},
		},
	},
);

// COMPONENTS
interface SwipeHintProps extends VariantProps<typeof swipeHintVariants> {
	className?: string;
}
const SwipeHint = ({ className, color = "primary" }: SwipeHintProps) => {
	const variantsClassName = swipeHintVariants({ color });
	return (
		<div
			className={cn(
				"inline-flex flex-col items-center px-0 py-0.5",
				styles.root,
				className,
			)}
		>
			<div className={variantsClassName}>
				<SwipeWheel
					className={cn(
						"absolute right-[0.6875rem] text-secondaryBackground",
						styles.wheel,
					)}
				/>
			</div>
			<P
				className="px-4 py-1 text-center font-body text-button font-bold"
				color={color}
			>
				Glisser pour défiler
			</P>
		</div>
	);
};

export default SwipeHint;
