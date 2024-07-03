import * as React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface ScrollableProps {
  children: React.ReactNode;
  scrollAreaClassName?: string;
}
export default function Scrollable({ children, scrollAreaClassName }: ScrollableProps) {
  return (
    <ScrollArea className={cn('whitespace-nowrap', scrollAreaClassName)}>
      {children}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
