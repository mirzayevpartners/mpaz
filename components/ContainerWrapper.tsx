import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}
export default function ContainerWrapper({ children, className }: ContainerWrapperProps) {
  return <div className={cn('myContainer mx-auto', className)}>{children}</div>;
}
