import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('h2', {
  fontSize: '$2',
  fontFamily: '$system',
  color: '$default',
  fontWeight: '$medium',
  margin: `${pxToRem(12)} 0`,
});