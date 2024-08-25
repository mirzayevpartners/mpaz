'use client';
import Zoom from 'react-medium-image-zoom';
import './ImageZoom.css';
import { PropsWithChildren } from 'react';
export default function ImageZoom({ children }: PropsWithChildren) {
  return <Zoom>{children}</Zoom>;
}
