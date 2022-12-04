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
import cbcLogo from "public/CBC_Logo_full.png";
import floe from "public/floe.jpg";
import Avatar, { AvatarProps } from "components/Avatar";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import IconLink from "components/IconLink";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Pages from "components/Pages";
import { reader } from "stitches.config";
import TiktokIcon from "components/icons/Tiktok";
import Logo from "components/Logo";

interface ReaderProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
  avatarProps?: Partial<AvatarProps>;
  height?: number;
}

const APPEAR_DELAY = OPEN_DURATION.ms * 3;
const SECOND_APPEAR_DELAY = OPEN_DURATION.ms * 4;

/**
 * Primary UI component for user interaction
 */
const Reader = ({
  children,
  avatarProps,
  height = 500,
  ...props
}: ReaderProps) => {
  return (
    <Root className={reader} css={{ height: pxToRem(height) }} {...props}>
      <Cover />
      <Box css={{ padding: pxToRem(8), width: "100%", height: "100%" }}>
        <Pages>
          <Page data-keen-slider-clickable>
            <Flex
              css={{ marginTop: pxToRem(50) }}
              align="center"
              justify="center"
            >
              <Logo
                src={cbcLogo}
                alt="C'BEN CORREC'"
                width={264}
                height={257}
                {...(avatarProps || {})}
              />
            </Flex>
          </Page>
          <Page data-keen-slider-clickable>
            <Flex
              css={{ gap: pxToRem(16), overflow: "hidden", height: "100%" }}
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
              <Flex
                css={{ gap: pxToRem(16), marginBottom: pxToRem(16) }}
                justify="center"
              >
                <IconLink
                  href="https://www.instagram.com/c_ben_correc/"
                  target="_blank"
                  variant="small"
                >
                  <InstagramLogoIcon />
                </IconLink>
                <IconLink
                  href="https://www.linkedin.com/in/flo%C3%A9-gaubert-327565123/"
                  target="_blank"
                  variant="small"
                >
                  <LinkedInLogoIcon />
                </IconLink>
                <IconLink
                  href="https://www.tiktok.com/@c_ben_correc"
                  target="_blank"
                  variant="small"
                >
                  <TiktokIcon />
                </IconLink>
              </Flex>
            </Flex>
          </Page>
          <Page data-keen-slider-clickable>
            <Flex
              css={{ height: "100%" }}
              direction="column"
              justify="spaceBetween"
            >
              <TextReviewed
                words={51}
                height={pxToRem(200)}
                width="calc(100% - 18px)"
                on
                delay={APPEAR_DELAY}
              />
              <Appear on delay={SECOND_APPEAR_DELAY}>
                <TextPlaceholder words={150} />
              </Appear>
            </Flex>
          </Page>
        </Pages>
      </Box>
    </Root>
  );
};

export default Reader;
