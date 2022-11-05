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

interface BookProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
}

const APPEAR_DELAY = OPEN_DURATION.ms * 3;
const SECOND_APPEAR_DELAY = OPEN_DURATION.ms * 4;

/**
 * Primary UI component for user interaction
 */
const Book = ({ children, ...props }: BookProps) => {
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
        <Box></Box>
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
