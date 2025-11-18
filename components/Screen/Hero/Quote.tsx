"use client";
import ButtonLink from "components/Button/Link";
import {
	HoverLinkButton,
	HoverLinkContent,
	HoverLinkImage,
	HoverLinkRoot,
} from "components/HoverLink";
import Logo from "components/Logo";
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
import quoteFirstPro from "public/quote-first-pro.webp";
import quotePhotoPro from "public/quote-photo-pro.webp";
import quoteShortsPro from "public/quote-shorts-pro.webp";
import quoteVideoPro from "public/quote-video-pro.webp";

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
				className="absolute left-full top-0 h-[clamp(5rem,16vw,10rem)] w-auto -rotate-90 -scale-x-100"
				alt=""
				src={logoSide}
			/>
		</H2>
		<div className="flex w-full flex-col items-center gap-10">
			<div
				className={cn(
					"flex w-full justify-start overflow-auto",
					"lg:overflow-visible",
				)}
			>
				<QuoteSlider>
					<QuoteSlide>
						<HoverLinkRoot href={ZCAL_SHORTS}>
							<QuoteItem
								title={
									<HoverLinkContent>
										<H3>Package de shorts</H3>
									</HoverLinkContent>
								}
								cta={
									<SlotTrack name="click quote button shorts">
										<HoverLinkButton variant="outlined">
											Je prends rendez-vous
										</HoverLinkButton>
									</SlotTrack>
								}
								description={
									<HoverLinkContent>
										<P>
											Des vidéos courtes et intemporelles pour les réseaux.
											<br />
											Nous travaillerons ensemble sur des contenus durables et
											réutilisables à l&apos;infini
										</P>
									</HoverLinkContent>
								}
								image={
									<HoverLinkImage
										src={quoteShortsPro}
										width={300}
										height={450}
										className="h-[225px] w-[150px]"
									/>
								}
							>
								<SwipeHintSlider />
							</QuoteItem>
						</HoverLinkRoot>
					</QuoteSlide>
					<QuoteSlide>
						<HoverLinkRoot href={ZCAL_VIDEO}>
							<QuoteItem
								title={
									<HoverLinkContent>
										<H3>Vidéo institutionnelle</H3>
									</HoverLinkContent>
								}
								cta={
									<SlotTrack name="click quote button video">
										<HoverLinkButton variant="outlined">
											Je prends rendez-vous
										</HoverLinkButton>
									</SlotTrack>
								}
								description={
									<HoverLinkContent>
										<P>
											Vidéo de 1 à 3 minutes pour présenter ton activité.
											<br />À destination d&apos;un site internet ou d&apos;une
											campagne vidéo.
										</P>
									</HoverLinkContent>
								}
								image={
									<HoverLinkImage
										src={quoteVideoPro}
										height={300}
										width={533}
										className="h-[150px] w-[266px]"
									/>
								}
							/>
						</HoverLinkRoot>
					</QuoteSlide>
					<QuoteSlide>
						<HoverLinkRoot href={ZCAL_PHOTO}>
							<QuoteItem
								title={
									<HoverLinkContent>
										<H3>Reportage photo / Shooting</H3>
									</HoverLinkContent>
								}
								cta={
									<SlotTrack name="click quote button photo">
										<HoverLinkButton variant="outlined">
											Je prends rendez-vous
										</HoverLinkButton>
									</SlotTrack>
								}
								description={
									<HoverLinkContent>
										<P>
											Un reportage entièrement dédié à ton activité pour mettre
											en valeur ton savoir-faire et ton expertise.
											<br />
											Un shooting pour construire ton personal branding avec des
											photos pro qui te ressemblent.
										</P>
									</HoverLinkContent>
								}
								image={
									<HoverLinkImage
										src={quotePhotoPro}
										height={450}
										width={300}
										className="h-[225px] w-[150px]"
									/>
								}
							/>
						</HoverLinkRoot>
					</QuoteSlide>
					<QuoteSlide>
						<HoverLinkRoot href={ZCAL_FIRST}>
							<QuoteItem
								title={
									<HoverLinkContent>
										<H3>Sur-mesure</H3>
									</HoverLinkContent>
								}
								cta={
									<SlotTrack name="click quote button first">
										<HoverLinkButton variant="outlined">
											Je prends rendez-vous
										</HoverLinkButton>
									</SlotTrack>
								}
								description={
									<HoverLinkContent>
										<P>
											Ton besoin est différent ou englobe plusieurs prestations
											?
											<br />
											Pour une prestation sur-mesure, je t&apos;invite à prendre
											rendez-vous avec moi !
										</P>
									</HoverLinkContent>
								}
								image={
									<HoverLinkImage
										src={quoteFirstPro}
										height={300}
										width={450}
										className="h-[150px] w-[225px]"
									/>
								}
							/>
						</HoverLinkRoot>
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
