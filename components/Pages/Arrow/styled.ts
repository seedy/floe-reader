import { styled } from "stitches.config";
import IconButton from 'components/IconButton'

const ARROW_POSITION = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
}

export const Left = styled(IconButton, {
  ...ARROW_POSITION,
  left: 0,
});

export const Right = styled(IconButton, {
  ...ARROW_POSITION,
  right: 0,
})