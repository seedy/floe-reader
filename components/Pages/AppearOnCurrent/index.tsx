import { ComponentProps, ElementRef, forwardRef } from "react";
import Appear from 'components/Animate/Appear';
import { useCurrentPageContext } from "components/Context/CurrentPageContext";

interface AppearOnCurrentProps extends Omit<ComponentProps<typeof Appear>, 'on'> {}

const AppearOnCurrent = forwardRef<ElementRef<typeof Appear>, AppearOnCurrentProps>(({ children, ...props }, forwardedRef) => {
  const isCurrentPage = useCurrentPageContext();

  return (
    <Appear ref={forwardedRef} {...props} on={isCurrentPage}>{children}</Appear>
  );
})

AppearOnCurrent.displayName = 'AppearOnCurrent';

export default AppearOnCurrent;