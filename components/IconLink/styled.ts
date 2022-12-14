import pxToRem from 'helpers/pxToRem';
import { styled } from 'stitches.config';

export const Root = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  br: '$round',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'hsl(0,0%,0%)',
  fontSize: '$button',
  fontWeight: '$bold',
  border: 'none',
  background: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: 'hsl(261, 100%, 42%)',
  },
  '&:focus': {
    backgroundColor: 'hsla(261, 100%, 42%, 0.04)',
  },
  '&:active': {
    boxShadow: `0 0 ${pxToRem(10)} ${pxToRem(1)} hsla(0, 0%, 0%, 0.13)`,
  },
  variants: {
    variant: {
      small: {
      size: pxToRem(40),
    },
    medium: {
      size: pxToRem(60),
    },
  }
  },
  defaultVariants: {
    variant: 'medium'
  }
})