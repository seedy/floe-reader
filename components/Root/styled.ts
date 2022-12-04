import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled('div', {
  boxSizing: 'border-box',
  position: "absolute",
  top: 0,
  left: 0,
  size: '100%',
  padding: pxToRem(16),
  backgroundColor: 'LightGray'
});