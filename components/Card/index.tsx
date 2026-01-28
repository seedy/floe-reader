import { ChevronDownIcon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import Image from "components/Image";
import cn from "helpers/cn";
import {
  type ComponentProps,
  createContext,
  type Dispatch,
  type ReactNode,
  type Ref,
  type SetStateAction,
  useContext,
  useId,
  useMemo,
  useState,
} from "react";

interface CardContextValues {
  id: string;
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}
const CardContext = createContext<CardContextValues | null>(null);
const useCardContext = () => {
  const context = useContext(CardContext);

  if (context === null) {
    throw new Error("useCardContext must be used within CardRoot!");
  }

  return context;
};

interface CardRootProps {
  className?: string;
  id?: string;
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
}
export const CardRoot = ({ id, ref, className, children }: CardRootProps) => {
  const internalId = useId();
  const finalId = id ?? internalId;
  const [expanded, setExpanded] = useState(false);

  const contextValue = useMemo(
    () => ({
      expanded,
      id: finalId,
      setExpanded,
    }),
    [finalId, expanded],
  );

  const onMouseEnter = () => {
    setExpanded(true);
  };

  const onMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <CardContext.Provider value={contextValue}>
      {/** biome-ignore lint/a11y/noStaticElementInteractions: wanted */}
      <div
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          "group/card",
          "flex flex-col gap-4",
          "rounded-xl pb-4 max-w-sm",
          className,
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

interface CardImageProps extends ComponentProps<typeof Image> {
  children: ReactNode;
}
export const CardImage = ({
  children,
  className,
  ...props
}: CardImageProps) => (
  <div className={cn("relative", className)}>
    <Image {...props} />
    {children}
  </div>
);

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}
export const CardHeader = ({ className, children }: CardHeaderProps) => (
  <div
    className={cn(
      "absolute bottom-0 left-0 bg-black/70 text-white flex flex-col gap-1",
      className,
    )}
  >
    {children}
  </div>
);

interface CardFooterProps {
  className?: string;
  children: ReactNode;
}
export const CardFooter = ({ className, children }: CardFooterProps) => (
  <div className={cn("p-4 bg-white", className)}>{children}</div>
);

interface CardContentProps {
  className?: string;
  children: ReactNode;
}
export const CardContent = ({ className, children }: CardContentProps) => {
  const { id, expanded } = useCardContext();

  return (
    <div id={id} className={cn("bg-white", className)}>
      <p
        className={cn(
          "line-clamp-3 m-4 transition-discrete transition-[display]",
          expanded && "line-clamp-none",
        )}
      >
        {children}
      </p>
    </div>
  );
};

export const CardExpand = () => {
  const { expanded, id, setExpanded } = useCardContext();

  const onClick = () => {
    setExpanded((prev) => !prev);
  };

  const tooltip = expanded ? "Masquer l'avis" : "Voir l'avis";

  return (
    <IconButton
      aria-expanded={expanded}
      aria-controls={id}
      onClick={onClick}
      tooltip={tooltip}
      size="small"
    >
      <ChevronDownIcon
        className={cn("transition-transform", expanded && "rotate-180")}
      />
    </IconButton>
  );
};
