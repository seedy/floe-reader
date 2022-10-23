import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";
import Flex from 'components/Flex';

export const Root = styled('div', {
  position: 'absolute',
  top: '1%',
  left: '5%',
  height: '97%',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: 'hsl(0, 0%, 100%)',
  br: pxToRem(3),
  boxShadow: `${pxToRem(9)} ${pxToRem(2)} ${pxToRem(10)} ${pxToRem(3)} #CCCCCC`,
  transformOrigin: 'left center',
  transformStyle: 'preserve-3d',
  padding: pxToRem(16)
});