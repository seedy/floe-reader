import ScreenHero from "components/Screen/Hero";
import ScreenLanding from "components/Screen/Landing";
import ScreenPresentation from "components/Screen/Presentation";

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <ScreenLanding />
      <ScreenPresentation>
        <ScreenHero />
      </ScreenPresentation>
    </div>
  );
};

export default Home;
