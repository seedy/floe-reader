import Screen from "components/Screen";
import AvatarAndContent from "components/Screen/Presentation/AvatarAndContent";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import Subtitle from "components/Typography/Subtitle";
import presentation1 from "public/presentation-1.jpg";
import presentation2 from "public/presentation-2.jpg";
import presentation3 from "public/presentation-3.jpg";

const ScreenPresentation = () => {
	return (
		<>
			<Screen>
				<AvatarAndContent
					title="Je rédige et corrige ton contenu web"
					longSubtitle={
						<>
							J&apos;aime mettre en lumière des projets inspirants grâce à mes
							compétences en SEO et en copywriting.
						</>
					}
					subtitle={
						<>
							J&apos;aime mettre en lumière des projets inspirants grâce à mes
							compétences en SEO et en copywriting.
							<br />
							<SpanUnderline>Entrepreneur·euse</SpanUnderline>,
							<SpanUnderline>porteur·euse</SpanUnderline> de projets ou encore{" "}
							<SpanUnderline>artisan</SpanUnderline>, tu souhaites capter
							l&apos;attention de ton client idéal, de manière transparente et
							authentique ?
						</>
					}
					longCatcher={
						<>
							{" "}
							<Subtitle>
								Je rédige pour{" "}
								<SpanUnderline variant="secondary">ton audience</SpanUnderline>{" "}
								!
							</Subtitle>
							<P>
								Je définis ton client idéal ainsi que le message qui attirera
								son attention, de manière transparente et authentique.
							</P>
						</>
					}
					catcher={
						<>
							Je rédige pour{" "}
							<SpanUnderline variant="secondary">ton audience</SpanUnderline> !
						</>
					}
					src={presentation1}
					alt="Je rédige pour ton audience !"
				>
					<div className="mt-[1.875rem] flex flex-col justify-between gap-32">
						<P>
							Tu aimerais concevoir une communication à la hauteur de tes
							ambitions ? Créons ensemble,{" "}
							<span className="font-bold">
								le contenu qui fera parler de toi.
							</span>
						</P>
						<P>
							Tu as besoin d&apos;une expertise en communication pour rendre tes
							contenus percutants ? Fais réagir ton public avec{" "}
							<span className="font-bold">un message vibrant.</span>
						</P>
						<P>
							Tu souhaites promouvoir tes services sur le web de manière
							captivante et humaine ? Prenons le temps d&apos;étudier ton
							audience pour{" "}
							<span className="font-bold">
								créer du contenu attrayant et percutant.
							</span>
						</P>
					</div>
				</AvatarAndContent>
			</Screen>
			<Screen>
				<AvatarAndContent
					side="right"
					title="Je crée du contenu photo et vidéo pour améliorer ta visibilité"
					longSubtitle={
						<>
							{" "}
							Autodidacte et proactive, je me suis formée aux domaines de la
							photo et du montage vidéo.
							<br />
							<span className="font-bold">
								Transmettre des émotions, partager le voyage, capturer
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
					src={presentation2}
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
				</AvatarAndContent>
			</Screen>
			<Screen>
				<AvatarAndContent
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
					src={presentation3}
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
				</AvatarAndContent>
			</Screen>
		</>
	);
};

export default ScreenPresentation;
