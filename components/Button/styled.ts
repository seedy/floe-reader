import pxToRem from 'helpers/pxToRem';
import { styled } from 'stitches.config';

export const Root = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: `${pxToRem(0)} ${pxToRem(12)}`,
  minWidth: pxToRem(80),
  height: pxToRem(30),
  br: pxToRem(6),
  textTransform: 'uppercase',
  fontSize: pxToRem(16),
  fontWeight: '700',
  border: 'none',
  background: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    variant: {
      contained: {
        backgroundColor: 'hsl(261, 100%, 42%)',
        color: 'hsl(0, 100%, 100%)',
        '&:focus': {
          outline: `${pxToRem(2)} solid hsla(0, 100%, 100%)`,
        },
        '&:active': {
          boxShadow: `0 0 ${pxToRem(10)} ${pxToRem(1)} hsla(0, 0%, 0%, 0.26)`,
        },      
      },
      outlined: {
        border: `${pxToRem(2)} solid hsl(261, 100%, 42%)`,
        color: 'hsla(261, 100%, 42%, 0.9)',
        '&:focus': {
          outline: `${pxToRem(3)} solid hsla(261, 100%, 42%, 0.1)`
        },
        '&:active': {
          backgroundColor: 'hsla(261, 100%, 42%, 0.04)',
        }
      },
      text: {
        color: 'hsl(261, 100%, 42%)',
        '&:focus': {
          backgroundColor: 'hsla(261, 100%, 42%, 0.04)',
        },
        '&:active': {
          boxShadow: `0 0 ${pxToRem(10)} ${pxToRem(1)} hsla(0, 0%, 0%, 0.13)`,
        }
      }
    }
  },
  defaultVariants: {
    variant: 'outlined'
  }
})