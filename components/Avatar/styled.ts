import Image from 'next/image';
import { styled } from "stitches.config";

export const Root = styled(Image, {
  objectFit: 'cover',
  borderRadius: '$round',
});