"use client";
import QuoteInterviews from "components/Screen/Hero/QuoteInterviews";
import QuotePodcasts from "components/Screen/Hero/QuotePodcasts";
import Tabs from "components/Tabs";
import Content from "components/Tabs/Content";
import List from "components/Tabs/List";
import Tab from "components/Tabs/Tab";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import SpanUnderline from "components/Typography/SpanUnderline";
import cn from "helpers/cn";
import { useState } from "react";

const TAB_PODCASTS = "podcasts";
const TAB_INTERVIEWS = "interviews";

const TabAndTitle = () => {
	const [tab, setTab] = useState(TAB_PODCASTS);

	const [humane, transparent] =
		tab === TAB_PODCASTS
			? ["humains", "transparents"]
			: ["humaines", "transparentes"];

	return (
		<div className={cn("mx-5 flex flex-col items-center", "gap-4 lg:gap-10")}>
			<div className={cn("flex flex-col items-center", " gap-5 lg:gap-6")}>
				<H2>
					Mes <SpanUnderline variant="secondary">{tab}</SpanUnderline> sont{" "}
					{humane} et {transparent}, leurs{" "}
					<SpanUnderline variant="primary">tarifs</SpanUnderline> aussi !
				</H2>
				<P>
					Pour d&apos;autres prestations, je t&apos;invite à planifier un
					rendez-vous.
				</P>
			</div>
			<Tabs value={tab} onChange={setTab} className="w-full">
				<List className="mb-2 justify-center lg:mb-4">
					<Tab value={TAB_PODCASTS}>Podcasts</Tab>
					<Tab value={TAB_INTERVIEWS}>Interviews</Tab>
				</List>
				<Content
					className="flex w-full justify-start overflow-auto px-5"
					value={TAB_PODCASTS}
				>
					<QuotePodcasts />
				</Content>
				<Content
					className="flex w-full justify-start overflow-auto px-5"
					value={TAB_INTERVIEWS}
				>
					<QuoteInterviews />
				</Content>
			</Tabs>
		</div>
	);
};

export default TabAndTitle;
