import ButtonLink from "components/Button/Link";
import Screen from "components/Screen";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import { OIKOS } from "constants/links";

const ScreenPresentation = () => (
    <Screen>
        <H2>Je développe la visibilité des acteurs de l&apos;écoconstruction</H2>
        <P>Je mets en avant les entreprises qui prônent la résilience énergétique et l&apos;autonomie.</P>
        <P>Je fournis mes compétences aux sociétés et organismes qui essaiment l&apos;écoconception en France.</P>
        <P>Je propose actuellement mes services à l&apos;association <ButtonLink variant="link" href={OIKOS}>Oïkos Ecoconstruction</ButtonLink></P>
    </Screen>
)

export default ScreenPresentation