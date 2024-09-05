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
				"inline-flex items-center justify-center gap-2 px-0.5 py-0 w-full",
				styles.root,
				className,
			)}
		>
			<div className="relative inline-flex h-20 w-8 shrink-0 justify-center items-center rounded-pill outline outline-[0.125rem] outline-primary">
				<ScrollWheelIcon
					className={cn(
						"absolute top-[0.6875rem] text-secondaryBackground",
						styles.wheel,
					)}
				/>
				<SlotTrack name="click scrollhint link">
					<ButtonLink
						href={href}
						className="px-4 py-1 absolute left-10"
						variant="link"
						color="primary"
					>
						En savoir plus
					</ButtonLink>
				</SlotTrack>
			</div>
		</div>
	);
};

export default ScrollHint;
