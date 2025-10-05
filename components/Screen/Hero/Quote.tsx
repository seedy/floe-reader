"use client";
import ButtonLink from "components/Button/Link";
import Logo from "components/Logo";
import QuoteBadge from "components/Quote/Badge";
import QuoteItem from "components/Quote/Item";
import QuoteSlide from "components/Quote/Slide";
import QuoteSlider from "components/Quote/Slider";
import SlotTrack from "components/Slot/Track";
import SwipeHintSlider from "components/SwipeHint/Slider";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import {
	PORTFOLIO,
	ZCAL_FIRST,
	ZCAL_MONTAGE,
	ZCAL_PHOTO,
	ZCAL_VIDEO,
} from "constants/links";
import cn from "helpers/cn";
import logoSide from "public/logo-side.svg";

const QuoteHero = () => (
	<div
		className={cn(
			"flex flex-col items-center",
			"mx-5 lg:mx-10",
			"gap-16 md:gap-24 lg:gap-24",
		)}
	>
		<H2 className="relative">
			Mes <SpanUnderline variant="secondary">prestations phares</SpanUnderline>
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
									<SlotTrack name="click quote button montage">
										<ButtonLink variant="outlined" href={ZCAL_MONTAGE}>
											Je prends
											<br />
											rendez-vous
										</ButtonLink>
									</SlotTrack>
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
										<SlotTrack name="click quote button interview">
											<ButtonLink variant="outlined" href={ZCAL_VIDEO}>
												Je prends
												<br />
												rendez-vous
											</ButtonLink>
										</SlotTrack>
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
									<SlotTrack name="click quote button photo">
										<ButtonLink variant="outlined" href={ZCAL_PHOTO}>
											Je prends
											<br />
											rendez-vous
										</ButtonLink>
									</SlotTrack>
								}
								perks={[
									"Analyse du besoin",
									"Shooting inté / exté",
									"Portrait, paysage, voyage",
									"Prises de vue aériennes",
									"Retouche",
									"Mobilité France, Europe",
									<SlotTrack
										key="sell photo"
										name="click quote link sell photo"
									>
										<ButtonLink href={PORTFOLIO}>
											Vente d&apos;images
										</ButtonLink>
									</SlotTrack>,
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
					<SlotTrack name="click quote button first">
						<ButtonLink variant="contained" href={ZCAL_FIRST}>
							Je prends rendez-vous
						</ButtonLink>
					</SlotTrack>
				</div>
			</div>
		</div>
	</div>
);

export default QuoteHero;
