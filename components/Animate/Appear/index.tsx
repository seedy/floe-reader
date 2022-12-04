import { VariantProps } from "@stitches/react";
import { ComponentProps, ElementRef, forwardRef, ReactNode, useEffect, useState } from "react";
import { Root } from "./styled";

interface AppearProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
  on?: boolean;
  delay?: number;
}

const Appear = forwardRef<ElementRef<typeof Root>, AppearProps>(({ children, on = true, delay = 0, ...props }: AppearProps, forwardedRef) => {
  const [isAppear, setAppear] = useState(false);
  useEffect(() => {
    if (on) {
      const timeout = setTimeout(() => {
        setAppear(true);
      }, delay);
      return () => {
        clearTimeout(timeout);
      };
    }
    setAppear(false);
  }, [setAppear, delay, on]);
  return (
    <Root ref={forwardedRef} variant={isAppear} {...props}>
      {children}
    </Root>
  );
});

Appear.displayName = 'Appear';

export default Appear;
