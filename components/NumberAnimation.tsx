'use client';
import CountUp from 'react-countup';
interface IProps {
  className?: string;
  number: number;
}

export default function NumberAnimation({ className, number }: IProps) {
  return <CountUp start={0} duration={4} className={className} end={number} enableScrollSpy scrollSpyOnce />;
}
