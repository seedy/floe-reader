import BannerMagnifier from "components/Banner/Magnifier";
import ButtonLink from "components/Button/Link";
import Screen from "components/Screen";
import Content from "components/Screen/Presentation/Content";
import Socials from "components/Socials";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import { EMAIL, PORTFOLIO } from "constants/links";
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

const ScreenPresentation = () => {
	return (
		<Screen className="flex flex-col gap-32">
			<div
				className={cn(
					"mx-5 lg:mx-10",
					"flex flex-col lg:grid lg:grid-cols-[auto_1fr]",
					"gap-x-10 gap-y-32",
				)}
			>
				<Content
					title="Un tournage sur-mesure pour les spots vidéo de ton entreprise"
					catcher={
						<>
							Retranscrire les émotions, partager les expériences,{" "}
							<SpanUnderline variant="secondary">
								capturer l&apos;instant
							</SpanUnderline>{" "}
							!
						</>
					}
					hint="Parlons de ton projet audiovisuel !"
					src={presentationTournage}
					alt="Retranscrire les émotions, partager les expériences, capturer l'instant !"
				>
					<P>
						Autodidacte et proactive, je me suis formée aux domaines de la photo
						et du montage vidéo pour{" "}
						<span className="font-bold">
							retranscrire les émotions, partager les expériences, capturer
							l&apos;instant !
						</span>
					</P>
					<P>Ensemble, capturons avec authenticité ton récit.</P>
					<H3>
						Terrain de jeu : <SpanUnderline>France & Europe</SpanUnderline>
					</H3>
					<P>
						Je parcours la France et l&apos;Europe avec{" "}
						<span className="italic">Vanupattes</span>, mon van aménagé, en
						quête de projets innovants et en accord avec l&apos;environnement.
					</P>
					<P>
						Je crée de A à Z des contenus audiovisuels et des reportages.
						<br />
						Nous rédigeons ensemble le script. Je réalise le tournage puis le
						montage et enfin, l&apos;étalonnage pour plus d&apos;authenticité et
						de réalisme.
					</P>
					<P>
						Je souhaite mettre en avant les agronomes et les artisan·e·s
						d&apos;aujourd&apos;hui, qui feront de demain un monde plus
						respectueux des humains et de la nature.
					</P>
					<P>Peut-être en fais-tu partie ?</P>
					<P>
						Adepte des sports en extérieur, je prends beaucoup de plaisir à
						capturer les paysages lors de mes randonnées ou excursions.
						<br />
						Vue de la terre ou vue du ciel, grâce à mon drone, je fais de la
						nature un cadre idyllique pour tes contenus.
					</P>
					<H3>Raconter ton histoire pour faire vibrer ton audience</H3>
					<P>
						Je saisis l&apos;instant pour mettre en avant ton activité avec des
						images qui reflètent ta personnalité et tes ambitions.
						<br />
						Raconte ton histoire et ton parcours pour toucher l&apos;audience
						qui sera sensible à ton travail et tes centres d&apos;intérêt.
					</P>
					<H3>
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
							<SpanUnderline variant="secondary">
								aux couleurs et ambiances
							</SpanUnderline>{" "}
							que dégagent mes réalisations.
						</>
					}
					src={presentationMontage}
					hint="Parlons de tes besoins en montage !"
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
							je porte une attention particulière aux couleurs et ambiances que
							dégagent mes réalisations.
						</span>
						<br />
						J&apos;ai l&apos;habitude d&apos;étalonner des rushs tournés en{" "}
						<span className="italic">Log</span> ou des images capturées en{" "}
						<span className="italic">RAW</span> !
					</P>
					<H3>Je prête main-forte à ton équipe</H3>
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
					<H3>Je monte tes vidéos pour les réseaux sociaux</H3>
					<P>
						Tu es YouTubeur ou YouTubeuse et tu cherches des mains expertes pour
						monter tes vidéos de manière dynamique et percutante pour les
						réseaux ?
					</P>
					<P>
						Issue de la formation <span className="italic">Editing+</span> de
						Armand LesRoux (Armand Pohu), je suis en mesure de réaliser des
						vidéos courtes et punchy pour captiver ton audience !
					</P>
					<P>
						Passionnée par l&apos;étalonnage, je suis capable de créer une
						ambiance visuelle qui reflète ton tempérament et à la hauteur de ta
						créativité.
					</P>
					<P>
						Offrons à ton travail la visibilité qu&apos;il mérite sur les
						réseaux !
					</P>
				</Content>
				<Content
					title="Tu prendras bien un shot de photo ?"
					hint="Parlons de ton projet photo !"
					catcher={
						<>
							Des photos de qualité qui te ressemblent, afin d&apos;
							<SpanUnderline>asseoir ton image</SpanUnderline> auprès de ton
							audience
						</>
					}
					src={presentationPhoto}
					alt="Des photos de qualité qui te ressemblent, afin d'asseoir ton image auprès de ton audience"
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
					<H3>Shooting</H3>
					<P>
						Tu souhaites présenter{" "}
						<span className="font-bold">
							des photos de qualité qui te ressemblent, afin d&apos;asseoir ton
							image auprès de ton audience
						</span>{" "}
						?
					</P>
					<P>
						Faisons tomber les barrières qui t&apos;empêchent de donner du sens
						à ton image.
					</P>
					<H3>Mes images</H3>
					<P>
						Constamment à la recherche d&apos;un petit coin de nature,
						j&apos;aime photographier la plénitude et l&apos;immensité des
						paysages.
						<br />
						Grâce à mon boîtier, qui ne me quitte jamais et mon drone, je prends
						plaisir à documenter mes voyages et mes passions.
					</P>
					<P>
						Tu peux d&apos;ores et déjà retrouver mes clichés sur mes réseaux ou
						mon portfolio !
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
						Certains de mes clichés te font de l&apos;oeil ?
						<br />
						Mes images sont disponibles à l&apos;achat individuel ou groupé, je
						t&apos;invite à{" "}
						<ButtonLink href={EMAIL} target="_blank">
							m&apos;écrire
						</ButtonLink>{" "}
						pour en savoir plus.
					</P>
					<H3>Tes images</H3>
					<P>
						Tu as un besoin spécifique et tu souhaites des photos
						personnalisées, mais tu ne peux pas te déplacer ?
						<br />
						En tant que digital nomade, je suis à même de le faire pour toi !
					</P>
				</Content>
				<Content
					title={"À propos de moi"}
					src={presentationMoi}
					catcher={
						<>
							Passionnée par{" "}
							<SpanUnderline variant="secondary">le voyage</SpanUnderline> et
							les belles images, j&apos;ai à coeur de créer des vidéos de
							qualité
						</>
					}
					alt="Passionnée par le voyage et les belles images, j'ai à coeur de créer des vidéos de qualité"
				>
					<H3>Il était une fois : voyage initiatique et reconversion</H3>
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
						C&apos;est là que j&apos;entame ma reconversion.
					</P>
					<H3>Aujourd&apos;hui</H3>
					<P>
						Je suis Floé Gaubert, monteuse vidéo et photographe.
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
						<br />
						La curiosité n&apos;est pas qu&apos;un vilain défaut.
						<br />
						La mienne me pousse à travailler sur des projets divers et variés et
						vient challenger ma créativité afin de répondre à tes besoins.
						<br />
						Grâce à ma capacité d&apos;écoute, je serai en mesure de répondre à
						tes attentes et de mettre en lumière ce qui fait ta singularité.
					</P>
				</Content>
				<Content
					className="mb-0"
					title={<>Mon coup de coeur pour l&apos;audiovisuel</>}
					catcher={
						<>
							Suite à plusieurs humbles podcasts dont je suis tout de même
							particulièrement fière, j&apos;ai pris conscience de mon envie de
							<SpanUnderline variant="secondary">
								réaliser des interviews
							</SpanUnderline>
						</>
					}
					src={presentationAudiovisuel}
					alt="Mon coup de coeur pour l'audiovisuel"
				>
					<P>
						J&apos;ai investi dans un appareil photo numérique hybride - mon
						Fujifilm XS-10 - qui me suit partout.
						<br />
						J&apos;ai toujours adoré les photos qui suscitent l&apos;émotion !
					</P>
					<H3>Du podcast au "dé-click" !</H3>
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
							Suite à plusieurs humbles podcasts dont je suis tout de même
							particulièrement fière, j&apos;ai pris conscience de mon envie de
							réaliser des interviews.
						</span>
						<br />
						J&apos;ai alors opté pour associer un micro à mon appareil hybride.
						J&apos;étais fin prête !
					</P>
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
		</Screen>
	);
};

export default ScreenPresentation;
