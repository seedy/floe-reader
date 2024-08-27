import { VariantProps, cva } from "class-variance-authority";
import ButtonLink from "components/Button/Link";
import styles from "components/SwipeHint/SwipeHint.module.scss";
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
	href?: string;
	className?: string;
}
const SwipeHint = ({ className, href, color = "primary" }: SwipeHintProps) => {
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
			<ButtonLink
				href={href}
				className="px-4 py-1"
				variant="link"
				color={color}
			>
				Glisser pour défiler
			</ButtonLink>
		</div>
	);
};

export default SwipeHint;
