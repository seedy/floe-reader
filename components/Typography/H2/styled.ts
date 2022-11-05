import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('h2', {
  fontSize: '$2',
  fontFamily: '$system',
  color: 'hsl(0, 0%, 0%)',
  fontWeight: '$medium',
  margin: `${pxToRem(12)} 0`,
});