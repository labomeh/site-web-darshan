import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  hoverable?: boolean;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  hoverable = true,
  children,
  className,
}: CardProps) {
  const content = (
    <>
      {image && (
        <img
          src={image}
          alt={imageAlt || title || 'Card image'}
          className="mb-4 aspect-[4/5] w-full rounded-lg object-cover"
          loading="lazy"
        />
      )}
      {title && <h3 className="mb-2 font-headings text-2xl text-black">{title}</h3>}
      {description && <p className="leading-relaxed text-dark-gray">{description}</p>}
      {children}
    </>
  );

  const cardClasses = cn(
    'rounded-2xl bg-white p-8 shadow-sm',
    'transition-all duration-300',
    hoverable && 'hover:shadow-lg',
    href && 'cursor-pointer',
    className
  );

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
