import ScreenLandingTherapy from "components/Screen/Landing/Therapy";
import ScreenPresentationMe from "components/Screen/Presentation/Me";
import ScreenPresentationTherapy from "components/Screen/Presentation/Therapy";

const Therapy = () => {
  return (
    <div className="flex flex-col gap-32">
      <ScreenLandingTherapy />
      <ScreenPresentationTherapy />
      <ScreenPresentationMe />
    </div>
  )
}

export default Therapy;