import { CardProps } from '@/types';

export default function Card({
  children,
  className = '',
  hoverable = false,
}: CardProps) {
  const baseClasses = `
    bg-white
    rounded-lg
    p-lg
    shadow-md
    transition-all duration-300
  `;

  const hoverClasses = hoverable
    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : '';

  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return <div className={combinedClasses}>{children}</div>;
}
