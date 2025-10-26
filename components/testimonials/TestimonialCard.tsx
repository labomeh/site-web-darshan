import { cn } from '@/lib/utils';

export interface TestimonialCardProps {
  authorName: string;
  content: string;
  rating: number;
  location?: string;
  verified?: boolean;
  className?: string;
}

export default function TestimonialCard({
  authorName,
  content,
  rating,
  location,
  verified = false,
  className,
}: TestimonialCardProps) {
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
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <i
            key={index}
            className="fa-solid fa-star text-primary"
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="mb-4 text-dark-gray italic">&ldquo;{content}&rdquo;</p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-headings font-semibold text-black">
            {authorName}
          </p>
          {location && <p className="text-sm text-dark-gray">{location}</p>}
        </div>

        {verified && (
          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <i className="fa-solid fa-circle-check" aria-hidden="true" />
            <span>Vérifié</span>
          </div>
        )}
      </div>
    </div>
  );
}
