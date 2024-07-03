'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import AutoScroll from 'embla-carousel-auto-scroll';
interface SliderProps {
  children: React.ReactNode;
  wrapperClassName?: string;
  contentClassName?: string;
  autoPlay?: boolean;
  autoScroll?: boolean;
  loop?: boolean;
  autoScrollDirection?: 'forward' | 'backward';
}

export function Slider({
  children,
  wrapperClassName,
  contentClassName,
  autoPlay = true,
  autoScroll = false,
  loop = false,
  autoScrollDirection = 'forward',
}: SliderProps) {
  const autoPlayPlugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const autoScrollPlugin = React.useRef(
    AutoScroll({ stopOnInteraction: false, playOnInit: true, stopOnFocusIn: false, direction: autoScrollDirection })
  );

  return (
    <Carousel
      opts={{
        slidesToScroll: 1,
        align: 'start',
        loop: loop,
      }}
      plugins={autoPlay ? [autoPlayPlugin.current] : autoScroll ? [autoScrollPlugin.current] : []}
      className={cn('w-full', wrapperClassName)}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className={cn(contentClassName)}>{children}</CarouselContent>
      {/*<CarouselPrevious />*/}
      {/*<CarouselNext />*/}
    </Carousel>
  );
}
