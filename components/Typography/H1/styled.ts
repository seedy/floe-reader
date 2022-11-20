import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('h1', {
  fontSize: '$1',
  fontFamily: '$system',
  color: '$default',
  fontWeight: '$semiBold',
  margin: `${pxToRem(16)} 0`,
});