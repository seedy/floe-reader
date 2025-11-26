import ScreenHero from "components/Screen/Hero";
import ScreenLanding from "components/Screen/Landing";
import ScreenPresentation from "components/Screen/Presentation";
import SocialsEmailOrApp from "components/Socials/EmailOrApp";

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <SocialsEmailOrApp />
      <ScreenLanding />
      <ScreenPresentation>
        <ScreenHero />
      </ScreenPresentation>
    </div>
  );
};

export default Home;
