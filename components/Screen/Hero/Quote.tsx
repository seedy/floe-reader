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
	ZCAL_FIRST,
	ZCAL_PHOTO,
	ZCAL_SHORTS,
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
			<div className="flex w-full justify-start overflow-auto">
				<QuoteSlider>
					<QuoteSlide>
						<QuoteItem
							title={<H3>Package de shorts</H3>}
							cta={
								<SlotTrack name="click quote button shorts">
									<ButtonLink variant="outlined" href={ZCAL_SHORTS}>
										Je prends RDV
										<br />
										shorts
									</ButtonLink>
								</SlotTrack>
							}
							description={
								<P>
									Des vidéos courtes et intemporelles pour les réseaux.
									<br />
									Nous travaillerons ensemble sur des contenus durables et
									réutilisables à l&apos;infini
								</P>
							}
						>
							<SwipeHintSlider />
						</QuoteItem>
					</QuoteSlide>
					<QuoteSlide>
						<QuoteItem
							title={
								<QuoteBadge className="lg:hidden" title="Populaire">
									<H3>Vidéo institutionnelle</H3>
								</QuoteBadge>
							}
							cta={
								<SlotTrack name="click quote button video">
									<ButtonLink variant="outlined" href={ZCAL_VIDEO}>
										Je prends RDV
										<br />
										vidéo
									</ButtonLink>
								</SlotTrack>
							}
							description={
								<P>
									Vidéo de 1 à 3 minutes pour présenter ton activité.
									<br />À destination d&apos;un site internet ou d&apos;une
									campagne vidéo.
								</P>
							}
						/>
					</QuoteSlide>
					<QuoteSlide>
						<QuoteItem
							title={<H3>Reportage photo / Shooting</H3>}
							cta={
								<SlotTrack name="click quote button photo">
									<ButtonLink variant="outlined" href={ZCAL_PHOTO}>
										Je prends RDV
										<br />
										photo
									</ButtonLink>
								</SlotTrack>
							}
							description={
								<P>
									Un reportage entièrement dédié à ton activité pour mettre en
									valeur ton savoir-faire et ton expertise.
									<br />
									Un shooting pour construire ton personal branding avec des
									photos pro qui te ressemblent.
								</P>
							}
						/>
					</QuoteSlide>
					<QuoteSlide>
						<QuoteItem
							title={<H3>Sur-mesure</H3>}
							cta={
								<SlotTrack name="click quote button first">
									<ButtonLink variant="outlined" href={ZCAL_FIRST}>
										Je prends RDV
										<br />
										sur-mesure
									</ButtonLink>
								</SlotTrack>
							}
							description={
								<P>
									Ton besoin est différent ou englobe plusieurs prestations ?
									<br />
									Pour une prestation sur-mesure, je t&apos;invite à prendre
									rendez-vous avec moi !
								</P>
							}
						/>
					</QuoteSlide>
				</QuoteSlider>
			</div>
			<div className="flex flex-col items-center gap-8 lg:hidden">
				<P className="text-center">
					Pour une prestation sur-mesure, je t&apos;invite à prendre rendez-vous
					avec moi !
				</P>
				<SlotTrack name="click quote button first">
					<ButtonLink variant="contained" href={ZCAL_FIRST}>
						Je prends rendez-vous
					</ButtonLink>
				</SlotTrack>
			</div>
		</div>
	</div>
);

export default QuoteHero;
