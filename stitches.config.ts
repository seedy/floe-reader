import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import pxToRem from 'helpers/pxToRem';

export const { styled, getCssText, createTheme } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
      cursive: 'cursive',
      mono: 'monospace',
    },
    colors: {
      default: 'hsl(0, 0%, 0%)',
      background: 'hsl(0, 0%, 100%)',
    },
    fontSizes: {
      button: pxToRem(16),
      1: pxToRem(24),
      2: pxToRem(20),
      3: pxToRem(18),
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    radii: {
      round: '50%',
      pill: '9999px',
    }
  },
  media: {
    bp1: '(min-width: 480px)'
  },
  utils: {
    m: (value: Stitches.PropertyValue<'margin'>) => ({margin: value}),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({marginTop: value}),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({marginBottom: value}),
    mx: (value: Stitches.PropertyValue<'marginLeft'| 'marginRight'>) => ({marginLeft: value, marginRight: value}),
    my: (value: Stitches.PropertyValue<'marginTop' | 'marginBottom'>) => ({marginTop: value, marginBottom: value}),
    p: (value: Stitches.PropertyValue<'padding'>) => ({padding: value}),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({paddingTop: value}),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({paddingBottom: value}),
    px: (value: Stitches.PropertyValue<'paddingLeft'| 'paddingRight'>) => ({paddingLeft: value, paddingRight: value}),
    py: (value: Stitches.PropertyValue<'paddingTop' | 'paddingBottom'>) => ({paddingTop: value, paddingBottom: value}),
    size: (value: Stitches.PropertyValue<'width' | 'height'>) => ({
      width: value,
      height: value,
    }),
    minSize: (value: Stitches.PropertyValue<'minWidth' | 'minHeight'>) => ({
      minWidth: value,
      minHeight: value,
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({borderRadius: value}),
  }
});

export const reader = createTheme({
  colors: {
    default: 'hsl(0, 0%, 0%)',
    background: 'hsl(42, 54%, 88%)',

  }
})