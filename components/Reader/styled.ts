import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";
import Cover from "components/Cover";

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
  [`${Cover}`]: {
    zIndex: 0,
    transition: `z-index ${OPEN_DURATION.string}`,
    animation: `${rotatePage} ${OPEN_DURATION.string}`,
    animationFillMode: 'forwards',
  },
  [`& ${Cover}`]: {
    zIndex: 100,      
  },  
});