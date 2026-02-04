"use client";
import Image from "components/Image";
import Tooltip from "components/Tooltip";
import P from "components/Typography/P";
import cn from "helpers/cn";
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  type Ref,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { TbHandClick } from "react-icons/tb";

interface CardContextValues {
  id: string;
  flipped: boolean;
  toggleFlipped: () => void;
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
  const [flipped, setFlipped] = useState(false);

  const contextValue = useMemo(
    () => ({
      flipped,
      id: finalId,
      toggleFlipped: () => {
        setFlipped(!flipped);
      },
    }),
    [finalId, flipped],
  );

  useEffect(() => {
    const cancelFlippedOnResize = () => {
      setFlipped(false);
    };
    window.addEventListener("resize", cancelFlippedOnResize);
    return () => {
      window.removeEventListener("resize", cancelFlippedOnResize);
    };
  }, []);

  return (
    <CardContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn(
          "bg-white",
          "flex gap-4 items-center justify-center",
          "flex-col lg:flex-row",
          "rounded-xl",
          "w-80 lg:w-200",
          "border-solid border-4 border-fern-green",
          "focus-within:border-secondary-background",
          "transition-transform transition-discrete",
          "overflow-hidden",
          flipped && "rotate-y-180",
          "relative",
          className,
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

interface CardImageProps
  extends Omit<ComponentProps<typeof Image>, "width" | "height"> {
  children: ReactNode;
}
export const CardImage = ({
  children,
  className,
  ...props
}: CardImageProps) => {
  const { flipped } = useCardContext();
  return (
    <div className={cn("relative", flipped && "hidden", className)}>
      <Image width={320} height={569} {...props} />
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}
export const CardHeader = ({ className, children }: CardHeaderProps) => (
  <div
    className={cn(
      "absolute bottom-0 left-0 bg-linear-to-b from-black/40 to-black/70 text-white flex flex-col gap-1 w-full p-5",
      className,
    )}
  >
    {children}
  </div>
);

interface CardFlipSideProps {
  className?: string;
  children: ReactNode;
}
export const CardFlipSide = ({ className, children }: CardFlipSideProps) => {
  const { id, flipped } = useCardContext();

  return (
    <div
      id={id}
      className={cn(
        "transition-opacity starting:opacity-0",
        "rotate-y-180 lg:rotate-y-0",
        !flipped && "hidden lg:block",
        className,
      )}
    >
      <P className="p-5">{children}</P>
    </div>
  );
};

export const CardFlip = () => {
  const { flipped, id, toggleFlipped } = useCardContext();

  const tooltip = flipped ? "Masquer l'avis" : "Voir l'avis";

  return (
    <Tooltip title={tooltip}>
      <button
        type="button"
        className={cn(
          "absolute z-1 m-0 inline-flex items-center justify-center",
          "border-none bg-none text-secondary-background",
          "rounded-round bg-black/70 p-6",
          "focus-visible:outline-hidden hover:cursor-pointer",
          "lg:hidden",
          "transition-opacity",
          flipped ? "opacity-40" : "animate-pulse",
        )}
        aria-controls={id}
        onClick={toggleFlipped}
      >
        <TbHandClick className="size-15" />
      </button>
    </Tooltip>
  );
};
