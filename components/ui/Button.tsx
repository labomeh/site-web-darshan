import Link from 'next/link';
import { ButtonProps } from '@/types';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    px-xl py-md
    font-body font-medium text-base
    rounded-md
    transition-all duration-300
    min-h-[48px]
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2
  `;

  const variantClasses = {
    primary: `
      bg-primary text-secondary
      hover:bg-primary-dark hover:shadow-primary
      hover:-translate-y-[2px]
    `,
    secondary: `
      bg-secondary text-primary
      hover:bg-secondary-light hover:shadow-secondary
    `,
    outline: `
      bg-transparent text-primary
      border-2 border-primary
      hover:bg-primary hover:text-secondary
    `,
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
