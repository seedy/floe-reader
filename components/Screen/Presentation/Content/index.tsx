"use client";
import Avatar from "components/Avatar";
import ParallaxAvatar from "components/Avatar/Parallax";
import styles from "components/Screen/Presentation/Content/Content.module.scss";
import H2 from "components/Typography/H2";
import Subtitle from "components/Typography/Subtitle";
import cn from "helpers/cn";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import dynamic from "next/dynamic";
import { Children, type ComponentProps, type ReactNode } from "react";

const PresentationContentMotionViewTimeline = dynamic(
  () => import("components/Screen/Presentation/Content/MotionViewTimeline"),
);

interface ContentProps
  extends Pick<ComponentProps<typeof Avatar>, "src" | "alt"> {
  title: ReactNode;
  children: ReactNode;
  catcher: ReactNode;
  summary?: ReactNode[];
  cta?: ReactNode;
}
const Content = ({
  title,
  children,
  catcher,
  summary,
  cta,
  src,
  alt,
}: ContentProps) => {
  const supportsViewTimeline = useSupportsViewTimeline();
  return (
    <>
      <ParallaxAvatar src={src} alt={alt} />
      <div
        className={cn(
          "flex flex-col gap-10",
          "[--parallax-factor:0.625rem] motion-reduce:[--parallax-factor:0]",
          styles.root,
        )}
      >
        <div className="flex flex-col gap-10 lg:gap-16">
          {supportsViewTimeline ? (
            <H2>{title}</H2>
          ) : (
            <PresentationContentMotionViewTimeline>
              <H2>{title}</H2>
            </PresentationContentMotionViewTimeline>
          )}
          {summary &&
            (supportsViewTimeline ? (
              <div className="flex flex-col gap-6 lg:hidden">{summary}</div>
            ) : (
              <PresentationContentMotionViewTimeline>
                <div className="flex flex-col gap-6 lg:hidden">
                  {summary.map((node, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: no reorder
                    <PresentationContentMotionViewTimeline key={index}>
                      {node}
                    </PresentationContentMotionViewTimeline>
                  ))}
                </div>
              </PresentationContentMotionViewTimeline>
            ))}
          <div className={cn("hidden lg:flex", "flex-col gap-6")}>
            {supportsViewTimeline
              ? children
              : Children.map(children, (child) => (
                  <PresentationContentMotionViewTimeline>
                    {child}
                  </PresentationContentMotionViewTimeline>
                ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 lg:hidden">
          {supportsViewTimeline ? (
            <>
              <Avatar src={src} alt={alt} className="aspect-social w-80" />
              <Subtitle>{catcher}</Subtitle>
            </>
          ) : (
            <>
              <PresentationContentMotionViewTimeline>
                <Avatar src={src} alt={alt} className="aspect-social w-80" />
              </PresentationContentMotionViewTimeline>
              <PresentationContentMotionViewTimeline>
                <Subtitle>{catcher}</Subtitle>
              </PresentationContentMotionViewTimeline>
            </>
          )}
        </div>
        {cta &&
          (supportsViewTimeline ? (
            cta
          ) : (
            <PresentationContentMotionViewTimeline>
              {cta}
            </PresentationContentMotionViewTimeline>
          ))}
      </div>
    </>
  );
};

export default Content;
