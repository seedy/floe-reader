import BannerTags from "components/Banner/Tags";
import ButtonLink from "components/Button/Link";
import Carousel from "components/Carousel";
import Image from "components/Image";
import Logo from "components/Logo";
import ParallaxLeave from "components/ParallaxLeave";
import Screen from "components/Screen";
import IconButtonFloatingDiv from "components/Screen/Landing/IconButtonFloatingDiv";
import ScrollHint from "components/ScrollHint";
import Slide from "components/Slide";
import SlotTrack from "components/Slot/Track";
import SocialsEmailOrApp from "components/Socials/EmailOrApp";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import { CTA_PORTFOLIO, PORTFOLIO, ZCAL_FIRST } from "constants/links";
import cn from "helpers/cn";
import floeDetouree from "public/Floe-tournage-detouree.webp";
import landing1 from "public/landing-1.webp";
import landing2 from "public/landing-2.webp";
import landing3 from "public/landing-3.webp";
import landing4 from "public/landing-4.webp";
import landing5 from "public/landing-5.webp";
import logoSide from "public/logo-side.svg";
import { Suspense } from "react";

const hintClassName = "animate-appear opacity-0 animation-delay-2000";

const TAGS = ["Montage", "Interview", "Podcast", "Photo", "Vidéo"];

const ScreenLanding = () => {
  return (
    <Screen className="lg:pt-6">
      <IconButtonFloatingDiv>
        <Carousel
          className="lg:mx-10"
          headingDesktop={
            <div className="flex grow flex-col items-center gap-2.5 text-center">
              <H2 color="secondary">
                Réalisons les contenus qui feront parler de toi
              </H2>
              <Suspense fallback={null}>
                <SocialsEmailOrApp />
              </Suspense>
            </div>
          }
        >
          <Slide
            headingTop={{
              desktop: "Tes vidéos sur-mesure",
              mobile: "Réalisons les contenus qui feront parler de toi",
            }}
            src={landing1}
            loading="eager"
            alt=""
          />
          <Slide
            headingBottom={
              <H1 color="white">Une expérience visuelle soignée</H1>
            }
            headingTop={{ mobile: "Une expérience visuelle soignée" }}
            src={landing2}
            loading="eager"
            alt=""
          />
          <Slide
            headingTop={{
              desktop: "Tes contenus au fil de mes voyages",
              mobile: "Tes contenus au fil de mes voyages",
            }}
            src={landing3}
            alt=""
          />
          <Slide
            headingBottom={
              <H1 color="white">Des clichés originaux à ta demande</H1>
            }
            headingTop={{ mobile: "Des clichés originaux à ta demande" }}
            src={landing4}
            alt=""
          />
          <Slide
            headingTop={{
              desktop: "Tes instants sublimés en photo",
              mobile: "Tes instants sublimés en photo",
            }}
            src={landing5}
            alt=""
          />
        </Carousel>
      </IconButtonFloatingDiv>
      <div
        className={cn(
          "relative flex w-full flex-row justify-between py-5 pl-5 pr-0",
          "lg:pb-3 lg:pl-10 lg:pt-8"
        )}
      >
        <div className="flex flex-col gap-[clamp(1rem,2vw,1.25rem)]">
          <H2 align="left">Floé Gaubert</H2>
          <H2 align="left">Photographe, vidéaste et monteuse</H2>
        </div>
        <div
          className={cn(
            "hidden lg:inline-flex",
            "left-1/2 -translate-x-1/2 lg:absolute"
          )}
        >
          <ParallaxLeave className="w-full">
            <ScrollHint className={hintClassName} href={CTA_PORTFOLIO} />
          </ParallaxLeave>
        </div>
        <Logo
          className="h-[clamp(5rem,16vw,10rem)] w-auto"
          alt=""
          loading="eager"
          src={logoSide}
        />
      </div>
      <BannerTags className="lg:hidden" tags={TAGS} />

      <div className={cn("mx-4 my-0 flex flex-col items-center", "lg:hidden")}>
        <Suspense fallback={null}>
          <SocialsEmailOrApp />
        </Suspense>
        <SlotTrack name="click landing cta first">
          <ButtonLink
            variant="contained"
            href={ZCAL_FIRST}
            className={cn("mb-5 mt-6", "bottom-24 self-center lg:absolute")}
          >
            Je prends rendez-vous
          </ButtonLink>
        </SlotTrack>
        <ParallaxLeave className="w-full">
          <ScrollHint className={hintClassName} href={CTA_PORTFOLIO} />
        </ParallaxLeave>
      </div>
      {/* Banner Tags + Image */}
      <BannerTags className="hidden lg:my-10 lg:flex" tags={TAGS} />
      <div
        className={cn(
          "relative flex items-center justify-center gap-10",
          "mt-10 lg:-mt-4",
          "flex-col lg:flex-row",
          "bg-tertiary/20 from-tertiary/20 lg:bg-transparent lg:bg-linear-to-t",
          "pt-5 lg:pt-0",
          "lg:px-4",
          "lg:mx-10 lg:rounded-quote"
        )}
      >
        <div className="flex flex-col gap-8">
          <H2 id={CTA_PORTFOLIO.replace("#", "")}>
            Tu souhaites voir mes réalisations ?
          </H2>
          <SlotTrack name="click landing cta portfolio">
            <ButtonLink variant="contained" href={PORTFOLIO} target="_blank">
              J&apos;explore le portfolio
            </ButtonLink>
          </SlotTrack>
        </div>
        <Image placeholder="empty" height={427} src={floeDetouree} alt="" />
      </div>
    </Screen>
  );
};

export default ScreenLanding;
