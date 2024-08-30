import ButtonLink from "components/Button/Link";
import styles from "components/ScrollHint/ScrollHint.module.scss";
import SlotTrack from "components/Slot/Track";
import ScrollWheelIcon from "components/icons/ScrollWheel";
import cn from "helpers/cn";
interface ScrollHintProps {
	className?: string;
	href?: string;
}
const ScrollHint = ({ className, href }: ScrollHintProps) => {
	return (
		<div
			className={cn(
				"inline-flex items-center justify-center gap-2 px-0.5 py-0",
				styles.root,
				className,
			)}
		>
			<div className="relative inline-flex h-20 w-8 shrink-0 justify-center rounded-pill outline outline-[0.125rem] outline-primary">
				<ScrollWheelIcon
					className={cn(
						"absolute top-[0.6875rem] text-secondaryBackground",
						styles.wheel,
					)}
				/>
			</div>
			<SlotTrack name="click scrollhint link">
				<ButtonLink
					href={href}
					className="shrink-0 px-4 py-1"
					variant="link"
					color="primary"
				>
					En savoir plus
				</ButtonLink>
			</SlotTrack>
		</div>
	);
};

export default ScrollHint;
