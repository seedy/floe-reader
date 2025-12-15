import { isValidElement, type ReactNode, type Ref } from "react";

export const isValidElementWithRef = (children: ReactNode) =>
  isValidElement<{ ref?: Ref<HTMLElement> } & Record<string, unknown>>(
    children,
  );
