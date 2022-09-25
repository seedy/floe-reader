import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";
import Cover from "components/Cover";
import Page from "components/Page";

export const Root = styled('div', {
  position: 'relative',
  height: pxToRem(500),
  width: pxToRem(300),
  transition: 'transform 2s',
  [`& ${Cover}`]: {
    '&:first-child': {
      zIndex: 100,
      transform: `rotateY(-20deg) translateZ(${pxToRem(8)})`,
      '&.turned': {
        zIndex: 0,
        transform: 'rotateY(172deg)',
      }
    },
    '&:last-child': {
      width: `calc(100% + ${pxToRem(32)})`,
      transform: `rotateY(-15deg) translateZ(${pxToRem(8)})`
    },  
  },
  [`& ${Page}`]: {
    transform: 'rotateY(-34deg)',
    zIndex: 10,
    '&.turned': {
      transform: 'rotateY(156deg)',
      zIndex: 1,
    },
    [`& ~ ${Page}`]: {
      transform: 'rotateY(-32deg)',
      zIndex: 9,
      '&.turned': {
      transform: 'rotateY(158deg)',
      zIndex: 2,
      },
    },
    [`& ~ ${Page} ~ ${Page}`]: {
      transform: 'rotateY(-30deg)',
      zIndex: 8,
      '&.turned': {
      transform: 'rotateY(160deg)',
        zIndex: 3,
      },
  },
    [`& ~ ${Page} ~ ${Page} ~ ${Page}`]: {
      transform: 'rotateY(-28deg)',
      zIndex: 7,
      '&.turned': {
      transform: 'rotateY(162deg)',
        zIndex: 4,
      },
  },
    [`& ~ ${Page} ~ ${Page} ~ ${Page} ~ ${Page}`]: {
          transform: 'rotateY(-28deg)',
      zIndex: 7,
      '&.turned': {
      transform: 'rotateY(164deg)',
        zIndex: 5,
      },
    },
  }
  
});