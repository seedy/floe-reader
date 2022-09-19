import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";
import Cover from "components/Cover";

export const Root = styled('div', {
  position: 'relative',
  height: pxToRem(500),
  width: pxToRem(300),
  [`& ${Cover}`]: {
    '&:first-child': {
      zIndex: 1,
      transform: `rotateY(-20deg) translateZ(${pxToRem(8)})`,
    },
    '&:last-child': {
      zIndex: -1,
      transform: `translateX(${pxToRem(8)}) rotateY(-15deg) translateZ(${pxToRem(8)})`
    },  
  },
  '& :nth-child(2)': {
    transform: 'rotateY(-34deg)',
  },
  '& :nth-child(3)': {
    transform: 'rotateY(-32deg)',
  },
  '& :nth-child(4)': {
    transform: 'rotateY(-30deg)',
  },
  '& :nth-child(5)': {
    transform: 'rotateY(-28deg)',
  }
});