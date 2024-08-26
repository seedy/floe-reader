import Footer from "components/Footer";
import ScreenHero from "components/Screen/Hero";
import ScreenLanding from "components/Screen/Landing";
import ScreenPresentation from "components/Screen/Presentation";

const Home = () => (
	<>
		<ScreenLanding />
		<ScreenPresentation />
		<ScreenHero />
		<Footer />
	</>
);

export default Home;
