import { Meta, StoryFn } from "@storybook/react";
import ButtonLink from "components/Button/Link";
import Quote from "components/Quote";
import QuoteBadge from "components/Quote/Badge";
import QuoteItem from "components/Quote/Item";
import SwipeHint from "components/SwipeHint";
import H3 from "components/Typography/H3";
import {
	PORTFOLIO,
	ZCAL_INTERVIEW,
	ZCAL_MONTAGE,
	ZCAL_PHOTO,
} from "constants/links";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Quote",
	component: Quote,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof Quote>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Quote> = (args) => (
	<div className="overflow-auto">
		<Quote {...args}>
			<QuoteItem
				title={<H3>Montage vidéo</H3>}
				cta={
					<ButtonLink variant="outlined" href={ZCAL_MONTAGE} target="_blank">
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
				<SwipeHint />
			</QuoteItem>
			<QuoteBadge title="Populaire">
				<QuoteItem
					title={<H3>Interview / Reportage</H3>}
					cta={
						<ButtonLink
							variant="outlined"
							href={ZCAL_INTERVIEW}
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
			<QuoteItem
				title={<H3>Photo</H3>}
				cta={
					<ButtonLink variant="outlined" href={ZCAL_PHOTO} target="_blank">
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
		</Quote>
	</div>
);

export const Default = Template.bind({});
