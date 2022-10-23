import TextPlaceholder from "components/Text/Placeholder";
import { styled } from "stitches.config";

export const Layer = styled('div', {
  position: 'absolute',
  width: '100%',
});

export const Review = styled('p', {
  overflow: 'hidden',
  overflowWrap: 'break-word',
  color: 'transparent'
})

export const Correction = styled('span', {
  color: 'red'
})


export const Content = styled(TextPlaceholder, {
  position: 'absolute'
});