import Screen from "components/Screen";
import ScreenHero from "components/Screen/Hero";
import ScreenLanding from "components/Screen/Landing";
import ScreenPresentation from "components/Screen/Presentation";
import { LOREM } from "constants/lorem";

const Home = () => (
	<>
		<ScreenLanding />
		<ScreenPresentation />
		<ScreenHero />
		<Screen>
			<div>{LOREM}</div>
			<div>{LOREM}</div>
			<div>{LOREM}</div>
			<div>{LOREM}</div>
		</Screen>
	</>
);

export default Home;
