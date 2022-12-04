import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('h3', {
  display: 'block',
  fontSize: '$3',
  fontFamily: '$system',
  color: '$default',
  fontWeight: '$light',
  margin: `${pxToRem(8)} 0`,
});