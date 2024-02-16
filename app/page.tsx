import Box from "components/Box";
import Screen from "components/Screen";
import ScreenLanding from "components/Screen/Landing";
import { LOREM } from "constants/lorem";

const Home = () => (
	<>
		<ScreenLanding />
		<Screen>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
		</Screen>
	</>
);

export default Home;
