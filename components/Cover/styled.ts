import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('div', {
  position: 'absolute',
  boxSizing: 'border-box',
  backgroundColor: 'hsl(229, 20%, 52%)',
  size: '100%',
  transformOrigin: '0% 100%',
  transformStyle: 'preserve-3d',
  borderRadius: `${pxToRem(2)} ${pxToRem(6)} ${pxToRem(6)} ${pxToRem(2)}`
});

export const Content = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: pxToRem(8),
  width: '100%',
  height: '100%'
})