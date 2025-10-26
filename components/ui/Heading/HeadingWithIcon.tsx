import type { ReactNode } from 'react';
import Heading from './index';

interface HeadingWithIconProps {
  icon: string;
  level?: 2 | 3 | 4;
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
  className?: string;
  underline?: boolean;
}

export default function HeadingWithIcon({
  icon,
  level = 3,
  align = 'left',
  children,
  className,
  underline = false,
}: HeadingWithIconProps) {
  return (
    <Heading level={level} align={align} className={className} underline={underline}>
      <i className={`${icon} mr-2 text-[1.2em] text-primary`} />
      {children}
    </Heading>
  );
}
