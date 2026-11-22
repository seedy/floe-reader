import ButtonLink from "components/Button/Link";
import Logo from "components/Logo";
import Screen from "components/Screen";
import Content from "components/Screen/Presentation/Content";
import SlotTrack from "components/Slot/Track";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import { ZCAL_THERAPY } from "constants/links";
import cn from "helpers/cn";
import logoShapeGreen from "public/logo-shape-green.svg";
import logoShapeLightGreen from "public/logo-shape-light-green.svg";
import logoShapeOrange from "public/logo-shape-orange.svg";
import logoShapeTeal from "public/logo-shape-teal.svg";

const ScreenPresentationTherapy = () => {
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
              La photo-thérapie : se voir pour mieux se comprendre
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute bottom-0 right-0 translate-y-full rotate-135 pointer-events-none select-none"
              />
            </span>
          }
          catcher={
            <div className="relative">
              Votre corps garde 
              <SpanUnderline variant="secondary">la trace</SpanUnderline>
              de votre histoire
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute top-0 right-0 -translate-y-full pointer-events-none select-none"
              />
            </div>
          }
          summary={[
            <P key={1}>
              La photo-thérapie est un accompagnement qui part du corps pour aller voir ce qui se joue plus profondément, dans votre coeur comme dans votre tête.
            </P>,
            <P key={2} className="relative">
              L&apos;appareil photo n&apos;est pas une fin en soi. C&apos;est un outil, un miroir bienveillant, qui fait émerger ce que les mots seuls ont parfois du mal à atteindre.
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute top-0 left-0 -translate-y-full pointer-events-none select-none"
              />
            </P>,
            <P key={3}>
              Votre corps garde la trace de votre histoire. Les blessures de l&apos;enfance, celles qui vous tirent encore vers le bas aujourd&apos;hui, s&apos;y inscrivent souvent sans bruit : <br/>
              des douleurs qui reviennent, des tensions qui ne lâchent pas, une fatigue persistante, un sommeil agité, une boule au ventre ou dans la gorge. Ce sont souvent elles qui vous empêchent d&apos;avancer et de vivre pleinement votre vie d&apos;adulte.
            </P>,
          ]}
          src={TODO}
          cta={
            <div className="flex flex-col items-center gap-4">
              <P className="text-text-hint relative">
                Un premier rdv découverte ?
                <Logo
                  alt=""
                  aria-hidden
                  placeholder="empty"
                  src={logoShapeGreen}
                  className="absolute top-0 left-0 -translate-x-full rotate-90 pointer-events-none select-none"
                />
              </P>
              <SlotTrack name="click presentation cta montage">
                <ButtonLink
                  variant="contained"
                  color="primary"
                  href={ZCAL_THERAPY}
                >
                  Je prends rendez-vous
                </ButtonLink>
              </SlotTrack>
            </div>
          }
          alt="Je porte une attention particulière aux couleurs et ambiances que dégagent mes réalisations"
        >
          <P>
              La photo-thérapie est un accompagnement qui part du corps pour aller voir ce qui se joue plus profondément, dans votre coeur comme dans votre tête.
          </P>
          <P>
              L&apos;appareil photo n&apos;est pas une fin en soi. C&apos;est un outil, un miroir bienveillant, qui fait émerger ce que les mots seuls ont parfois du mal à atteindre.
          </P>
          <P>
              Votre corps garde la trace de votre histoire. Les blessures de l&apos;enfance, celles qui vous tirent encore vers le bas aujourd&apos;hui, s&apos;y inscrivent souvent sans bruit : <br/>
              des douleurs qui reviennent, des tensions qui ne lâchent pas, une fatigue persistante, un sommeil agité, une boule au ventre ou dans la gorge. Ce sont souvent elles qui vous empêchent d&apos;avancer et de vivre pleinement votre vie d&apos;adulte.
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeTeal}
              className="absolute top-0 left-0 -translate-x-full pointer-events-none select-none"
            />
          </P>
        </Content>
        <Content
          title={
            <span className="relative">
              Un chemin vers vous-même
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute top-0 left-0 -translate-y-full pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute top-0 right-0 -translate-y-full rotate-90 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 left-0 translate-y-full rotate-270 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeGreen}
                className="absolute bottom-0 right-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
            </span>
          }
          cta={
            <div className="flex flex-col items-center gap-4">
              <P className="text-text-hint relative">
                Prêt·e à commencer une thérapie ensemble ?
                <Logo
                  alt=""
                  aria-hidden
                  placeholder="empty"
                  src={logoShapeGreen}
                  className="absolute top-0 right-0 translate-x-full -translate-y-full rotate-180 pointer-events-none select-none"
                />
              </P>
              <SlotTrack name="click presentation cta photo">
                <ButtonLink
                  variant="contained"
                  color="primary"
                  href={ZCAL_THERAPY}
                >
                  Je prends rendez-vous
                </ButtonLink>
              </SlotTrack>
            </div>
          }
          summary={[
            <P key={1}>
              Ensemble, à travers les images, au fil de vos séances nous ferons le lien entre votre identité, votre corps, vos émotions, votre histoire et le regard que vous portez sur vous-même.
            </P>,
            <P key={2}>
Les séances se déroulent dans un cadre sécurisant et sans jugement.
            </P>,
            <P key={3}>
Vous n&apos;avez besoin ni d&apos;être à l&apos;aise devant l&apos;objectif ni de vous trouver "photogénique" : c&apos;est souvent là que le travail commence.            </P>,
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 right-0 translate-y-full rotate-225 pointer-events-none select-none"
              />
]}
          catcher={
            <div className="relative">
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute bottom-0 left-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
              Les séances se déroulent dans un{" "}
              <SpanUnderline variant="secondary">cadre sécurisant et sans jugement</SpanUnderline>
            </div>
          }
          src={TODO}
          alt="Les séances se déroulent dans un cadre sécurisant et sans jugement"
        >
          <P>
            Ensemble, à travers les images, au fil de vos séances nous ferons le lien entre votre identité, votre corps, vos émotions, votre histoire et le regard que vous portez sur vous-même.
          </P>
          <P>
            Les séances se déroulent dans un cadre sécurisant et sans jugement.
          </P>
          <P>
            Vous n&apos;avez besoin ni d&apos;être à l&apos;aise devant l&apos;objectif ni de vous trouver "photogénique" : c&apos;est souvent là que le travail commence.
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeLightGreen}
              className="absolute bottom-0 left-0 -translate-x-full translate-y-full rotate-180 pointer-events-none select-none"
            />
          </P>
        </Content>
        <Content
          title={
            <span className="relative">
              Mon parcours
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute top-0 left-0 -translate-y-full pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute top-0 right-0 -translate-y-full rotate-90 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 left-0 translate-y-full rotate-270 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeGreen}
                className="absolute bottom-0 right-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
            </span>
          }
          cta={
            <div className="flex flex-col items-center gap-4">
              <P className="text-text-hint relative">
                Une thérapie complète selon les préceptes d&apos;Elodie Sueur-Montsenert
                <Logo
                  alt=""
                  aria-hidden
                  placeholder="empty"
                  src={logoShapeGreen}
                  className="absolute top-0 right-0 translate-x-full -translate-y-full rotate-180 pointer-events-none select-none"
                />
              </P>
              <SlotTrack name="click presentation cta photo">
                <ButtonLink
                  variant="contained"
                  color="primary"
                  href={ZCAL_THERAPY}
                >
                  Je prends rendez-vous
                </ButtonLink>
              </SlotTrack>
            </div>
          }
          summary={[
            <P key={1}>
              J&apos;ai moi-même eu recours à différentes thérapies pour prendre soin de mes blessures et de mes traumatismes. Ce chemin m&apos;a appris à quel point il est précieux d&apos;être bien accompagné.
            </P>,
            <P key={2}>
C&apos;est pourquoi j&apos;ai aujourd&apos;hui à coeur de vous guider, à votre rhythme, vers votre propre libération émotionnelle.
            </P>,
            <P key={3}>
              J&apos;ai été formée par Elodie Sueur-Montsenert, créatrice du portrait thérapeutique et figure majeure du développement de la photo-thérapie en France. Cette formation certifiante me permet de vous proposer un accompagnement sérieux, structuré et respectueux de votre histoire.
            </P>,
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 right-0 translate-y-full rotate-225 pointer-events-none select-none"
              />
]}
          catcher={
            <div className="relative">
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute bottom-0 left-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
              J&apos;ai été formée par Elodie Sueur-Montsenert, 
              <SpanUnderline variant="secondary">créatrice du portrait thérapeutique</SpanUnderline>
               et figure majeure du développement de la photo-thérapie en France.
            </div>
          }
          src={TODO}
          alt="J'ai été formée par Elodie Sueur-Montsenert, créatrice du portrait thérapeutique et figure majeure du développement de la photo-thérapie en France"
        >
          <P>
                          J&apos;ai moi-même eu recours à différentes thérapies pour prendre soin de mes blessures et de mes traumatismes. Ce chemin m&apos;a appris à quel point il est précieux d&apos;être bien accompagné.
          </P>
          <P>
            C&apos;est pourquoi j&apos;ai aujourd&apos;hui à coeur de vous guider, à votre rhythme, vers votre propre libération émotionnelle.
          </P>
          <P>
             J&apos;ai été formée par Elodie Sueur-Montsenert, créatrice du portrait thérapeutique et figure majeure du développement de la photo-thérapie en France.
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeLightGreen}
              className="absolute bottom-0 left-0 -translate-x-full translate-y-full rotate-180 pointer-events-none select-none"
            />
          </P>
        </Content>
        <Content
          title={
            <span className="relative">
              À qui s&apos;adresse cet accompagnement ?
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute top-0 left-0 -translate-y-full pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeLightGreen}
                className="absolute top-0 right-0 -translate-y-full rotate-90 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 left-0 translate-y-full rotate-270 pointer-events-none select-none"
              />
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeGreen}
                className="absolute bottom-0 right-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
            </span>
          }
          cta={
            <div className="flex flex-col items-center gap-4">
              <P className="text-text-hint relative">
                Prenez rdv et faites le premier pas vers votre libération émotionnelle
                <Logo
                  alt=""
                  aria-hidden
                  placeholder="empty"
                  src={logoShapeGreen}
                  className="absolute top-0 right-0 translate-x-full -translate-y-full rotate-180 pointer-events-none select-none"
                />
              </P>
              <SlotTrack name="click presentation cta photo">
                <ButtonLink
                  variant="contained"
                  color="primary"
                  href={ZCAL_THERAPY}
                >
                  Je prends rendez-vous
                </ButtonLink>
              </SlotTrack>
            </div>
          }
          summary={[
            <P key={1}>
              J&apos;accompagne toute personne qui souhaite renouer avec son corps et son histoire.
            </P>,
            <P key={2}>
Et plus particulièrement celles qui vivent : un rapport difficile à leur corps en lien avec le surpoids; un handicap survenu soudainement, qui bouleverse l&apos;image de soi; les conséquences de violences sexuelles; une dépendance dont elles cherchent à se libérer; une dépression ou une profonde perte d&apos;élan; une mémoire traumatique qui continue de peser au quotidien; des blocages qui les empêchent d&apos;avancer; un rejet d&apos;elles-mêmes, de leur image ou de leur corps; le besoin de libérer des émotions longtemps retenues.
            </P>,
            <P key={3}>
Cette approche est faite pour vous si : vous avez l&apos;impression de tourner en rond dans votre thérapie actuelle et cherchez une autre porte d&apos;entrée; vous souhaitez apprendre à vous regarder autrement, avec plus de douceur; vous sentez que quelque chose ne va pas, sans parvenir à mettre le doigt dessus; votre corps vous parle, mais vous n&apos;arrivez pas encore à l&apos;entendre; vos blessures prennent trop de place dans votre vie et vous aimeriez vous en libérer.
</P>,
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeOrange}
                className="absolute bottom-0 right-0 translate-y-full rotate-225 pointer-events-none select-none"
              />,
              <P key={4}>
            La photothérapie ne remplace pas un suivi médical ou psychologique. Elle peut venir le compléter et l&apos;enrichir.
              </P>
]}
          catcher={
            <div className="relative">
              <Logo
                alt=""
                aria-hidden
                placeholder="empty"
                src={logoShapeTeal}
                className="absolute bottom-0 left-0 translate-y-full rotate-180 pointer-events-none select-none"
              />
              J&apos;accompagne toute personne qui souhaite 
              <SpanUnderline variant="secondary">renouer avec son corps et son histoire</SpanUnderline>
            </div>
          }
          src={TODO}
          alt="J'accompagne toute personne qui souhaite renouer avec son corps et son histoire"
        >
          <P>
                          J&apos;accompagne toute personne qui souhaite renouer avec son corps et son histoire.
          </P>
          <P>
            Et plus particulièrement celles qui vivent : un rapport difficile à leur corps en lien avec le surpoids; un handicap survenu soudainement, qui bouleverse l&apos;image de soi; les conséquences de violences sexuelles; une dépendance dont elles cherchent à se libérer; une dépression ou une profonde perte d&apos;élan; une mémoire traumatique qui continue de peser au quotidien; des blocages qui les empêchent d&apos;avancer; un rejet d&apos;elles-mêmes, de leur image ou de leur corps; le besoin de libérer des émotions longtemps retenues.
          </P>
          <P>
            Cette approche est faite pour vous si : vous avez l&apos;impression de tourner en rond dans votre thérapie actuelle et cherchez une autre porte d&apos;entrée; vous souhaitez apprendre à vous regarder autrement, avec plus de douceur; vous sentez que quelque chose ne va pas, sans parvenir à mettre le doigt dessus; votre corps vous parle, mais vous n&apos;arrivez pas encore à l&apos;entendre; vos blessures prennent trop de place dans votre vie et vous aimeriez vous en libérer.
            <Logo
              alt=""
              aria-hidden
              placeholder="empty"
              src={logoShapeLightGreen}
              className="absolute bottom-0 left-0 -translate-x-full translate-y-full rotate-180 pointer-events-none select-none"
            />
          </P>
          <P>
            La photothérapie ne remplace pas un suivi médical ou psychologique. Elle peut venir le compléter et l&apos;enrichir.
          </P>
        </Content>
        </div>
    </Screen>
  )
}

export default ScreenPresentationTherapy;