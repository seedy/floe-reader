import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  CardContent,
  CardExpand,
  CardHeader,
  CardImage,
  CardRoot,
} from "components/Card";
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
            <span className="text-base font-bold">Roxane Humbert</span>
            <span className="text-sm">Coach en nutrition émotionnelle</span>
          </CardHeader>
        </CardImage>
        <CardContent>
          J&apos;ai choisi de faire une séance photo avec Floé pour mon contenu
          professionnel, et je vous la recommande sans hésiter ! Je n'aime pas
          trop être photographiée, mais l&apos;ambiance était détendue et
          naturelle, ce qui m&apos;a permis de me sentir à l&apos;aise devant
          l&apos;objectif. Floé a de très bonnes idées, et sait s&apos;adapter
          au fur et à mesure de la séance, ce qui a rendu ce moment fluide et
          agréable. Je suis ravie car j'ai plein de photos que j'aime beaucoup
          et qui reflètent bien l&apos;image que je voulais pour mon projet
          professionnel. Merci Floé pour ton talent, ta créativité et ta
          bienveillance !
        </CardContent>
        <CardExpand />
      </>
    ),
  },
};
