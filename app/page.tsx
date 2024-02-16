import styles from "app/styles.module.css";
import Box from "components/Box";
import Screen from "components/Screen";
import ScreenLanding from "components/Screen/Landing";
import { LOREM } from "constants/lorem";

const Home = () => (
	<main className={styles.main}>
		<ScreenLanding />
		<Screen>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
			<Box>{LOREM}</Box>
		</Screen>
	</main>
);

export default Home;
