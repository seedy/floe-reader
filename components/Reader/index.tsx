import { VariantProps } from "@stitches/react";
import { ReactNode, ComponentProps } from "react";
import { Root } from "./styled";

import Page from "components/Page";
import Cover from "components/Cover";
import pxToRem from "helpers/pxToRem";
import TextPlaceholder from "components/Text/Placeholder";
import Appear from "components/Animate/Appear";
import { OPEN_DURATION } from "components/Reader/styled";
import TextReviewed from "components/Text/Reviewed";
import Box from "components/Box";
import Flex from "components/Flex";
import floe from "public/floe.jpg";
import Avatar, { AvatarProps } from "components/Avatar";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import IconLink from "components/IconLink";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Pages from "components/Pages";
import { reader } from "stitches.config";

interface ReaderProps
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
const Reader = ({ children, avatarProps, ...props }: ReaderProps) => {
  return (
    <Root className={reader} {...props}>
      <Cover />
      <Pages>
        <Page>
          <Flex
            css={{ marginTop: pxToRem(50) }}
            align="center"
            justify="center"
          >
            C&apos;BEN CORREC&apos;
          </Flex>
        </Page>
        <Page>
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
              <IconLink
                href="https://www.instagram.com/c_ben_correc/"
                target="_blank"
              >
                <InstagramLogoIcon />
              </IconLink>
              <IconLink
                href="https://www.linkedin.com/in/flo%C3%A9-gaubert-327565123/"
                target="_blank"
              >
                <LinkedInLogoIcon />
              </IconLink>
            </Flex>
          </Flex>
        </Page>
        <Page>
          <TextReviewed
            words={49}
            height={pxToRem(200)}
            width="calc(100% - 18px)"
            on
            delay={APPEAR_DELAY}
          />
          <Box css={{ marginTop: pxToRem(32) }}>
            <Appear on delay={SECOND_APPEAR_DELAY}>
              <TextPlaceholder words={150} />
            </Appear>
          </Box>
        </Page>
      </Pages>
    </Root>
  );
};

export default Reader;