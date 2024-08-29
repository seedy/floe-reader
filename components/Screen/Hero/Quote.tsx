"use client";
import ButtonLink from "components/Button/Link";
import Logo from "components/Logo";
import QuoteBadge from "components/Quote/Badge";
import QuoteItem from "components/Quote/Item";
import QuoteSlide from "components/Quote/Slide";
import QuoteSlider from "components/Quote/Slider";
import SwipeHintSlider from "components/SwipeHint/Slider";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import { CALENDLY, PORTFOLIO } from "constants/links";
import cn from "helpers/cn";
import logoSide from "public/logo-side.svg";

const QuoteHero = () => (
	<div
		className={cn(
			"flex flex-col items-center",
			"mx-5 lg:mx-10",
			"gap-10 lg:gap-24",
		)}
	>
		<H2 className="relative">
			Mes <SpanUnderline variant="secondary">prestations</SpanUnderline>
			<Logo
				className="absolute left-full top-0 h-sideLogo w-auto -rotate-90 -scale-x-100"
				alt=""
				src={logoSide}
			/>
		</H2>
		<div className="flex w-full flex-col items-center gap-10">
			<div className="flex w-full flex-col items-center">
				<div className="flex w-full justify-start overflow-auto px-5">
					<QuoteSlider>
						<QuoteSlide>
							<QuoteItem
								title={<H3>Montage vidéo</H3>}
								cta={
									<ButtonLink
										variant="outlined"
										href={CALENDLY}
										target="_blank"
									>
										Je prends RDV
										<br />
										Montage
									</ButtonLink>
								}
								perks={[
									"Solo ou renfort d'équipe",
									"Bibliothèque FX / SFX",
									"Sous-titrage",
									"Colorimétrie",
									"Allers-retours illimités",
									"Télétravail total",
									"Mobilité France, Europe",
								]}
							>
								<SwipeHintSlider />
							</QuoteItem>
						</QuoteSlide>
						<QuoteSlide>
							<QuoteBadge title="Populaire">
								<QuoteItem
									title={<H3>Interview / Reportage</H3>}
									cta={
										<ButtonLink
											variant="outlined"
											href={CALENDLY}
											target="_blank"
										>
											Je prends RDV
											<br />
											Interview
										</ButtonLink>
									}
									perks={[
										"Organisation du tournage",
										"Réalisation sur place",
										"Captation 9:16, 16:9",
										"Prises de vue aériennes",
										"Montage complet",
										"Allers-retours illimités",
										"Mobilité France, Europe",
									]}
								/>
							</QuoteBadge>
						</QuoteSlide>
						<QuoteSlide>
							<QuoteItem
								title={<H3>Photo</H3>}
								cta={
									<ButtonLink
										variant="outlined"
										href={CALENDLY}
										target="_blank"
									>
										Je prends RDV
										<br />
										Photo
									</ButtonLink>
								}
								perks={[
									"Analyse du besoin",
									"Shooting inté / exté",
									"Portrait, paysage, voyage",
									"Prises de vue aériennes",
									"Retouche",
									"Mobilité France, Europe",
									<ButtonLink className="px-0" key="images" href={PORTFOLIO}>
										Vente d&apos;images
									</ButtonLink>,
								]}
							/>
						</QuoteSlide>
					</QuoteSlider>
				</div>
				<div className="flex flex-col items-center gap-8">
					<P className="text-center">
						Pour une prestation sur-mesure, je t&apos;invite à prendre
						rendez-vous avec moi !
					</P>
					<ButtonLink variant="contained" href={CALENDLY}>
						Je prends rendez-vous
					</ButtonLink>
				</div>
			</div>
		</div>
	</div>
);

export default QuoteHero;
