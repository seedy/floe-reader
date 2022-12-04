import Appear from "components/Animate/Appear";
import Flex from "components/Flex";
import TextPlaceholder from "components/Text/Placeholder";
import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";


export const Correction = styled(Appear, {
  color: 'red',
  position: 'relative',
})

export const LineNote = styled(Appear, {
  fontFamily: '$cursive',
  position: 'relative'
});

export const Content = styled('p', {
  display: 'block',
  margin: 0,
  paddingRight: pxToRem(8),
  fontFamily: '$mono',
});

export const Root = styled(Flex, {
  position: 'relative',
});

export const CorrectionTextPlaceholder = styled(TextPlaceholder, {
  textDecorationColor: 'red',
  color: 'transparent'
})