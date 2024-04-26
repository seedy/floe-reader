import { Meta, StoryFn } from "@storybook/react";
import Quote from "components/Quote";
import QuoteBadge from "components/Quote/Badge";
import QuoteItem from "components/Quote/Item";
import SwipeHint from "components/SwipeHint";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
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
	<Quote {...args}>
		<QuoteItem
			title={<H3>5 épisodes courts</H3>}
			price={<P className="font-bold">3290€</P>}
			perks={[
				"± 30 min",
				"Préparation questions",
				"Interview",
				"Voix-off",
				"Recherche, ajout sons",
				"Montage & Assemblage",
				"Hébergement",
				"Allers-retours illimités",
			]}
		>
			<SwipeHint />
		</QuoteItem>
		<QuoteBadge title="Populaire">
			<QuoteItem
				title={<H3>5 episodes longs</H3>}
				price={<P className="font-bold">3890€</P>}
				perks={[
					"± 1 heure",
					"Préparation questions",
					"Interview",
					"Voix-off",
					"Recherche, ajout sons",
					"Montage & Assemblage",
					"Hébergement",
					"Allers-retours illimités",
				]}
			/>
		</QuoteBadge>
		<QuoteItem
			title={<H3>Sur-mesure</H3>}
			perks={[
				"Durée & nombre à définir",
				"Préparation questions",
				"Interview",
				"Voix-off",
				"Recherche, ajout sons",
				"Montage & Assemblage",
				"Hébergement",
				"Allers-retours illimités",
			]}
		/>
	</Quote>
);

export const Default = Template.bind({});
