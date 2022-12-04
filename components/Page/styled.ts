import Box from "components/Box";
import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled(Box, {
  width: '100%',
  height: '100%',
  backgroundColor: '$background',
  color: '$default',
  br: pxToRem(3),
  // ARROWS + DOTS + PLAYPAUSE
  padding: `${pxToRem(16)} ${pxToRem(40)} ${pxToRem(80)}`,
});