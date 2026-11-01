import BannerMagnifier from "components/Banner/Magnifier";
import BannerMagnifierPlayPauseIconButton from "components/Banner/Magnifier/PlayPause/IconButton";
import BannerMagnifierPlayPauseProvider from "components/Banner/Magnifier/PlayPause/Provider";
import SlotPlaying from "components/Banner/Magnifier/PlayPause/SlotPlaying";
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
import presentationAudiovisuel from "public/presentation-audiovisuel.webp";
import presentationMoi from "public/presentation-moi.webp";
import zoomh5 from "public/zoom-h5.webp";


const ScreenPresentationMe = () => {
  return (<Screen className="flex flex-col gap-32">
        <div
          className={cn(
            "mx-5 lg:mx-10",
            "flex flex-col lg:grid lg:grid-cols-[auto_1fr]",
            "gap-x-10",
            "gap-y-16 lg:gap-y-32",
          )}
        >
          <Content
            title={"À propos de moi"}
            src={presentationMoi}
            catcher={
              <>
                À la suite de plusieurs podcasts, j&apos;ai pris conscience de
                mon envie de{" "}
                <SpanUnderline variant="secondary">
                  réaliser des interviews
                </SpanUnderline>
              </>
            }
            summary={[
              <H3 key={1} className="mb-2 mt-6">
                Il était une fois : voyage initiatique et reconversion
              </H3>,
              <P key={2}>
                Après 2 ans en tant qu&apos;attachée commerciale, j&apos;ai
                quitté la France pour entamer un voyage initiatique au Québec !
              </P>,
              <P key={3}>
                De retour en France, j&apos;ai besoin d&apos;un nouveau départ,
                j&apos;entame ma reconversion.
              </P>,
              <P key={4}>
                J&apos;ai commencé par enregistrer mon tout premier podcast avec
                une amie.
                <br />
                Elle me raconte sa première expérience à bord d&apos;un voilier
                en partance pour l&apos;Antarctique.
              </P>,
            ]}
            alt="À la suite de plusieurs podcasts, j'ai pris conscience de mon envie de réaliser des interviews"
          >
            <H3 className="mb-2 mt-6">
              Il était une fois : voyage initiatique et reconversion
            </H3>
            <P>
              Après 2 ans en tant qu&apos;attachée commerciale dans
              l&apos;agroalimentaire, j&apos;ai quitté la France pour entamer un
              voyage initiatique au Québec, comme je l&apos;avais toujours rêvé
              !
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
            <H3 className="mb-2 mt-6">Du podcast à l&apos;audiovisuel !</H3>
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
              <span className="font-bold">
                À la suite de plusieurs podcasts, j&apos;ai pris conscience de
                mon envie de réaliser des interviews.
              </span>
              <br />
              J&apos;ai alors opté pour associer un micro à mon appareil
              hybride. J&apos;étais fin prête !
            </P>
          </Content>
          <Content
            title={<>Aujourd&apos;hui : digital nomade</>}
            summary={[
              <P key={1}>Je suis monteuse vidéo et photographe.</P>,
              <P key={2}>
                Ma curiosité me pousse à travailler sur des projets divers et
                variés et vient challenger ma créativité afin de répondre à tes
                besoins.
              </P>,
              <H3 key={3} className="mb-2 mt-6">
                Mon terrain de jeu : la France et l&apos;Europe
              </H3>,
              <P key={4}>
                Je parcours la France et l&apos;Europe avec{" "}
                <span className="italic">Vanupattes</span>, mon van aménagé, en
                quête de projets innovants et en accord avec
                l&apos;environnement.
              </P>,
            ]}
            catcher={
              <>
                Passionnée par{" "}
                <SpanUnderline variant="secondary">le voyage</SpanUnderline> et
                les belles images, j&apos;ai à coeur de créer des vidéos de
                qualité
              </>
            }
            src={presentationAudiovisuel}
            alt="Passionnée par le voyage et les belles images, j'ai à coeur de créer des vidéos de qualité"
          >
            <P>
              Je suis monteuse vidéo et photographe.
              <br />
              J&apos;habite dans la région lyonnaise, mais j&apos;ai la chance
              de pouvoir voyager en France et en Europe avec mon van.
              <br />
              <span className="font-bold">
                Passionnée par le voyage et les belles images, j&apos;ai à coeur
                de créer des vidéos de qualité.
              </span>
            </P>
            <P>
              La curiosité n&apos;est pas qu&apos;un vilain défaut.
              <br />
              La mienne me pousse à travailler sur des projets divers et variés
              et vient challenger ma créativité afin de répondre à tes besoins.
              <br />
              Grâce à ma capacité d&apos;écoute, je serai en mesure de répondre
              à tes attentes et de mettre en lumière ce qui fait ta singularité.
            </P>
            <H3 className="mb-2 mt-6">
              Mon terrain de jeu : la France et l&apos;Europe
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
            <P>Peut-être en fais-tu partie ?</P>
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
