import ButtonLink from "components/Button/Link";
import Screen from "components/Screen";
import Content from "components/Screen/Presentation/Content";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import Subtitle from "components/Typography/Subtitle";
import { PORTFOLIO } from "constants/links";
import presentationAudiovisuel from "public/presentation-audiovisuel.jpg";
import presentationPodcast from "public/presentation-podcast.jpg";
import presentationVideo from "public/presentation-video.jpg";

const ScreenPresentation = () => {
	return (
		<Screen>
			<div className="lg:grid lg:grid-cols-[auto_1fr]">
				<Content
					title="Je crée du contenu photo et vidéo pour améliorer ta visibilité"
					longSubtitle={
						<>
							Autodidacte et proactive, je me suis formée aux domaines de la
							photo et du montage vidéo.
							<br />
							<span className="font-bold">
								Retranscrire les émotions, partager les expériences, capturer
								l&apos;instant !
							</span>
						</>
					}
					subtitle={
						<>
							Je souhaite mettre en avant des projets novateurs et inspirants
							par le biais d&apos;une{" "}
							<SpanUnderline>image de qualité</SpanUnderline> et pleine de sens.
							<br />
							La vidéo est un <SpanUnderline>moyen privilégié</SpanUnderline> de
							partager à ton public tes valeurs, tes ambitions et tes
							connaissances.
						</>
					}
					longCatcher={
						<>
							<Subtitle>
								<SpanUnderline>La vidéo</SpanUnderline> : contenu privilégié !
							</Subtitle>
							<P>
								C&apos;est le format le plus consommé de nos jours !<br />
								La demande de contenus vidéos est en constante augmentation.
							</P>
						</>
					}
					catcher={
						<>
							Retranscrire les émotions, partager les expériences,{" "}
							<SpanUnderline variant="secondary">
								capturer l&apos;instant
							</SpanUnderline>{" "}
							!
						</>
					}
					src={presentationVideo}
					alt="Retranscrire les émotions, partager les expériences, capturer l'instant !"
				>
					<div className="mt-[1.875rem] flex flex-col justify-between gap-32">
						<div className="flex flex-col lg:gap-3">
							<H3>
								Inspiration, qualité, <SpanUnderline>sens</SpanUnderline>
							</H3>
							<P>
								Je souhaite mettre en avant des projets novateurs et inspirants,
								par le biais d&apos;une image de qualité et un message qui fait
								sens.
							</P>
						</div>
						<div className="flex flex-col lg:gap-3">
							<H3>
								Partager <SpanUnderline>tes valeurs</SpanUnderline>
							</H3>
							<P>
								L&apos;audiovisuel est le meilleur moyen de partager à ton
								audience tes valeurs, tes ambitions et tes connaissances.
							</P>
						</div>
					</div>
				</Content>
				<Content
					title={
						<>
							J&apos;ai imaginé, enregistré et monté 2 podcasts… bientôt le tien
							?
						</>
					}
					longSubtitle={
						<>
							Toujours en quête de nouveauté et d&apos;originalité, j&apos;aime
							mettre en lumière des projets inspirants grâce à mes compétences
							en SEO et en copywriting.
						</>
					}
					subtitle={
						<>
							<span className="font-bold underline">«Depuis des Lunes»</span>,
							un podcast tourné vers la vie des femmes tout au long de leurs
							cycles hormonaux.
							<br />
							Passionnée par le voyage et les rencontres, j&apos;interviewe{" "}
							<span className="font-bold underline">«Les Baroudeurs»</span> dans
							un podcast du même nom.
						</>
					}
					longCatcher={
						<>
							<Subtitle>
								Diffuse <SpanUnderline>ton message</SpanUnderline> à travers le
								micro !
							</Subtitle>
							<P>
								J&apos;ai aujourd&apos;hui le matériel et les logiciels adéquats
								pour la prise de son. J&apos;ai de l&apos;expérience en
								interview. Je peux ainsi te proposer une prestation complète.
							</P>
						</>
					}
					catcher={
						<>
							{" "}
							Diffuse{" "}
							<SpanUnderline variant="secondary">ton message</SpanUnderline> à
							travers le micro !
						</>
					}
					src={presentationPodcast}
					alt="Diffuse ton message à travers le micro !"
				>
					<div className="mt-[1.875rem] flex flex-col justify-between gap-32">
						<div className="flex flex-col lg:gap-3">
							<H3>
								<SpanUnderline>Depuis des Lunes</SpanUnderline>
							</H3>
							<P>
								Mon vécu m&apos;a poussée à créer un podcast tourné vers la vie
								des femmes tout au long de leurs cycles hormonaux,{" "}
								<span className="font-bold underline">«Depuis des Lunes»</span>
								.
								<br />
								<br />
								Des témoignagnes poignants et émouvants pour raconter ce qui ne
								se raconte pas.
							</P>
						</div>
						<div className="flex flex-col lg:gap-3">
							<H3>
								<SpanUnderline>Les Baroudeurs</SpanUnderline>
							</H3>
							<P>
								Passionnée par le voyage et les rencontres, j&apos;interviewe{" "}
								<span className="font-bold underline">«Les Baroudeurs»</span>
								.
								<br />
								<br />
								Histoires loufoques ou insolites, galères et mésaventures pour
								montrer que la vie est aussi belle que folle.
							</P>
						</div>
					</div>
				</Content>
				<Content
					title={<>À propos de moi</>}
					longSubtitle={
						<>
							D&apos;attachée commerciale dans l&apos;agroalimentaire, à
							digitale nomade, j&apos;ai parcouru du chemin !
						</>
					}
					subtitle={
						<>
							Après 2 ans en tant qu&apos;attachée commerciale, j&apos;ai quitté
							la France pour entamer un{" "}
							<span className="font-bold underline">voyage initiatique</span>au
							Québec.
							<br />
							J&apos;ai aménagé un van pour parcourir le Québec puis le Canada.
							Mes <span className="font-bold underline">rencontres</span>{" "}
							m&apos;ont permis d&apos;apprendre énormément sur moi.
							<br />
							De retour en France, je prends un{" "}
							<span className="font-bold underline">nouveau départ</span>.
							J&apos;ai alors l&apos;idée de monter des interviews !
						</>
					}
					longCatcher={<></>}
					catcher={<></>}
					src={presentationAudiovisuel}
					alt="Mon voyage initiatique"
				>
					<div className="mt-[1.875rem] flex flex-col justify-between gap-32">
						<div className="flex flex-col lg:gap-3">
							<H3>
								<SpanUnderline>Depuis des Lunes</SpanUnderline>
							</H3>
							<P>
								Mon vécu m&apos;a poussée à créer un podcast tourné vers la vie
								des femmes tout au long de leurs cycles hormonaux,{" "}
								<span className="font-bold underline">«Depuis des Lunes»</span>
								.
								<br />
								<br />
								Des témoignagnes poignants et émouvants pour raconter ce qui ne
								se raconte pas.
							</P>
						</div>
						<div className="flex flex-col lg:gap-3">
							<H3>
								<SpanUnderline>Les Baroudeurs</SpanUnderline>
							</H3>
							<P>
								Passionnée par le voyage et les rencontres, j&apos;interviewe{" "}
								<span className="font-bold underline">«Les Baroudeurs»</span>
								.
								<br />
								<br />
								Histoires loufoques ou insolites, galères et mésaventures pour
								montrer que la vie est aussi belle que folle.
							</P>
						</div>
					</div>
				</Content>
				<Content
					className="mb-0"
					title={<>Mon coup de coeur pour l&apos;audiovisuel</>}
					longSubtitle={
						<>
							Je m&apos;intéresse de plus en plus à la photo et au montage
							vidéo. Je propose à des associations puis des artisans de réaliser
							des vidéos de présentation et des interviews et de les monter
							moi-même.
						</>
					}
					subtitle={
						<>
							Je m&apos;intéresse de plus en plus à la photo et au montage
							vidéo. Je propose à des associations puis des artisans de réaliser
							des vidéos de présentation et des interviews et de les monter
							moi-même.
						</>
					}
					longCatcher={
						<div className="flex flex-col gap-8">
							<H2>Tu souhaites voir mes réalisations ?</H2>
							<ButtonLink variant="link" href={PORTFOLIO} target="_blank">
								J&apos;explore le portfolio
							</ButtonLink>
						</div>
					}
					catcher={
						<div className="flex flex-col gap-8">
							<H2>Tu souhaites voir mes réalisations ?</H2>
							<ButtonLink variant="link" href={PORTFOLIO} target="_blank">
								J&apos;explore le portfolio
							</ButtonLink>
						</div>
					}
					src={presentationAudiovisuel}
					alt="Mon coup de coeur pour l'audiovisuel"
				>
					<div className="mt-[1.875rem] flex flex-col justify-between gap-32">
						<div className="flex flex-col lg:gap-3">
							<H3>
								<SpanUnderline>Depuis des Lunes</SpanUnderline>
							</H3>
							<P>
								Mon vécu m&apos;a poussée à créer un podcast tourné vers la vie
								des femmes tout au long de leurs cycles hormonaux,{" "}
								<span className="font-bold underline">«Depuis des Lunes»</span>
								.
								<br />
								<br />
								Des témoignagnes poignants et émouvants pour raconter ce qui ne
								se raconte pas.
							</P>
						</div>
						<div className="flex flex-col lg:gap-3">
							<H3>
								<SpanUnderline>Les Baroudeurs</SpanUnderline>
							</H3>
							<P>
								Passionnée par le voyage et les rencontres, j&apos;interviewe{" "}
								<span className="font-bold underline">«Les Baroudeurs»</span>
								.
								<br />
								<br />
								Histoires loufoques ou insolites, galères et mésaventures pour
								montrer que la vie est aussi belle que folle.
							</P>
						</div>
					</div>
				</Content>
			</div>
		</Screen>
	);
};

export default ScreenPresentation;
