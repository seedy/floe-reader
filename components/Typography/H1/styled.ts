import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('h1', {
  fontSize: '$1',
  fontFamily: '$system',
  color: 'hsl(0, 0%, 0%)',
  fontWeight: '$semiBold',
  margin: `${pxToRem(16)} 0`,
});