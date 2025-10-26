import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  variant?: 'default' | 'white' | 'alt' | 'blue-light' | 'blue-accent';
  noPadding?: boolean;
  noContainer?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  variant = 'default',
  noPadding = false,
  noContainer = false,
  children,
  className,
  id,
}: SectionProps) {
  const sectionContent = noContainer ? children : <Container>{children}</Container>;

  return (
    <section
      id={id}
      className={cn(
        !noPadding && 'py-16 md:py-24',
        variant === 'default' && 'bg-off-white',
        variant === 'white' && 'bg-white',
        variant === 'alt' && 'bg-white',
        variant === 'blue-light' && 'bg-[#f5f8fa]',
        variant === 'blue-accent' && 'bg-secondary-light',
        className
      )}
    >
      {sectionContent}
    </section>
  );
}
