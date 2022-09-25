import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('div', {
  position: 'absolute',
  top: '1%',
  left: '13%',
  height: '98%',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: 'hsl(0, 0%, 100%)',
  br: pxToRem(3),
  boxShadow: `${pxToRem(9)} ${pxToRem(4)} ${pxToRem(10)} ${pxToRem(3)} #CCCCCC`,
  transformOrigin: 'left center',
  transformStyle: 'preserve-3d',
  padding: pxToRem(16)
});