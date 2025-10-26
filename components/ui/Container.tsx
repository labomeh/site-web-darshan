import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  maxWidth?: 'full' | 'text' | 'content' | 'default';
  children: ReactNode;
  className?: string;
}

export default function Container({ maxWidth = 'default', children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6',
        maxWidth === 'default' && 'max-w-[1200px]',
        maxWidth === 'text' && 'max-w-3xl',
        maxWidth === 'content' && 'max-w-[800px]',
        maxWidth === 'full' && 'max-w-full',
        className
      )}
    >
      {children}
    </div>
  );
}
