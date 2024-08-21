'use client';

import React from 'react';

interface GridWrapperProps {
  children: React.ReactNode;
}

export default function GridWrapper({ children }: GridWrapperProps) {
  return <div className={'grid grid-cols-3 w-full gap-x-8 800:grid-cols-1'}>{children}</div>;
}
