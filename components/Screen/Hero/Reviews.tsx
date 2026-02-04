import {
  CardFlip,
  CardFlipSide,
  CardHeader,
  CardImage,
  CardRoot,
} from "components/Card";
import CardSlide from "components/Card/Slide";
import CardSlider from "components/Card/Slider";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import cn from "helpers/cn";
import fabriceCattelin from "public/fabrice-cattelin.webp";
import laureDeschamps from "public/laure-deschamps.webp";
import roxaneHumbert from "public/roxane-humbert.webp";

const ReviewsHero = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full",
        "px-5 lg:px-10 pt-6 pb-32",
        "gap-16 md:gap-24 lg:gap-24",
        "bg-black/70",
      )}
    >
      <H3 color="white">
        Ils sont passés devant mon objectif, voici ce qu&apos;ils en disent
      </H3>
      <div className="flex w-full flex-col items-center gap-10">
        <div
          className={cn(
            "flex w-full justify-start overflow-auto",
            "lg:overflow-visible",
          )}
        >
          <CardSlider>
            <CardSlide>
              <CardRoot>
                <CardImage alt="Fabrice Cattelin" src={fabriceCattelin}>
                  <CardHeader>
                    <P className="font-bold" color="white">
                      Fabrice Cattelin
                    </P>
                    <P color="white">
                      Directeur commercial & marketing - Savoie Process
                    </P>
                  </CardHeader>
                </CardImage>
                <CardFlipSide>
                  Nous avons collaboré avec Floé dès les premiers mois de la
                  création de notre société.
                  <br />
                  Au départ, nous la sollicitions pour la création de contenu et
                  l&apos;animation de notre page LinkedIn. Nous avons pu
                  apprécier sa disponibilité et sa force de proposition sur ce
                  volet.
                  <br />
                  Nous connaissions l&apos;appétence de Floé pour se développer
                  dans la création de contenu vidéo et pour la photo. Nous
                  l&apos;avons tout naturellement sollicitée pour enrichir notre
                  base de données visuelles avec des photos, des shorts vidéo et
                  notre vidéo institutionnelle pour nos supports commerciaux,
                  dossier de presse, chaine Youtube et site Internet.
                  <br />
                  Floé a fait preuve, avec des acteurs peu expérimentés et pas
                  toujours dociles, de pédagogie et de patience, pour tirer le
                  meilleur de chacun. Ensuite elle a utilisé les moyens
                  techniques et mis en œuvre ses compétences pour un excellent
                  rendu.
                  <br />
                  Nous aurons l&apos;occasion de travailler sur de futurs
                  projets.
                  <br />
                  Merci Floé
                </CardFlipSide>
                <CardFlip />
              </CardRoot>
            </CardSlide>
            <CardSlide>
              <CardRoot>
                <CardImage alt="Roxane Humbert" src={roxaneHumbert}>
                  <CardHeader>
                    <P className="font-bold" color="white">
                      Roxane Humbert
                    </P>
                    <P color="white">Coach en nutrition émotionnelle</P>
                  </CardHeader>
                </CardImage>
                <CardFlipSide>
                  J&apos;ai choisi de faire une séance photo avec Floé pour mon
                  contenu professionnel, et je vous la recommande sans hésiter !
                  <br />
                  Je n&apos;aime pas trop être photographiée, mais
                  l&apos;ambiance était détendue et naturelle, ce qui m&apos;a
                  permis de me sentir à l&apos;aise devant l&apos;objectif. Floé
                  a de très bonnes idées, et sait s&apos;adapter au fur et à
                  mesure de la séance, ce qui a rendu ce moment fluide et
                  agréable.
                  <br />
                  Je suis ravie car j&apos;ai plein de photos que j&apos;aime
                  beaucoup et qui reflètent bien l&apos;image que je voulais
                  pour mon projet professionnel.
                  <br />
                  Merci Floé pour ton talent, ta créativité et ta bienveillance
                  !
                </CardFlipSide>
                <CardFlip />
              </CardRoot>
            </CardSlide>
            <CardSlide>
              <CardRoot>
                <CardImage alt="Laure Deschamps" src={laureDeschamps}>
                  <CardHeader>
                    <P className="font-bold" color="white">
                      Laure Deschamps
                    </P>
                    <P color="white">Chanvrière et productrice de CBD</P>
                  </CardHeader>
                </CardImage>
                <CardFlipSide>
                  J&apos;ai beaucoup aimé travailler avec Floé, elle m&apos;a
                  guidée dans cette entreprise délicate et m&apos;a aidée à être
                  à l&apos;aise face à la caméra.
                  <br />
                  Elle m&apos;a donné confiance, donné des idées et des
                  directions en amont ainsi que pendant le tournage afin de
                  m&apos;aider à préparer mon discours et à le livrer avec
                  aisance.
                  <br />
                  La journée de tournage a été très agréable, tellement que
                  j&apos;en ai même profité pour lui demander des photos
                  professionnelles ! Le résultat de la vidéo est génial,
                  c&apos;est dynamique, professionnel, tout en restant à mon
                  image.
                  <br />
                  Je recommande 😊
                </CardFlipSide>
                <CardFlip />
              </CardRoot>
            </CardSlide>
          </CardSlider>
        </div>
      </div>
    </div>
  );
};

export default ReviewsHero;
