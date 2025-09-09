import ButtonLink from "components/Button/Link";
import ButtonLinkNext from "components/Button/Link/Next";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import cn from "helpers/cn";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Floé Gaubert - Photographe, vidéaste et monteuse vidéo | Confidentialité",
	description: "Confidentialité du site vitrine",
};

const Privacy = () => (
	<section className={cn("flex flex-col gap-10 pt-6", "mx-5 lg:mx-10")}>
		<H1>Confidentialité</H1>
		<H2>Préambule</H2>
		<div className="flex flex-col gap-6">
			<P>
				La présente politique de confidentialité a pour but d&apos;informer les
				utilisateurs du site :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						Sur la manière dont sont collectées leurs données personnelles. Sont
						considérées comme des données personnelles, toute information
						permettant d&apos;identifier un utilisateur.
						<br />A ce titre, il peut s&apos;agir : de ses noms et prénoms, de
						son âge, de son adresse postale ou email, de sa localisation ou
						encore de son adresse IP (liste non-exhaustive) ;
					</P>
				</li>
				<li>
					<P inline>
						Sur les droits dont ils disposent concernant ces données ;
					</P>
				</li>
				<li>
					<P inline>Sur le délégué à la protection des données ;</P>
				</li>
				<li>
					<P inline>Sur les destinataires des données ;</P>
				</li>
				<li>
					<P inline>Sur la politique du site en matière de cookies.</P>
				</li>
			</ul>
			<P>
				Cette politique complète les mentions légales consultables sur la page{" "}
				<ButtonLinkNext href="/legal" inline>
					Mentions légales
				</ButtonLinkNext>
			</P>
		</div>
		<H2>
			Principes relatifs à la collecte et au traitement des données personnelles
		</H2>
		<div className="flex flex-col gap-6">
			<P>
				Conformément à l&apos;article 5 du Règlement européen 2016/679, les
				données à caractère personnel sont :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						Traitées de manière licite, loyale et transparente au regard de la
						personne concernée ;
					</P>
				</li>
				<li>
					<P inline>
						Collectées pour des finalités déterminées (voir ci-après),
						explicites et légitimes, et ne sont pas traitées ultérieurement
						d&apos;une manière incompatible avec ces finalités ;
					</P>
				</li>
				<li>
					<P inline>
						Exactes et, si nécessaire, tenues à jour. Toutes les mesures
						raisonnables doivent être prises pour que les données à caractère
						personnel qui sont inexactes, eu égard aux finalités pour lesquelles
						elles sont traitées, soient effacées ou rectifiées sans tarder ;
					</P>
				</li>
				<li>
					<P inline>
						Adéquates, pertinentes et limitées à ce qui est nécessaire au regard
						des finalités pour lesquelles elles sont traitées ;
					</P>
				</li>
				<li>
					<P inline>
						Conservées sous une forme permettant l&apos;identification des
						personnes concernées pendant une durée n&apos;excédant pas celle
						nécessaire au regard des finalités pour lesquelles elles sont
						traitées ;
					</P>
				</li>
				<li>
					<P inline>
						Traitées de façon à garantir une sécurité appropriée des données
						collectées, y compris la protection contre le traitement non
						autorisé ou illicite et contre la perte, la destruction ou les
						dégâts d&apos;origine accidentelle, à l&apos;aide de mesures
						techniques ou organisationnelles appropriées.
					</P>
				</li>
			</ul>
			<P>
				Le traitement n&apos;est licite que si, et dans la mesure où, au moins
				une des conditions suivantes est remplie :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						La personne concernée a consenti au traitement de ses données à
						caractère personnel pour une ou plusieurs finalités spécifiques ;
					</P>
				</li>
				<li>
					<P inline>
						Le traitement est nécessaire à l&apos;exécution d&apos;un contrat
						auquel la personne concernée est partie ou à l&apos;exécution de
						mesures précontractuelles prises à la demande de celle-ci ;
					</P>
				</li>
				<li>
					<P inline>
						Le traitement est nécessaire au respect d&apos;une obligation légale
						à laquelle le responsable du traitement est soumis ;
					</P>
				</li>
				<li>
					<P inline>
						Le traitement est nécessaire à la sauvegarde des intérêts vitaux de
						la personne concernée ou d&apos;une autre personne physique ;
					</P>
				</li>
				<li>
					<P inline>
						Le traitement est nécessaire à l&apos;exécution d&apos;une mission
						d&apos;intérêt public ou relevant de l&apos;exercice de
						l&apos;autorité publique dont est investi le responsable du
						traitement ;
					</P>
				</li>
				<li>
					<P inline>
						Le traitement est nécessaire aux fins des intérêts légitimes
						poursuivis par le responsable du traitement ou par un tiers, à moins
						que ne prévalent les intérêts ou les libertés et droits fondamentaux
						de la personne concernée qui exigent une protection des données à
						caractère personnel, notamment lorsque la personne concernée est un
						enfant.
					</P>
				</li>
			</ul>
		</div>
		<H2>
			Données à caractère personnel et non personnel collectées et traitées dans
			le cadre de la navigation sur le site
		</H2>
		<H3>Données collectées</H3>
		<div className="flex flex-col gap-6">
			<P>
				<span className="font-bold">Aucune donnée à caractère personnel</span>{" "}
				n&apos;est collectée dans le cadre de la navigation sur le site.
				<br />
				Spécifiquement,{" "}
				<span className="font-bold">
					vos nom, prénom, âge, adresse postale, e-mail, localisation complète
					et adresse IP
				</span>{" "}
				ne sont pas collectés.
			</P>
			<P>
				Vous trouverez ci-après des informations concernant la collecte de{" "}
				<span className="font-bold">données anonymes</span>, à des fins de{" "}
				<span className="font-bold">transparence</span>.
			</P>
			<P>
				Seules les données anonymes - ne permettant ni de vous identifier
				directement, ni indirectement, ni par recoupement - suivantes, sont
				collectées :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						Pays, région et ville, basés sur la géolocalisation de vos requêtes
						HTTP. Votre adresse complète n&apos;est pas collectée ;
					</P>
				</li>
				<li>
					<P inline>
						Navigateur, système d&apos;exploitation et appareil (mobile /
						ordinateur), basés sur vos requêtes HTTP ;
					</P>
				</li>
				<li>
					<P inline>Pages consultées sur le site ;</P>
				</li>
				<li>
					<P inline>Clicks sur les divers liens et boutons du site ;</P>
				</li>
				<li>
					<P inline>
						Diverses statistiques de performance du site, grossièrement : des
						temps de chargement des pages et contenus ;
					</P>
				</li>
				<li>
					<P inline>
						Des remontées de bug qui pourraient survenir lors de
						l&apos;utilisation du site.
					</P>
				</li>
			</ul>
			<P>
				La collecte et le traitement de ces données répondent aux finalités
				suivantes :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						<span className="font-bold">Les données liées à la visite</span>{" "}
						(pays, région, ville, pages consultées, clicks, navigateur, système
						d&apos;exploitation, appareil) ont pour unique finalité d&apos;
						<span className="font-bold">
							analyser l&apos;attractivité du site et des services proposés
						</span>{" "}
						;
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">Les données techniques</span> (délais de
						chargement, bugs) ont pour unique finalité d&apos;
						<span className="font-bold">
							optimiser la performance du site et d&apos;assurer sa maintenance
						</span>
						.
					</P>
				</li>
			</ul>
		</div>
		<H3>Mode de collecte des données non personnelles</H3>
		<div className="flex flex-col gap-6">
			<P>
				Les données mentionnées sont majoritairement collectées de manière
				automatique durant votre visite du site.
			</P>
			<P>
				Seules les données suivantes sont collectées suite à des opérations
				spécifiques sur la plateforme :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						Clicks sur les divers liens et boutons du site : lorsque vous
						intéragissez ;
					</P>
				</li>
				<li>
					<P inline>
						Remontées de bug : effectuées lorsqu&apos;un problème - visible ou
						non - survient durant votre visite.
					</P>
				</li>
			</ul>
		</div>
		<H3>Rétention des données non personnelles</H3>
		<div className="flex flex-col gap-6">
			<P>
				Les données précédemment mentionnées sont conservées dans des conditions
				raisonnables de sécurité, pour une durée de :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						<span className="font-bold">30 jours</span> pour les remontées de
						bugs ;
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">7 jours</span> pour les statistiques de
						performance ;
					</P>
				</li>
				<li>
					<P inline>
						<span className="font-bold">1 an</span> pour les données
						d&apos;analyse liées à la visite ;
					</P>
				</li>
			</ul>
		</div>
		<H3>Hébergement des données non personnelles</H3>
		<div className="flex flex-col gap-6">
			<P>
				Le site floegaubert.com est hebergé par Vercel Inc, dont le siège se
				situe au 440 N Barranca Avenue #4133, Covina, CA 91723, Etats-Unis
			</P>
		</div>
		<H3>Transmission des données non personnelles à des tiers</H3>
		<div className="flex flex-col gap-6">
			<P>
				Les données liées à la visite sont transférées à un service cloud tiers
				dénommé Umami, sous la responsabilité de l&apos;entité légale Umami
				Software, Inc.
			</P>
			<P>
				Les données de remontée de bugs sont transférées à un service cloud
				tiers dénommé Sentry, sous la responsabilité de l&apos;entité légale
				Functional Software, Inc.
			</P>
			<P>
				Les statistiques de performance sont transférées à Vercel Inc., via son
				produit Vercel Speed Insights
			</P>
		</div>
		<H2>Délégué à la protection des données</H2>
		<div className="flex flex-col gap-6">
			<P>
				Le délégué à la protection des données est MONSIEUR CEDRIC DUPUIS,
				joignable à l&apos;adresse e-mail{" "}
				<ButtonLink
					inline
					href="mailto:pro.cedric.dupuis@gmail.com"
					target="_blank"
				>
					pro.cedric.dupuis@gmail.com
				</ButtonLink>
				.
			</P>
			<P>
				Si vous estimez, après contact, que vos droits Informatique et Libertés
				ne sont pas respectés, vous pouvez adresser une demande à la CNIL.
			</P>
		</div>
		<H2>
			Droits de l&apos;utilisateur en matière de collecte et traitement des
			données
		</H2>
		<div className="flex flex-col gap-6">
			<P>
				Tout utilisateur concerné par le traitement de ses données personnelles
				peut se prévaloir des droits suivants, en application du règlement
				européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6
				janvier 1978) :
			</P>
			<ul className="list-inside list-disc">
				<li>
					<P inline>
						Droit d&apos;accès, de rectification et droit à l&apos;effacement
						des données (posés respectivement aux articles 15, 16 et 17 du RGPD)
						;
					</P>
				</li>
				<li>
					<P inline>
						Droit à la portabilité des données (article 20 du RGPD) ;
					</P>
				</li>
				<li>
					<P inline>
						Droit à la limitation (article 18 du RGPD) et à l&apos;opposition du
						traitement des données (article 21 du RGPD) ;
					</P>
				</li>
				<li>
					<P inline>
						Droit de ne pas faire l&apos;objet d&apos;une décision fondée
						exclusivement sur un procédé automatisé ;
					</P>
				</li>
				<li>
					<P inline>Droit de déterminer le sort des données après la mort ;</P>
				</li>
				<li>
					<P inline>
						Droit de saisir l&apos;autorité de contrôle compétente (article 77
						du RGPD).
					</P>
				</li>
			</ul>
		</div>
		<P>
			À priori, aucune donnée personnelle n&apos;étant stockée, vos droits ne
			peuvent s&apos;exercer.
		</P>
		<P>
			Dans le cas où vous souhaiteriez porter une erreur de traitement à la
			connaissance du délégué à la protection des données, merci de le contacter
			par e-mail :{" "}
			<ButtonLink
				inline
				href="mailto:pro.cedric.dupuis@gmail.com"
				target="_blank"
			>
				pro.cedric.dupuis@gmail.com
			</ButtonLink>
		</P>
		<P>
			Consultez le site cnil.fr pour plus d&apos;informations sur vos droits.
		</P>
		<H2>Politique en matière de cookies</H2>
		<div className="flex flex-col gap-6">
			<P>
				<span className="font-bold">Aucun cookie</span> n&apos;est stocké durant
				votre navigation sur le site.
				<br />
				C&apos;est pourquoi{" "}
				<span className="font-bold">aucune bannière de consentement</span>{" "}
				n&apos;est affichée.
			</P>
			<P>Agréable, n&apos;est-ce pas ?</P>
		</div>
		<H2>Conditions de modification de la politique de confidentialité</H2>
		<div className="flex flex-col gap-6">
			<P>
				L&apos;Éditeur du site floegaubert.com se réserve le droit de pouvoir
				modifier la présente Politique à tout moment afin d&apos;assurer aux
				utilisateurs du site sa conformité avec le droit en vigueur.
			</P>
			<P>
				L&apos;utilisateur est invité à prendre connaissance de cette Politique
				à chaque fois qu&apos;il utilise nos services, sans qu&apos;il soit
				nécessaire de l&apos;en prévenir formellement.
			</P>
			<P>La présente politique a été éditée le 01/09/2024.</P>
		</div>
	</section>
);

export default Privacy;
