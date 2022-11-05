import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";
import Cover from "components/Cover";
import Page from "components/Page";

// CONSTANTS
export const OPEN_DURATION = {
  ms: 1300,
  string: '1.3s'
};

// KEYFRAMES
const rotatePage = keyframes({
  '0%': {
    transform: 'rotateY(0deg)',
  },
  '50%': {
    transform: 'rotateY(90deg)'
  },
  '100%': {
    transform: 'rotateY(180deg)',
  }
})

// COMPONENTS
export const Root = styled('div', {
  position: 'relative',
  height: pxToRem(500),
  width: pxToRem(300),
  transition: 'transform 2s',
  '&:hover': {
    boxShadow: `${pxToRem(-17)} 0 ${pxToRem(15)} ${pxToRem(-8)} hsla(0, 0%, 0%, 0.7)`,
    [`${Cover}:first-child`]: {
      zIndex: 0,
      transition: `z-index ${OPEN_DURATION.string}`,
      animation: `${rotatePage} ${OPEN_DURATION.string}`,
      animationFillMode: 'forwards',
    '& > *': {
        display: 'none'
      },
      [`& + ${Page}`]: {
        zIndex: 20,
        animation: `${rotatePage} ${OPEN_DURATION.string}`,
        animationFillMode: 'forwards',
      },
      [`& + ${Page} + ${Page}`]: {
        zIndex: 21,
        transition: `z-index ${OPEN_DURATION.string} ${OPEN_DURATION.string}`,
        animation: `${rotatePage} 2s 2s`,
        animationFillMode: 'forwards',
      }
    },
  },
  [`& ${Cover}`]: {
    '&:first-child': {
      zIndex: 100,
      transform: `rotateY(-20deg) translateZ(${pxToRem(8)})`,
      
    },
    '&:last-child': {
      width: `calc(100% + ${pxToRem(32)})`,
      transform: `rotateY(-15deg) translateZ(${pxToRem(8)})`
    },  
  },
  [`& ${Page}`]: {
    transform: 'rotateY(-24deg)',
    zIndex: 10,
    [`& ~ ${Page}`]: {
      transform: 'rotateY(-22deg)',
      zIndex: 9,
    },
    [`& ~ ${Page} ~ ${Page}`]: {
      transform: 'rotateY(-20deg)',
      zIndex: 8,
  },
    [`& ~ ${Page} ~ ${Page} ~ ${Page}`]: {
      transform: 'rotateY(-18deg)',
      zIndex: 7,
  },
    [`& ~ ${Page} ~ ${Page} ~ ${Page} ~ ${Page}`]: {
          transform: 'rotateY(-18deg)',
      zIndex: 7,
    },
  }
  
});