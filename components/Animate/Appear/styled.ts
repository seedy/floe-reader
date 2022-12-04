import pxToRem from "helpers/pxToRem";
import { styled } from "stitches.config";

const TRANSLATE_VALUE = pxToRem(10);

export const Root = styled('span', {
  transform: `translateY(-${TRANSLATE_VALUE})`,
  transition: 'opacity 0.4s, transform 0.4s',
  variants: {
    variant: {
      true: {
        opacity: 1,
        transform: `translateY(0)`
      },
      false: {
        opacity: 0,
      }
    }
  },
  defaultVariants: {
    variant: 'false'
  }
})