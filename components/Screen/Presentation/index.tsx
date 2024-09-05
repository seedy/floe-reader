import BannerMagnifier from "components/Banner/Magnifier";
import ButtonLink from "components/Button/Link";
import Screen from "components/Screen";
import Content from "components/Screen/Presentation/Content";
import SlotTrack from "components/Slot/Track";
import Socials from "components/Socials";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import {
	EMAIL,
	ZCAL_INTERVIEW,
	ZCAL_MONTAGE,
	ZCAL_PHOTO,
} from "constants/links";
import cn from "helpers/cn";
import djimini4pro from "public/dji-mini4-pro.webp";
import djirs3 from "public/dji-rs3.webp";
import fujixs10 from "public/fuji-xs10.webp";
import presentationAudiovisuel from "public/presentation-audiovisuel.webp";
import presentationMoi from "public/presentation-moi.webp";
import presentationMontage from "public/presentation-montage.webp";
import presentationPhoto from "public/presentation-photo.webp";
import presentationTournage from "public/presentation-tournage.webp";
import zoomh5 from "public/zoom-h5.webp";
import { ReactNode } from "react";

interface ScreenPresentationProps {
	children: ReactNode;
}
const ScreenPresentation = ({ children }: ScreenPresentationProps) => {
	return (
		<>
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
						title="Un tournage sur-mesure pour les spots vidéo de ton entreprise"
						summary={[
							<P key={1}>
								Je crée de A à Z différents formats audiovisuels et des
								reportages.
								<br />
								Nous rédigeons ensemble le script. Je réalise le tournage puis
								le montage et enfin, l&apos;étalonnage pour plus
								d&apos;authenticité et de réalisme.
							</P>,
						]}
						catcher={
							<>
								Retranscrire les émotions, partager les expériences,{" "}
								<SpanUnderline variant="secondary">
									capturer l&apos;instant
								</SpanUnderline>{" "}
								!
							</>
						}
						cta={
							<div className="flex flex-col items-center gap-4">
								<P className="text-textHint">
									Parlons de ton projet audiovisuel !
								</P>
								<SlotTrack name="click presentation cta interview">
									<ButtonLink
										variant="contained"
										color="primary"
										href={ZCAL_INTERVIEW}
									>
										Je prends rendez-vous
									</ButtonLink>
								</SlotTrack>
							</div>
						}
						src={presentationTournage}
						alt="Retranscrire les émotions, partager les expériences, capturer l'instant !"
					>
						<P>
							Autodidacte et proactive, je me suis formée aux domaines de la
							photo et du montage vidéo pour{" "}
							<span className="font-bold">
								retranscrire les émotions, partager les expériences, capturer
								l&apos;instant !
							</span>
						</P>
						<P>
							Ensemble, capturons avec authenticité ton récit.
							<br />
							Vue de la terre ou vue du ciel, grâce à mon drone, je fais de la
							nature un cadre idyllique pour tes contenus.
						</P>
						<P>
							Je crée de A à Z différents formats audiovisuels et des
							reportages.
							<br />
							Nous rédigeons ensemble le script. Je réalise le tournage puis le
							montage et enfin, l&apos;étalonnage pour plus d&apos;authenticité
							et de réalisme.
						</P>
						<H3 className="mb-2 mt-6">
							Raconter <SpanUnderline>ton histoire</SpanUnderline> pour faire
							vibrer ton audience
						</H3>
						<P>
							Je saisis l&apos;instant pour mettre en avant ton activité avec
							des images qui reflètent ta personnalité et tes ambitions.
							<br />
							Ton vécu et ton parcours en vidéo pour toucher l&apos;audience qui
							sera sensible à ton travail et tes centres d&apos;intérêt.
						</P>
						<H3 className="mb-2 mt-6">
							Partager <SpanUnderline>tes valeurs</SpanUnderline>
						</H3>
						<P>
							L&apos;audiovisuel est aujourd&apos;hui le meilleur moyen de
							transmettre à ton audience tes valeurs, tes ambitions et tes
							connaissances.
							<br />
							La demande de contenus vidéo est en constante augmentation.
						</P>
						<P>
							Pour créer ensemble les contenus qui feront écho auprès de ton
							public, j&apos;ai besoin d&apos;en apprendre un maximum sur ton
							projet et ton parcours !
						</P>
					</Content>
					<Content
						title="En solo ou en renfort d'équipe ! Je monte et transforme tes rushs en vidéos pour les réseaux !"
						catcher={
							<>
								Je porte une attention particulière{" "}
								<SpanUnderline variant="secondary">aux couleurs</SpanUnderline>{" "}
								et ambiances que dégagent mes réalisations.
							</>
						}
						summary={[
							<P key={1}>
								Du short, à la vidéo courte, en passant par le reportage, je
								sais orchestrer le tempo qui convient à ton besoin et au style
								de tes contenus.
							</P>,
							<P key={2}>
								Besoin d&apos;une aide temporaire pour assurer tes délais de
								livraisons ? Je suis celle qu&apos;il te faut !
							</P>,
							<P key={3}>
								Réactive et proactive, j&apos;aime relever des défis et
								travailler en équipe.
							</P>,
						]}
						src={presentationMontage}
						cta={
							<div className="flex flex-col items-center gap-4">
								<P className="text-textHint">
									Parlons de tes besoins en montage !
								</P>
								<SlotTrack name="click presentation cta montage">
									<ButtonLink
										variant="contained"
										color="primary"
										href={ZCAL_MONTAGE}
									>
										Je prends rendez-vous
									</ButtonLink>
								</SlotTrack>
							</div>
						}
						alt="Je porte une attention particulière aux couleurs et ambiances que dégagent mes réalisations"
					>
						<P>
							Après une formation en montage vidéo destinée aux réseaux sociaux,
							j&apos;ai choisi d&apos;explorer d&apos;autres styles de montage.
						</P>
						<P>
							Du short, à la vidéo courte, en passant par le reportage, je sais
							orchestrer le tempo qui convient à ton besoin et au style de tes
							contenus.
						</P>
						<P>
							Adepte des belles images,{" "}
							<span className="font-bold">
								je porte une attention particulière aux couleurs et ambiances
								que dégagent mes réalisations.
							</span>
							<br />
							J&apos;ai l&apos;habitude d&apos;étalonner des rushs tournés en{" "}
							<span className="italic">Log</span> ou des images capturées en{" "}
							<span className="italic">RAW</span> !
						</P>
						<H3 className="mb-2 mt-6">Je prête main-forte à ton équipe</H3>
						<P>
							Sur les routes une partie du temps, je propose mes services de
							monteuse vidéo freelance pour renforcer ton équipe technique en
							place.
						</P>
						<P>
							Besoin d&apos;une aide temporaire pour assurer tes délais de
							livraisons ou traiter une plus grande charge de travail ? Je suis
							celle qu&apos;il te faut !
						</P>
						<P>
							Réactive et proactive, j&apos;aime relever des défis et travailler
							en équipe.
							<br />À l&apos;écoute et force de proposition, je participe à ton
							brainstorming pour un travail efficace et au rendu professionnel.
						</P>
						<H3 className="mb-2 mt-6">
							Je monte tes vidéos pour les réseaux sociaux
						</H3>
						<P>
							Tu es YouTubeur ou YouTubeuse et tu cherches des mains expertes
							pour monter tes vidéos de manière dynamique et percutante pour les
							réseaux ?
						</P>
						<P>
							Issue de la formation <span className="italic">Editing+</span> de
							Armand LesRoux (Armand Pohu), je suis en mesure de réaliser des
							vidéos courtes et punchy pour captiver ton audience !
						</P>
						<P>
							Passionnée par l&apos;étalonnage, je suis capable de créer une
							ambiance visuelle qui reflète ton tempérament et à la hauteur de
							ta créativité.
						</P>
						<P>
							Offrons à ton travail la visibilité qu&apos;il mérite sur les
							réseaux !
						</P>
					</Content>
					<Content
						title="Tu prendras bien un shot de photo ?"
						cta={
							<div className="flex flex-col items-center gap-4">
								<P className="text-textHint">Parlons de ton projet photo !</P>
								<SlotTrack name="click presentation cta photo">
									<ButtonLink
										variant="contained"
										color="primary"
										href={ZCAL_PHOTO}
									>
										Je prends rendez-vous
									</ButtonLink>
								</SlotTrack>
							</div>
						}
						summary={[
							<P key={1}>
								Transmettre un message et une émotion est le rôle essentiel de
								mes photographies.
							</P>,
							<P key={2}>
								Je capture les portraits qui te mettront en valeur, ainsi que
								ton cadre quotidien.
							</P>,
							<P key={3}>
								<span className="font-bold">Passe ta commande</span>, en tant
								que digital nomade, je suis en mesure de prendre tes clichés sur
								la route !
							</P>,
							<P key={4}>
								Mes images sont aussi disponibles à l&apos;achat individuel ou
								groupé.
							</P>,
						]}
						catcher={
							<>
								Des photos de qualité qui te ressemblent, afin de mettre en
								avant{" "}
								<SpanUnderline variant="secondary">
									ta personnalité
								</SpanUnderline>
							</>
						}
						src={presentationPhoto}
						alt="Des photos de qualité qui te ressemblent, afin de mettre en avant ta personnalité"
					>
						<P>
							Voyager grâce à une photo de paysage, ressentir des émotions
							intenses à la vue d&apos;un simple cliché.
							<br />
							Voilà ce qui, pour moi, définit une photo réussie.
							<br />
							Transmettre un message et une émotion est le rôle essentiel de mes
							photographies.
						</P>
						<H3 className="mb-2 mt-6">Shooting</H3>
						<P>
							Tu souhaites présenter{" "}
							<span className="font-bold">
								des photos de qualité qui te ressemblent, afin de mettre en
								avant ta personnalité
							</span>{" "}
							?
						</P>
						<P>
							Je capture les portraits qui te mettront en valeur, ainsi que ton
							cadre quotidien.
							<br />
							Je t&apos;accompagne et couvre tes évènements, sur toute la France
							et l&apos;Europe.
						</P>
						<H3 className="mb-2 mt-6">
							Des images <SpanUnderline>à ta demande</SpanUnderline>
						</H3>
						<P>
							Tu as un besoin spécifique et tu aimerais acquérir des photos
							personnalisées, mais tu ne peux pas te déplacer ?
							<br />
							<span className="font-bold">Passe ta commande</span>, en tant que
							digital nomade, je suis à même de prendre ces clichés sur la route
							!
						</P>

						<H3 className="mb-2 mt-6">Mes images à la revente</H3>
						<P>
							À l&apos;affût du moindre recoin de nature, j&apos;aime
							photographier la plénitude et l&apos;immensité des paysages.
							<br />
							Grâce à mon boîtier, qui ne me quitte jamais et mon drone, je
							prends plaisir à documenter mes voyages et mes passions.
						</P>
						<P>
							Tu peux d&apos;ores et déjà retrouver mes photos sur mes réseaux
							ou mon portfolio !
						</P>
						<div className="flex w-full justify-center">
							<Socials
								sources={{
									instagram: true,
									linkedin: false,
									portfolio: true,
									youtube: false,
								}}
							/>
						</div>
						<P>
							Certaines de mes images te font de l&apos;oeil ?
							<br />
							Elles sont disponibles à l&apos;achat individuel ou groupé, je
							t&apos;invite à{" "}
							<ButtonLink
								className="min-w-fit items-baseline px-0"
								href={EMAIL}
								target="_blank"
							>
								m&apos;écrire
							</ButtonLink>{" "}
							pour en savoir plus.
						</P>
					</Content>
				</div>
			</Screen>
			{children}
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
					<H2>Mon matériel</H2>
					<BannerMagnifier
						items={[
							{
								src: fujixs10,
								label: "Fujifilm XS-10",
								href: "https://fujifilm-x.com/fr-fr/products/cameras/x-s10/",
							},
							{
								src: zoomh5,
								label: "Zoom H5",
								href: "https://www.zoom-europe.com/en/handy-recorders/zoom-h5",
							},
							{
								src: djirs3,
								label: "DJI RS-3",
								href: "https://www.dji.com/fr/rs-3",
							},
							{
								src: djimini4pro,
								label: "DJI mini 4 pro",
								href: "https://www.dji.com/fr/mini-4-pro",
							},
						]}
					/>
				</div>
				<div className="flex grow flex-col items-center gap-2.5 text-center">
					<H2>Rejoins mes réseaux pour suivre mes actualités</H2>
					<Socials />
				</div>
			</Screen>
		</>
	);
};

export default ScreenPresentation;
