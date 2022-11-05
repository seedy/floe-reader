import { VariantProps } from "@stitches/react";
import { ReactNode, ComponentProps, useState } from "react";
import { Root } from "./styled";

import Page from "components/Page";
import Cover from "components/Cover";
import Button from "components/Button";
import pxToRem from "helpers/pxToRem";
import TextPlaceholder from "components/Text/Placeholder";
import Appear from "components/Animate/Appear";
import { OPEN_DURATION } from "components/Book/styled";
import TextReviewed from "components/Text/Reviewed";
import Box from "components/Box";
import Flex from "components/Flex";
import floe from "public/floe.jpg";
import Avatar, { AvatarProps } from "components/Avatar";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import IconButton from "components/IconButton";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

interface BookProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
  avatarProps?: Partial<AvatarProps>;
}

const APPEAR_DELAY = OPEN_DURATION.ms * 3;
const SECOND_APPEAR_DELAY = OPEN_DURATION.ms * 4;

/**
 * Primary UI component for user interaction
 */
const Book = ({ children, avatarProps, ...props }: BookProps) => {
  const [appearOn, setAppearOn] = useState(false);

  const onMouseEnter = () => {
    setAppearOn(true);
  };
  const onMouseLeave = () => {
    setAppearOn(false);
  };

  return (
    <Root onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
      <Cover>
        <Button variant="contained">Ouvrir</Button>
      </Cover>
      <Page></Page>
      <Page>
        <Flex css={{ marginTop: pxToRem(50) }} align="center" justify="center">
          C&apos;BEN CORREC&apos;
        </Flex>
        <Box>
          <Flex
            css={{ gap: pxToRem(16) }}
            grow
            direction="column"
            justify="spaceBetween"
          >
            <Flex direction="column" align="center">
              <Avatar src={floe} alt="Floé" {...(avatarProps || {})} />
              <H2>Floé Gaubert</H2>
            </Flex>
            <Box>
              <H3>Correctrice diplômée du CEC promotion 2021</H3>
              <H3>Freelance Lectrice-correctrice & Rédactrice Web</H3>
            </Box>
            <Flex css={{ gap: pxToRem(8) }} grow justify="center">
              <IconButton>
                <InstagramLogoIcon />
              </IconButton>
              <IconButton>
                <LinkedInLogoIcon />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </Page>
      <Page>
        <Box>
          <TextReviewed
            words={52}
            height={pxToRem(200)}
            width="calc(100% - 18px)"
            on={appearOn}
            delay={APPEAR_DELAY}
          />
          <Box css={{ marginTop: pxToRem(32) }}>
            <Appear on={appearOn} delay={SECOND_APPEAR_DELAY}>
              <TextPlaceholder words={200} />
            </Appear>
          </Box>
        </Box>
      </Page>
      <Page></Page>
      <Cover />
    </Root>
  );
};

export default Book;
