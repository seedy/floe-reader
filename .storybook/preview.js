import "app/globals.css";
import Root from "../components/Root";

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: "fullscreen",
};

export const decorators = [
	(Story) => (
		<Root>
			<Story />
		</Root>
	),
];
export const tags = ["autodocs"];
