import BannerTags from "components/Banner/Tags";
import ButtonLink from "components/Button/Link";
import Carousel from "components/Carousel";
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
import { CTA_PORTFOLIO, ZCAL_THERAPY } from "constants/links";
import cn from "helpers/cn";
import therapy1 from "public/therapy-1.webp";
import therapy2 from "public/therapy-2.webp";
import therapy3 from "public/therapy-3.webp";
import logoSide from "public/logo-side.svg";
import { Suspense } from "react";

const hintClassName = "animate-appear opacity-0 animation-delay-2000";

const TAGS = ["Thérapie", "Corps", "Trauma", "Regard", "Guérir"];

const ScreenLandingTherapy = () => {
  return (
    <Screen className="lg:pt-6">
      <IconButtonFloatingDiv>
        <Carousel
          className="lg:mx-10"
          headingDesktop={
            <div className="flex grow flex-col items-center gap-2.5 text-center">
              <H2 color="secondary">
                Le corps se souvient de ce que l&apos;esprit a tu
              </H2>
              <Suspense fallback={null}>
                <SocialsEmailOrApp />
              </Suspense>
            </div>
          }
        >
          <Slide
            headingTop={{
              mobile: "Changer de regard sur soi, c'est déjà commencer à guérir",
              desktop: "Changer de regard sur soi, c'est déjà commencer à guérir",
            }}
            src={therapy1}
            loading="eager"
            alt=""
          />
          <Slide
            headingBottom={
              <H1 color="white">Un traumatisme ne se choisit pas. Le chemin pour s&apos;en libérer, si</H1>
            }
            headingTop={{ mobile: "Un traumatisme ne se choisit pas. Le chemin pour s'en libérer, si" }}
            src={therapy2}
            loading="eager"
            alt=""
          />
          <Slide
            headingTop={{
              desktop: "Se libérer du passé pour habiter pleinement le présent",
              mobile: "Se libérer du passé pour habiter pleinement le présent",
            }}
            src={therapy3}
            alt=""
          />
        </Carousel>
      </IconButtonFloatingDiv>
      <div
        className={cn(
          "relative flex w-full flex-row justify-between py-5 pl-5 pr-0",
          "lg:pb-3 lg:pl-10 lg:pt-8",
        )}
      >
        <div className="flex flex-col gap-[clamp(1rem,2vw,1.25rem)]">
          <H2 align="left">Floé Gaubert</H2>
          <H2 align="left">Photographe photo-thérapeute</H2>
        </div>
        <div
          className={cn(
            "hidden lg:inline-flex",
            "left-1/2 -translate-x-1/2 lg:absolute",
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
        <SlotTrack name="click therapy cta first">
          <ButtonLink
            variant="contained"
            href={ZCAL_THERAPY}
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
          "lg:mx-10 lg:rounded-quote",
        )}
      >
      </div>
    </Screen>
  );
};

export default ScreenLandingTherapy;
