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
  showDots?: boolean;
  showArrows?: boolean;
}

export function Slider({
  children,
  wrapperClassName,
  contentClassName,
  autoPlay = true,
  autoScroll = false,
  loop = false,
  autoScrollDirection = 'forward',
  showDots = false,
  showArrows = false,
}: SliderProps) {
  const [emblaApi, setApi] = React.useState<any>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const autoPlayPlugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const autoScrollPlugin = React.useRef(
    AutoScroll({ stopOnInteraction: false, playOnInit: true, stopOnFocusIn: false, direction: autoScrollDirection })
  );
  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);
  const updateCurrent = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };
  const handleDotClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    updateCurrent();
  };
  return (
    <>
      <Carousel
        setApi={setApi}
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
        {showArrows && (
          <>
            <CarouselPrevious className={'left-4 !bg-transparent !border-transparent size-10'} />
            <CarouselNext className={'right-4 !bg-transparent !border-transparent size-10'} />
          </>
        )}
      </Carousel>
      {showDots && (
        <div className={'flex items-center justify-center w-full pt-[30px]'}>
          {React.Children.map(children, (child, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn('size-2.5 bg-[#D9D9D9] ml-2', selectedIndex === index && 'bg-secondGold')}
            ></button>
          ))}
        </div>
      )}
    </>
  );
}
