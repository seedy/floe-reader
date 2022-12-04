import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";


export const Root = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: pxToRem(12),
  minSize: pxToRem(40),
  br: pxToRem(6),
  border: 'none',
  backgroundColor: 'hsl(261, 100%, 42%)',
  color: 'hsl(0, 100%, 100%)',
  '&:hover': {
    cursor: 'pointer',
  },
  '&:focus': {
    outline: `${pxToRem(2)} solid hsla(0, 0%, 0%, 0.9)`,
  },
  '&:active': {
    boxShadow: `0 0 ${pxToRem(10)} ${pxToRem(1)} hsla(0, 0%, 0%, 0.26)`,
  },
});