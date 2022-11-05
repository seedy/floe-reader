import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('h3', {
  fontSize: '$3',
  fontFamily: '$system',
  color: 'hsl(0, 0%, 0%)',
  fontWeight: '$light',
  margin: `${pxToRem(8)} 0`,
});