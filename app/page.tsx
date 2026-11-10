import ScreenHero from "components/Screen/Hero";
import ScreenLanding from "components/Screen/Landing";
import ScreenPresentationMe from "components/Screen/Presentation/Me";
import ScreenPresentationPersona from "components/Screen/Presentation/Persona";

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <ScreenLanding />
      <ScreenPresentationPersona/>
      <ScreenHero />
      <ScreenPresentationMe />
    </div>
  );
};

export default Home;
