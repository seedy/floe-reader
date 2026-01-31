import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  CardFlip,
  CardFlipSide,
  CardHeader,
  CardImage,
  CardRoot,
} from "components/Card";
import P from "components/Typography/P";
import image from "public/CBC_QR_CODE.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: CardRoot,
  title: "Components/Card",
} satisfies Meta<typeof CardRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Pick<Story, "render"> = {
  render: (args) => <CardRoot {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    children: (
      <>
        <CardImage alt="Roxane Humbert" src={image}>
          <CardHeader>
            <P className="font-bold" color="white">
              Roxane Humbert
            </P>
            <P color="white">Coach en nutrition émotionnelle</P>
          </CardHeader>
        </CardImage>
        <CardFlipSide>
          J&apos;ai choisi de faire une séance photo avec Floé pour mon contenu
          professionnel, et je vous la recommande sans hésiter !<br />
          Je n'aime pas trop être photographiée, mais l&apos;ambiance était
          détendue et naturelle, ce qui m&apos;a permis de me sentir à
          l&apos;aise devant l&apos;objectif. Floé a de très bonnes idées, et
          sait s&apos;adapter au fur et à mesure de la séance, ce qui a rendu ce
          moment fluide et agréable.
          <br />
          Je suis ravie car j'ai plein de photos que j'aime beaucoup et qui
          reflètent bien l&apos;image que je voulais pour mon projet
          professionnel.
          <br />
          Merci Floé pour ton talent, ta créativité et ta bienveillance !
        </CardFlipSide>
        <CardFlip />
      </>
    ),
  },
};
