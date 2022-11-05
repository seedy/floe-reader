import Box from "components/Box";
import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

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
});

const Side = styled(Box, {
  inset: 0,
  padding: pxToRem(16),
  position: 'absolute'
})

export const FrontSide = styled(Side, {
  backfaceVisibility: 'hidden'
});

export const BackSide = styled(Side, {
  transformOrigin: 'center',
  transform: 'rotate(180deg)',
  backfaceVisibility: 'hidden',
})