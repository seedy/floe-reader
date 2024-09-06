import ButtonLink from "components/Button/Link";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import Subtitle from "components/Typography/Subtitle";
import { EMAIL, TEL } from "constants/links";
import cn from "helpers/cn";
import Link from "next/link";

const Legal = () => (
	<section className={cn("flex flex-col gap-10 pt-6", "mx-5 lg:mx-10")}>
		<H1>Mentions légales</H1>
		<Subtitle>En vigueur au 01/09/2024</Subtitle>
		<div className="flex flex-col gap-6">
			<P>
				Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour
				la Confiance en l&apos;économie numérique, il est porté à la
				connaissance des utilisateurs et visiteurs, ci-après l&apos;
				<span className="font-bold">&ldquo;Utilisateur&rdquo;</span>, du site
				floegaubert.com, ci-après le{" "}
				<span className="font-bold">&ldquo;Site&rdquo;</span>, les présentes
				mentions légales.
			</P>
			<P>
				La connexion et la navigation sur le Site par l&apos;Utilisateur
				impliquent acceptation intégrale et sans réserve des présentes mentions
				légales.
			</P>
		</div>
		<H2>Identité de l&apos;entreprise</H2>
		<div className="flex flex-col gap-6">
			<P>
				Floé Gaubert exerce son activité de Monteuse & Expérimentaliste sous le
				statut d&apos;Entrepreneur individuel, immatriculée au numéro Siren
				919788596.
				<br />
				Son siège social est situé au 436 Chemin du Chambost, 69470, Ranchal,
				FRANCE.
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						<span className="font-bold">Numéro de téléphone</span> :{" "}
						{TEL.replace("tel:", "")}
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">Adresse e-mail</span> :{" "}
						<ButtonLink inline href={EMAIL} target="_blank">
							{EMAIL.replace("mailto:", "")}
						</ButtonLink>
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">N° de TVA intracommunautaire</span> :
						FR10919788596
					</P>
				</li>
			</ul>
		</div>
		<H2>Droits d&apos;auteur</H2>
		<P>
			Toutes les photos et vidéos présentes sur ce site sont soumises au droit
			d&apos;auteur et sont la propriété exclusive de Floé Gaubert, sauf mention
			contraire en légende de celles-ci.
			<br />
			Les photos et vidéos présentes sur ce site ne peuvent être copiées et
			utilisées sans l&apos;accord écrit de Floé Gaubert. Pour toute demande,
			merci de la contacter par{" "}
			<ButtonLink inline href={EMAIL} target="_blank">
				e-mail
			</ButtonLink>
			.
		</P>
		<H2>Édition du site</H2>
		<div className="flex flex-col gap-6">
			<P>
				L&apos;édition du Site est assurée par la société MONSIEUR CÉDRIC
				DUPUIS, Entrepreneur individuel sous le numéro Siren 810357509, dont le
				siège social est situé au 436 Chemin du Chambost, 69470, Ranchal,
				FRANCE.
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						<span className="font-bold">Numéro de téléphone</span> : 0640907621
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">Adresse e-mail</span> :{" "}
						<ButtonLink
							inline
							href="mailto:pro.cedric.dupuis@gmail.com"
							target="_blank"
						>
							pro.cedric.dupuis@gmail.com
						</ButtonLink>
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">N° de TVA intracommunautaire</span> :
						FR48810357509
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">Directeur de la publication</span> :
						DUPUIS Cédric
					</P>
				</li>
			</ul>
			<P>
				Ci-après l&apos;<span className="font-bold">&ldquo;Éditeur&rdquo;</span>
				.
			</P>
		</div>
		<H2>Hébergeur</H2>
		<P>
			L&apos;hébergeur du Site est la société{" "}
			<span className="font-bold">Vercel Inc.</span>, dont le siège social est
			situé au 440 N Barranca Avenue #4133, Covina, CA 91723, Etats-Unis.
		</P>
		<H2>Accès au site</H2>
		<div className="flex flex-col gap-6">
			<P>
				Le Site est normalement accessible, à tout moment, à l&apos;Utilisateur.
				<br />
				Toutefois, l&apos;Editeur pourra, à tout moment, suspendre, limiter ou
				interrompre le Site afin de procéder, notamment, à des mises à jour ou
				des modifications de son contenu.
				<br />
				L&apos;Editeur ne pourra en aucun cas être tenu responsable des
				conséquences éventuelles de cette indisponibilité sur les activités de
				l&apos;Utilisateur.
			</P>
			<P>
				Toute utilisation, reproduction, diffusion, commercialisation,
				modification de toute ou partie du Site, sans autorisation expresse de
				l&apos;Editeur est prohibée et pourra entraîner des actions et
				poursuites judiciaires telles que prévues par la règlementation en
				vigueur.
			</P>
			<P>
				Pour plus d&apos;informations en matière de protection des données à
				caractère personnel, se reporter à la Charte en matière de protection
				des données à caractère personnel du site floegaubert.com accessible
				depuis la page{" "}
				<Link href="/privacy" passHref legacyBehavior>
					<ButtonLink inline>Confidentialité</ButtonLink>
				</Link>
				.
			</P>
		</div>
	</section>
);

export default Legal;
