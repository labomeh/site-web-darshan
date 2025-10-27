import { cn } from '@/lib/utils';

export interface EventCardProps {
  title: string;
  startDate: string;
  endDate?: string;
  excerpt: string;
  price?: string;
  location?: string;
  availableSpots?: number;
  totalSpots?: number;
  featured?: boolean;
  className?: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function EventCard({
  title,
  startDate,
  endDate,
  excerpt,
  price,
  location,
  availableSpots,
  totalSpots,
  featured = false,
  className,
}: EventCardProps) {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : null;

  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-md',
        'border border-gray-200',
        'transition-all duration-300',
        'hover:border-primary/30 hover:shadow-lg',
        className
      )}
    >
      {featured && (
        <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <i className="fa-solid fa-star mr-1" aria-hidden="true" />À la une
        </div>
      )}

      <h3 className="mb-3 font-headings text-xl text-black">{title}</h3>

      <div className="mb-3 flex items-center gap-2 text-dark-gray">
        <i className="fa-solid fa-calendar text-primary" aria-hidden="true" />
        <span>
          {formattedStartDate}
          {formattedEndDate && ` - ${formattedEndDate}`}
        </span>
      </div>

      {location && (
        <div className="mb-3 flex items-center gap-2 text-dark-gray">
          <i className="fa-solid fa-location-dot text-primary" aria-hidden="true" />
          <span>{location}</span>
        </div>
      )}

      <p className="mb-4 text-dark-gray">{excerpt}</p>

      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="flex flex-col gap-2">
          {price && <div className="font-headings text-lg font-bold text-primary">{price}</div>}
          {availableSpots !== undefined && (
            <div className="text-sm text-dark-gray">
              {availableSpots}
              {totalSpots ? `/${totalSpots}` : ''} places disponibles
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
