import BannerMagnifier from "components/Banner/Magnifier";
import BannerMagnifierPlayPauseIconButton from "components/Banner/Magnifier/PlayPause/IconButton";
import BannerMagnifierPlayPauseProvider from "components/Banner/Magnifier/PlayPause/Provider";
import SlotPlaying from "components/Banner/Magnifier/PlayPause/SlotPlaying";
import Logo from "components/Logo";
import Screen from "components/Screen";
import Content from "components/Screen/Presentation/Content";
import Socials from "components/Socials";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import cn from "helpers/cn";
import djimini4pro from "public/dji-mini4-pro.webp";
import djirs3 from "public/dji-rs3.webp";
import fujixs10 from "public/fuji-xs10.webp";
import logoShapeGreen from "public/logo-shape-green.svg";
import logoShapeLightGreen from "public/logo-shape-light-green.svg";
import logoShapeOrange from "public/logo-shape-orange.svg";
import logoShapeTeal from "public/logo-shape-teal.svg";
import presentationAudiovisuel from "public/presentation-audiovisuel.webp";
import presentationMoi from "public/presentation-moi.webp";
import zoomh5 from "public/zoom-h5.webp";

const ScreenPresentationMe = () => {
  return (
    <Screen className="flex flex-col gap-32">
      <div
        className={cn(
          "mx-5 lg:mx-10",
          "flex flex-col lg:grid lg:grid-cols-[auto_1fr]",
          "gap-x-10",
          "gap-y-16 lg:gap-y-32",
        )}
      >
        <Content
          title={
            <span className="relative">
              À propos de moi
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute top-0 right-0 -translate-y-full pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 left-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
            </span>
          }
          src={presentationMoi}
          catcher={
            <div className="relative">
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeGreen}
                className="absolute top-0 left-0 -translate-y-full pointer-events-none select-none"
              />
              À la suite de plusieurs podcasts, j&apos;ai pris conscience de mon
              envie de{" "}
              <SpanUnderline variant="secondary">
                réaliser des interviews
              </SpanUnderline>
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 right-0 -translate-x-full translate-y-full pointer-events-none select-none"
              />
            </div>
          }
          summary={[
            <H3 key={1} className="mb-2 mt-6 relative">
              Il était une fois : voyage initiatique et{" "}
              <SpanUnderline>reconversion</SpanUnderline>
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute bottom-0 left-0 translate-y-full rotate-90 pointer-events-none select-none"
              />
            </H3>,
            <P key={2}>
              Après 2 ans en tant qu&apos;attachée commerciale, j&apos;ai quitté
              la France pour entamer un voyage initiatique au Québec !
            </P>,
            <P key={3}>
              De retour en France, j&apos;ai besoin d&apos;un nouveau départ,
              j&apos;entame ma reconversion.
            </P>,
            <P key={4} className="relative">
              J&apos;ai commencé par enregistrer mon tout premier podcast avec
              une amie.
              <br />
              Elle me raconte sa première expérience à bord d&apos;un voilier en
              partance pour l&apos;Antarctique.
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute bottom-0 right-0 translate-y-full pointer-events-none select-none"
              />
            </P>,
          ]}
          alt="À la suite de plusieurs podcasts, j'ai pris conscience de mon envie de réaliser des interviews"
        >
          <H3 className="mb-2 mt-6 relative">
            Il était une fois : voyage initiatique et{" "}
            <SpanUnderline>reconversion</SpanUnderline>
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeTeal}
              className="absolute bottom-0 left-0 translate-y-full rotate-90 pointer-events-none select-none"
            />
          </H3>
          <P>
            Après 2 ans en tant qu&apos;attachée commerciale dans
            l&apos;agroalimentaire, j&apos;ai quitté la France pour entamer un
            voyage initiatique au Québec, comme je l&apos;avais toujours rêvé !
          </P>
          <P>
            Et quel voyage !
            <br />
            J&apos;ai aménagé un van pour parcourir le Québec, puis le Canada.
            <br />
            J&apos;ai rencontré de nombreuses personnes qui m&apos;ont permis
            d&apos;apprendre énormément sur moi et de dépasser mes limites.
          </P>
          <P>
            De retour en France, j&apos;ai besoin d&apos;un nouveau départ.
            <br />
            C&apos;est là, que j&apos;entame ma reconversion.
          </P>
          <P>
            J&apos;ai investi dans un appareil photo numérique hybride - mon
            Fujifilm XS-10 - qui me suit partout.
            <br />
            J&apos;ai toujours adoré les photos qui suscitent l&apos;émotion !
          </P>
          <H3 className="mb-2 mt-6 flex self-center relative">
            Du podcast à l&apos;audiovisuel !
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeGreen}
              className="absolute top-0 right-0 -translate-y-full pointer-events-none select-none"
            />
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeOrange}
              className="absolute bottom-0 left-0 translate-y-full pointer-events-none select-none"
            />
          </H3>
          <P>
            Avec mes projets de podcast, j&apos;ai rapidement eu besoin de
            m&apos;équiper pour la prise de son.
          </P>
          <P>
            J&apos;ai commencé par enregistrer une amie avec mon tout premier
            micro.
            <br />
            Elle me raconte un des voyages les plus fous de sa vie : naviguer
            pour la première fois à bord d&apos;un voilier en partance pour
            l&apos;Antarctique.
          </P>
          <P>
            <span className="font-bold relative">
              À la suite de plusieurs podcasts, j&apos;ai pris conscience de mon
              envie de réaliser des interviews.
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute top-0 right-0 translate-x-full rotate-90 pointer-events-none select-none"
              />
            </span>
            <br />
            J&apos;ai alors opté pour associer un micro à mon appareil hybride.
            J&apos;étais fin prête !
          </P>
        </Content>
        <Content
          title={
            <span className="relative">
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute top-0 left-0 -translate-y-full rotate-270 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeGreen}
                className="absolute top-0 right-0 -translate-y-full rotate-180 pointer-events-none select-none"
              />
              Aujourd&apos;hui : digital nomade
            </span>
          }
          summary={[
            <P key={1} className="relative">
              Je suis monteuse vidéo et photographe.
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute top-0 right-0 -translate-y-full rotate-270 pointer-events-none select-none"
              />
            </P>,
            <P key={2}>
              Ma curiosité me pousse à travailler sur des projets divers et
              variés et vient challenger ma créativité afin de répondre à tes
              besoins.
            </P>,
            <H3 key={3} className="mb-2 mt-6 relative flex self-center">
              Mon terrain de jeu : la France et l&apos;Europe
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeGreen}
                className="absolute bottom-0 left-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute bottom-0 right-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
            </H3>,
            <P key={4}>
              Je parcours la France et l&apos;Europe avec{" "}
              <span className="italic">Vanupattes</span>, mon van aménagé, en
              quête de projets innovants et en accord avec l&apos;environnement.
            </P>,
          ]}
          catcher={
            <div className="relative">
              Passionnée par{" "}
              <SpanUnderline variant="secondary">le voyage</SpanUnderline> et
              les belles images, j&apos;ai à coeur de créer des vidéos de
              qualité
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 left-0 translate-y-full pointer-events-none select-none"
              />
            </div>
          }
          src={presentationAudiovisuel}
          alt="Passionnée par le voyage et les belles images, j'ai à coeur de créer des vidéos de qualité"
        >
          <P className="relative">
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeLightGreen}
              className="absolute top-0 left-0 -translate-y-full rotate-135 pointer-events-none select-none"
            />
            Je suis monteuse vidéo et photographe.
            <br />
            J&apos;habite dans la région lyonnaise, mais j&apos;ai la chance de
            pouvoir voyager en France et en Europe avec mon van.
            <br />
            <span className="font-bold">
              Passionnée par le voyage et les belles images, j&apos;ai à coeur
              de créer des vidéos de qualité.
            </span>
          </P>
          <P>
            La curiosité n&apos;est pas qu&apos;un vilain défaut.
            <br />
            La mienne me pousse à travailler sur des projets divers et variés et
            vient challenger ma créativité afin de répondre à tes besoins.
            <br />
            Grâce à ma capacité d&apos;écoute, je serai en mesure de répondre à
            tes attentes et de mettre en lumière ce qui fait ta singularité.
          </P>
          <H3 className="mb-2 mt-6 flex self-center relative">
            Mon terrain de jeu : la France et l&apos;Europe
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeGreen}
              className="absolute top-0 left-0 -translate-y-full rotate-90 pointer-events-none select-none"
            />
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeLightGreen}
              className="absolute bottom-0 right-0 translate-x-full rotate-270 pointer-events-none select-none"
            />
          </H3>
          <P>
            Je parcours la France et l&apos;Europe avec{" "}
            <span className="italic">Vanupattes</span>, mon van aménagé, en
            quête de projets innovants et en accord avec l&apos;environnement.
          </P>
          <P>
            Adepte des sports en extérieur, je prends beaucoup de plaisir à
            capturer les paysages lors de mes randonnées ou excursions.
            <br />
          </P>
          <P>
            Je souhaite mettre en avant les agriculteur·rice·s et les
            artisan·e·s d&apos;aujourd&apos;hui, qui feront de demain un monde
            plus respectueux des humains et de la nature.
          </P>
          <P className="relative">
            Peut-être en fais-tu partie ?
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeOrange}
              className="absolute bottom-0 left-0 translate-y-full pointer-events-none select-none"
            />
          </P>
        </Content>
      </div>
      <div className="flex flex-col items-center gap-8">
        <BannerMagnifierPlayPauseProvider defaultValue={true}>
          <div className="flex gap-4">
            <H2>Mon matériel</H2>
            <BannerMagnifierPlayPauseIconButton />
          </div>
          <SlotPlaying>
            <BannerMagnifier
              items={[
                {
                  href: "https://fujifilm-x.com/fr-fr/products/cameras/x-s10/",
                  label: "Fujifilm XS-10",
                  src: fujixs10,
                },
                {
                  href: "https://www.zoom-europe.com/en/handy-recorders/zoom-h5",
                  label: "Zoom H5",
                  src: zoomh5,
                },
                {
                  href: "https://www.dji.com/fr/rs-3",
                  label: "DJI RS-3",
                  src: djirs3,
                },
                {
                  href: "https://www.dji.com/fr/mini-4-pro",
                  label: "DJI mini 4 pro",
                  src: djimini4pro,
                },
              ]}
            />
          </SlotPlaying>
        </BannerMagnifierPlayPauseProvider>
      </div>
      <div className="flex grow flex-col items-center gap-2.5 text-center">
        <H2>Rejoins mes réseaux pour suivre mes actualités</H2>
        <Socials />
      </div>
    </Screen>
  );
};

export default ScreenPresentationMe;
