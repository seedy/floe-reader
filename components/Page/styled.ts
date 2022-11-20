import Box from "components/Box";
import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('div', {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  backgroundColor: '$background',
  color: '$default',
  br: pxToRem(3),
  padding: pxToRem(16),
  // DOTS
  paddingBottom: pxToRem(16 + 40)
});