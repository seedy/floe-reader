import Box from "components/Box";
import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

export const Root = styled(Box, {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const Slides = styled(Box, {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
})

export const Slide = styled(Box, {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
})