import { ComponentProps } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import IconButton from "components/IconButton";
import styles from "components/Pages/Arrow/Arrow.module.css";

interface PagesArrowProps extends ComponentProps<typeof IconButton> {
  left?: boolean;
}
const PagesArrow = ({ left = false, ...props }: PagesArrowProps) => {
  const className = variantsToClassNameStyles({ left }, styles);
  return (
    <IconButton className={`${styles.root} ${className}`} {...props}>
      {left ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  );
};

export default PagesArrow;
