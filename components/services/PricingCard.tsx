import { cn } from '@/lib/utils';

export interface PricingCardProps {
  name: string;
  price: string;
  savings?: string;
  duration?: string;
  description?: string;
  className?: string;
}

export default function PricingCard({
  name,
  price,
  savings,
  duration,
  description,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-md',
        'border border-gray-200',
        'transition-all duration-300',
        'hover:shadow-lg hover:border-primary/30',
        className
      )}
    >
      <h3 className="mb-3 font-headings text-xl text-black">{name}</h3>

      <div className="mb-4 flex items-baseline gap-2">
        <span className="font-headings text-3xl font-bold text-primary">
          {price}
        </span>
        {duration && (
          <span className="text-sm text-dark-gray">{duration}</span>
        )}
      </div>

      {savings && (
        <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {savings}
        </div>
      )}

      {description && <p className="text-dark-gray">{description}</p>}
    </div>
  );
}
