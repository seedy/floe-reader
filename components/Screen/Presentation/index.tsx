import Flex from "components/Flex";
import Screen from "components/Screen";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import styles from "components/Screen/Presentation/Presentation.module.css";
import presentation1 from "public/presentation-1.jpg";
import presentation2 from "public/presentation-2.jpg";
import presentation3 from "public/presentation-3.jpg";
import Subtitle from "components/Typography/Subtitle";
import Avatar from "components/Avatar";
import Grid from "components/Grid";
import H3 from "components/Typography/H3";

const ScreenPresentation = () => {
	return (
		<>
			<Screen>
				<Flex className={styles.root}>
					<Flex direction="column" className={styles.heading}>
						<H2>Je rédige et corrige ton contenu web</H2>
						<P className="hidden lg:block">
							J&apos;aime mettre en lumière des projets inspirants grâce à mes
							compétences en SEO et en copywriting.
						</P>
						<P className="lg:hidden">
							J&apos;aime mettre en lumière des projets inspirants grâce à mes
							compétences en SEO et en copywriting.
							<br />
							<SpanUnderline>Entrepreneur·euse</SpanUnderline>,
							<SpanUnderline>porteur·euse</SpanUnderline> de projets ou encore{" "}
							<SpanUnderline>artisan</SpanUnderline>, tu souhaites capter
							l&apos;attention de ton client idéal, de manière transparente et
							authentique ?
						</P>
						<Flex direction="column" className={styles.details} grow>
							<Grid className={styles.grid} cols={3}>
								<P>
									Tu aimerais concevoir une communication à la hauteur de tes
									ambitions ? Créons ensemble,{" "}
									<span className={styles.catchphrase}>
										le contenu qui fera parler de toi.
									</span>
								</P>
								<P>
									Tu as besoin d&apos;une expertise en communication pour rendre
									tes contenus percutants ? Fais réagir ton public avec{" "}
									<span className={styles.catchphrase}>
										un message vibrant.
									</span>
								</P>
								<P>
									Tu souhaites promouvoir tes services sur le web de manière
									captivante et humaine ? Prenons le temps d&apos;étudier ton
									audience pour{" "}
									<span className={styles.catchphrase}>
										créer du contenu attrayant et percutant.
									</span>
								</P>
							</Grid>
							<Flex
								direction="column"
								align="center"
								className={styles.subtitle}
							>
								<Subtitle>
									Je rédige pour{" "}
									<SpanUnderline variant="secondary">
										ton audience
									</SpanUnderline>{" "}
									!
								</Subtitle>
								<P>
									Je définis ton client idéal ainsi que le message qui attirera
									son attention, de manière transparente et authentique.
								</P>
							</Flex>
						</Flex>
					</Flex>
					<Flex direction="column" className={styles.hero}>
						<Avatar
							src={presentation1}
							className={styles.image}
							alt="Je rédige pour ton audience !"
						/>
						<Subtitle className="lg:hidden">
							Je rédige pour{" "}
							<SpanUnderline variant="secondary">ton audience</SpanUnderline> !
						</Subtitle>
					</Flex>
				</Flex>
			</Screen>
			<Screen>
				<Flex className={styles.root}>
					<Flex direction="column" className={styles.heading}>
						<H2>
							Je crée du contenu photo et vidéo pour améliorer ta visibilité
						</H2>
						<P className="hidden lg:block">
							Autodidacte et proactive, je me suis formée aux domaines de la
							photo et du montage vidéo.
							<br />
							<span className={styles.catchphrase}>
								Transmettre des émotions, partager le voyage, capturer
								l&apos;instant !
							</span>
						</P>
						<P className="lg:hidden">
							Je souhaite mettre en avant des projets novateurs et inspirants
							par le biais d&apos;une{" "}
							<SpanUnderline>image de qualité</SpanUnderline> et pleine de sens.
							<br />
							La vidéo est un <SpanUnderline>moyen privilégié</SpanUnderline> de
							partager à ton public tes valeurs, tes ambitions et tes
							connaissances.
						</P>
						<Flex direction="column" className={styles.details} grow>
							<Grid className={styles.grid} cols={2}>
								<Flex direction="column" className={styles.subtitle}>
									<H3>Inspiration, qualité, sens</H3>
									<P>
										Je souhaite mettre en avant des projets novateurs et
										inspirants, par le biais d&apos;une image de qualité et un
										message qui fait sens.
									</P>
								</Flex>
								<Flex direction="column" className={styles.subtitle}>
									<H3>
										Partager <SpanUnderline>tes valeurs</SpanUnderline>
									</H3>
									<P>
										L&apos;audiovisuel est le meilleur moyen de partager à ton
										audience tes valeurs, tes ambitions et tes connaissances.
									</P>
								</Flex>
							</Grid>
							<Flex
								direction="column"
								align="center"
								className={styles.subtitle}
							>
								<Subtitle>
									<SpanUnderline>La vidéo</SpanUnderline> : contenu privilégié !
								</Subtitle>
								<P>
									C&apos;est le format le plus consommé de nos jours !<br />
									La demande de contenus vidéos est en constante augmentation.
								</P>
							</Flex>
						</Flex>
					</Flex>
					<Flex direction="column" className={styles.hero}>
						<Avatar
							src={presentation2}
							className={styles.image}
							alt="Retranscrire les émotions, partager les expériences, capturer l'instant !"
						/>
						<Subtitle className="lg:hidden">
							Retranscrire les émotions, partager les expériences,{" "}
							<SpanUnderline variant="secondary">
								capturer l&apos;instant
							</SpanUnderline>{" "}
							!
						</Subtitle>
					</Flex>
				</Flex>
			</Screen>
			<Screen>
				<Flex className={styles.root}>
					<Flex direction="column" className={styles.heading}>
						<H2>
							J&apos;ai imaginé, enregistré et monté 2 podcasts… bientôt le tien
							?
						</H2>
						<P className="hidden lg:block">
							Toujours en quête de nouveauté et d&apos;originalité, j&apos;aime
							mettre en lumière des projets inspirants grâce à mes compétences
							en SEO et en copywriting.
							<br />
							<span className={styles.catchphrase}>
								Transmettre des émotions, partager le voyage, capturer
								l&apos;instant !
							</span>
						</P>
						<P className="lg:hidden">
							<span className={styles.quote}>«Depuis des Lunes»</span>, un
							podcast tourné vers la vie des femmes tout au long de leurs cycles
							hormonaux.
							<br />
							Passionnée par le voyage et les rencontres, j&apos;interviewe{" "}
							<span className={styles.quote}>«Les Baroudeurs»</span> dans un
							podcast du même nom.
						</P>
						<Flex direction="column" className={styles.details} grow>
							<Grid className={styles.grid} cols={2}>
								<Flex direction="column" className={styles.subtitle}>
									<H3>
										<SpanUnderline>Depuis des Lunes</SpanUnderline>
									</H3>
									<P>
										Mon vécu m&apos;a poussée à créer un podcast tourné vers la
										vie des femmes tout au long de leurs cycles hormonaux,{" "}
										<span className={styles.quote}>«Depuis des Lunes»</span>.
										<br />
										<br />
										Des témoignagnes poignants et émouvants pour raconter ce qui
										ne se raconte pas.
									</P>
								</Flex>
								<Flex direction="column" className={styles.subtitle}>
									<H3>
										<SpanUnderline>Les Baroudeurs</SpanUnderline>
									</H3>
									<P>
										Passionnée par le voyage et les rencontres,
										j&apos;interviewe{" "}
										<span className={styles.quote}>«Les Baroudeurs»</span>.
										<br />
										<br />
										Histoires loufoques ou insolites, galères et mésaventures
										pour montrer que la vie est aussi belle que folle.
									</P>
								</Flex>
							</Grid>
							<Flex
								direction="column"
								align="center"
								className={styles.subtitle}
							>
								<Subtitle>
									Diffuse <SpanUnderline>ton message</SpanUnderline> à travers
									le micro !
								</Subtitle>
								<P>
									J&apos;ai aujourdh&apos;ui le matériel et les logiciels
									adéquats pour la prise de son. J&apos;ai de l&apos;expérience
									en interview. Je peux ainsi te proposer une prestation
									complète.
								</P>
							</Flex>
						</Flex>
					</Flex>
					<Flex direction="column" className={styles.hero}>
						<Avatar
							src={presentation3}
							className={styles.image}
							alt="Diffuse ton message à travers le micro !"
						/>
						<Subtitle className="lg:hidden">
							Diffuse{" "}
							<SpanUnderline variant="secondary">ton message</SpanUnderline> à
							travers le micro !
						</Subtitle>
					</Flex>
				</Flex>
			</Screen>
		</>
	);
};

export default ScreenPresentation;
