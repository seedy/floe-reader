import Quote from "components/Quote";
import QuoteBadge from "components/Quote/Badge";
import QuoteItem from "components/Quote/Item";
import SwipeHint from "components/SwipeHint";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const QuotePodcasts = () => {
	const [ref] = useKeenSlider({
		mode: "free",
		slides: {
			perView: "auto",
		},
	});

	return (
		<Quote ref={ref} className="keen-slider">
			<div className="keen-slider__slide flex !min-h-0 !w-auto min-w-fit !overflow-visible">
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
			</div>
			<div className="keen-slider__slide flex !min-h-0 !w-auto min-w-fit !overflow-visible">
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
			</div>
			<div className="keen-slider__slide flex !min-h-0 !w-auto min-w-fit !overflow-visible">
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
			</div>
		</Quote>
	);
};

export default QuotePodcasts;
