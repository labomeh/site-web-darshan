import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
  className?: string;
  underline?: boolean;
}

export default function Heading({
  level = 2,
  align = 'center',
  children,
  className,
  underline = true,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const baseClasses = cn(
    'font-headings text-black',
    underline && 'relative mb-12',
    underline &&
      align === 'center' &&
      'text-center after:mx-auto after:mt-4 after:block after:h-[3px] after:w-[60px] after:bg-primary',
    underline &&
      align === 'left' &&
      'text-left after:mt-4 after:mr-auto after:ml-0 after:block after:h-[3px] after:w-[60px] after:bg-primary',
    underline &&
      align === 'right' &&
      'text-right after:mt-4 after:mr-0 after:ml-auto after:block after:h-[3px] after:w-[60px] after:bg-primary',
    !underline && align === 'center' && 'text-center',
    !underline && align === 'left' && 'text-left',
    !underline && align === 'right' && 'text-right',
    level === 1 && 'text-[48px] leading-tight font-light tracking-tight max-md:text-[32px]',
    level === 2 && 'text-[36px] leading-snug font-normal max-md:text-[28px]',
    level === 3 && 'text-[22px] leading-snug font-medium max-md:text-[20px]',
    level === 4 && 'text-[18px] leading-normal font-medium',
    level === 5 && 'text-[16px] leading-normal font-medium',
    level === 6 && 'text-[14px] leading-normal font-semibold',
    className
  );

  return <Tag className={baseClasses}>{children}</Tag>;
}
