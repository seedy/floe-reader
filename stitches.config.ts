import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
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

