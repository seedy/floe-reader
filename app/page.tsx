import Box from "components/Box";
import Screen from "components/Screen";
import ScreenLanding from "components/Screen/Landing";
import ScreenPresentation from "components/Screen/Presentation";
import { LOREM } from "constants/lorem";

const Home = () => (
	<>
		<ScreenLanding />
		<ScreenPresentation />
		<Screen>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
		</Screen>
	</>
);

export default Home;
