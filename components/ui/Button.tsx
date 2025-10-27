import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    'inline-flex cursor-pointer items-center justify-center',
    'rounded-lg font-medium transition-all duration-300',
    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-50',

    size === 'sm' && 'min-h-[36px] px-4 py-2 text-sm',
    size === 'md' && 'min-h-[48px] px-8 py-3.5 text-base',
    size === 'lg' && 'min-h-[56px] px-12 py-4 text-lg',

    variant === 'primary' && 'bg-primary text-white hover:-translate-y-0.5 hover:bg-primary-dark',
    variant === 'secondary' && 'bg-secondary text-primary hover:bg-secondary-light',
    variant === 'outline' &&
      'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white',

    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
